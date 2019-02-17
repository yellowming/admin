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
  <v-btn fab dark small slot="activator" color="success">
      <v-icon dark>add</v-icon>
    </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">新增用户</span>
        </v-card-title>
        <v-card-text>
                <v-text-field
                  label="用户名*"
                  required
                ></v-text-field>
                <v-text-field label="邮箱*" flat name="email" type="email" browser-autocomplete="xc" required></v-text-field>
                <v-text-field label="密码*" name="password" type="password" value=" " required></v-text-field>
            
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">关闭</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <v-btn fab dark small color="error" v-if="selected.length >= 1">
      <v-icon dark>delete</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="搜索用户"
        single-line
        hide-details
      ></v-text-field>
      
      
  </v-card-title>

  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :loading="userLoading"
    item-key="name"
    select-all
  >
    <template slot="items" slot-scope="props">
      <td>
          <v-checkbox
            :input-value="props.selected"
            primary
            hide-details
          ></v-checkbox>
      </td>
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.created_at }}</td>
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
          {
            text: 'ID',
            align: 'left',
            sortable: false,
            value: 'id'
          },
          { text: '用户名', value: 'name' },
          { text: '邮箱', value: 'email' },
          { text: '创建时间', value: 'created_at' },
          
        ],
        selected: [],
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
      
      
    }
  }
</script>