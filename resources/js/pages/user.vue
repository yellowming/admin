<template>
<div>
  <v-breadcrumbs :items="items">
      <template slot="item" slot-scope="props">
        <a :href="props.item.href" :class="[props.item.disabled && 'disabled']">{{ props.item.text.toUpperCase() }}</a>
      </template>
    </v-breadcrumbs>
<v-card>
  <v-card-title primary-title>
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
    
    
    <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="搜索用户"
        single-line
        hide-details
      ></v-text-field>
      
      
  </v-card-title>

  <v-data-table
    :headers="headers"
    :items="desserts"
    :loading="userLoading"
    item-key="name"
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
        <v-btn color="error" flat icon @click="dialog = false">
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
    created: function(){
      this.userLoading = true
      this.axios.get('user/list')
      .then(Response => (this.desserts = Response.data.success , this.userLoading = false))
    },
    middleware: 'auth',
    data () {
      return {
        headers: [
          { text: 'ID', value: 'id' },
          { text: '用户名', value: 'name' },
          { text: '邮箱', value: 'email' },
          { text: '创建时间', value: 'created_at' },
          { text: '', value:'', sortable: false}
        ],
        dialogForm: {
          name: '',
          email: '',
          password: ''
        },
        userLoading: false,
        desserts: [],
        dialog: false,
        items: [
        {
          text: '首页',
          disabled: false,
          to: '/home'
        },
        {
          text: '用户',
          disabled: false,
          to: 'breadcrumbs_link_1'
        },
        {
          text: '用户列表',
          disabled: true,
          to: 'breadcrumbs_link_2'
        }
      ],
      
      }
    },
    mounted: function (){
      
      
    },
    methods:{
      dialogFormSubmit(){
        this.axios.post('user/add',this.dialogForm)
        .then(function(Response){
          console.log(Response)
        })
      },
      dialogFormReset(){
        this.dialogForm = {
          name: '',
          email: '',
          password: ''
        }
      }
    }
  }
</script>