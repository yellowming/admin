<template>
  <v-toolbar scroll-off-screen app dense>

    <v-toolbar-side-icon
      @click.stop="collspanToggle"
    ></v-toolbar-side-icon>
      

    <v-spacer></v-spacer>

    <v-toolbar-items class="">

      <locale-dropdown/>
      
      <v-menu open-on-hover offset-y>
        <v-btn flat slot="activator" v-if="user" style="text-transform:none">
            {{ user.name }}
            <v-spacer/>
            <v-icon>arrow_drop_down</v-icon>
        </v-btn>
        
      <v-list>
        <v-list-tile :to="{ name: 'settings.profile' }">
          <v-list-tile-title>{{ $t('settings') }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile @click="logout">
          <v-list-tile-title>{{ $t('logout') }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    </v-toolbar-items>
    
    </v-toolbar>
  
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },
  props: {
    collspan:''
  },

  data: () => ({
    appName: window.config.appName
    
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    },
    collspanToggle(){
      this.$emit('collspanToggle')
    }
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
