<template>
  <v-list>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>仪表盘</v-list-tile-title>
        </v-list-tile>
  
		<v-list-tile to="/about">
          <v-list-tile-action>
            <v-icon>assignment</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>文章</v-list-tile-title>
        </v-list-tile>

    <v-list-tile to="/user">
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>用户</v-list-tile-title>
        </v-list-tile>
        
      </v-list>
  
</template>

<script>

export default {
  data: () => ({
    appName: window.config.appName,
    admins: [
      ['Management', 'people_outline'],
      ['Settings', 'settings']
    ],
    cruds: [
      ['Create', 'add'],
      ['Read', 'insert_drive_file'],
      ['Update', 'update'],
      ['Delete', 'delete']
    ]
  }),


  methods: {
    
  }
}
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}
</style>
