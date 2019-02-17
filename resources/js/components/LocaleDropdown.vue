<template>

 <v-menu offset-y open-on-hover>
      <v-btn
        flat
        slot="activator"
      >
        {{locales[locale]}}
        <v-spacer/>
        <v-icon>arrow_drop_down</v-icon>
      </v-btn>

      <v-list>
        <v-list-tile
          v-for="(item, index) in locales"
          :key="index"
          @click="setLocale(index)"
        >
          <v-list-tile-title>{{ item }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'

export default {
  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales'
  }),
  created: function(){
    
  },
  methods: {
    setLocale (locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)

        this.$store.dispatch('lang/setLocale', { locale })
      }
    }
  }
}
</script>
