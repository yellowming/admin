<template>
<div>
  <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
<v-card>
  <v-card-title primary-title>
      <v-text-field
        v-model="searcher.input"
        append-icon="search"
        label="用户名、邮箱"
        single-line
        hide-details
        @keyup.enter="searchEvent"
      ></v-text-field>
      <v-spacer></v-spacer>
    <v-dialog v-model="dialog" persistent max-width="600px">
  <v-btn fab dark slot="activator" color="success">
      <v-icon dark>add</v-icon>
    </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">新增用户</span>
        </v-card-title>
        <v-card-text>
          <v-text-field label="用户名*" v-model="dialogForm.name" required autocomplete="off"></v-text-field>
          <v-text-field label="邮箱*" v-model="dialogForm.email" name="email" type="email" autocomplete="off" required></v-text-field>
          <v-text-field label="密码*" v-model="dialogForm.password" name="password" type="password" autocomplete="new-password" required></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialogFormReset">关闭</v-btn>
          <v-btn color="blue darken-1" flat @click="dialogFormSubmit">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card-title>

  <v-data-table
    :headers="tableHeaders"
    :items="userList"
    :loading="userListLoading"
    :total-items="totalUsers"
    :pagination.sync="pagination"
    :rows-per-page-items="pageItems"
    must-sort
    item-key="name"
    no-data-text="没有数据"
    rows-per-page-text="每页显示"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.created_at }}</td>
      <td>
        <v-btn color="info" flat icon @click="dialog = false">
          <v-icon dark>edit</v-icon>
        </v-btn>
        <v-btn color="error" flat icon @click="userDelete(props)">
          <v-icon dark>delete</v-icon>
        </v-btn>
      </td>
    </template>
  </v-data-table>
</v-card>


</div>
</template>

<script>
  export default {
    middleware: 'auth',
    data () {
      return {
        totalUsers: 0,
        userList: [],
        userListLoading: false,
        pagination: {},
        pageItems: [5,10,25],
        searcher: {
          input: "",
          value: null
        },
        tableHeaders: [
          { text: 'ID', value: 'id' },
          { text: '用户名', value: 'name', sortable: false },
          { text: '邮箱', value: 'email', sortable: false },
          { text: '创建时间', value: 'created_at' },
          { text: '', value:'', sortable: false}
        ],
        
        dialogForm: {
          name: '',
          email: '',
          password: ''
        },
        dialog: false,
        breadcrumbs: [
          { text: '首页', disabled: false, to: '/' },
          { text: '用户', to: '/user' }
        ],
      
      }
    },
    mounted (){
      
    },
    watch: {
      pagination: {
        handler () {
          this.getUsersFromApi();
        },
        deep: true
      }
    },
    methods:{
      getUsersFromApi(){
        this.userListLoading = true
        this.axios.get('user/list',{ params:{
          page: this.pagination.page,//当前页
          row: this.pagination.rowsPerPage,//每页大小
          sortBy: this.pagination.sortBy, //分页字段
          desc: this.pagination.descending,//第几页
          search: this.searcher.value,//查询条件
        }})
        .then(Response => {
          this.userListLoading = false
          this.userList = Response.data.success.data
          this.totalUsers = Response.data.success.total
        })
      },
      searchEvent(){
        this.searcher.value = this.searcher.input==""?null:this.searcher.input
        this.getUsersFromApi()
      },
      dialogFormSubmit(){
        this.axios.post('user/add',this.dialogForm)
        .then(Response => {
          this.dialog = false
          this.dialogFormReset()
          this.getUsersFromApi()
        })
      },
      dialogFormReset(){
        this.dialog = false
        this.dialogForm = {
          name: '',
          email: '',
          password: ''
        }
      },
      userDelete(user){
        if(confirm("警告：确定删除用户"+user.item.name+"吗？删除后无法恢复！！！！")){
          this.axios.delete('user/delete',{
            data:{id:user.item.id}
          }).then(Response => {
            this.getUsersFromApi()
          })
          console.log(user)
        }
        
      }
    }
  }
</script>