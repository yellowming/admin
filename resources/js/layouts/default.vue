
<template>
  <v-app id="sandbox" dark>
    <v-navigation-drawer
      v-model="layout.collspan"
      floating
      overflow
      app
    >
    <menu-bar />
	  </v-navigation-drawer>
    <nav-bar v-on:collspanToggle="collspanToggle"/>
    <v-content>
      <v-container fluid>
		<child />
          
      </v-container>
    </v-content>
    <v-footer inset app absolute>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar'
import MenuBar from '~/components/MenuBar'
  export default {
    components: {
      NavBar,
      MenuBar
    },
    data: () => ({
      layout: {
        collspan: null
      }
    }),
    methods:{
      collspanToggle: function(){
        this.layout.collspan = !this.layout.collspan
      }
    }
  }
</script>







