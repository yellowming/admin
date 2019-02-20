<template>
  <v-snackbar
      v-model="show"
      auto-height
      bottom
      right
      absolute
      :color="color"
      :timeout="timeout"
    >
      {{message}}
    </v-snackbar>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'ToastComponent',
  data () {
    return {
      message: '',
      show: false,
      timeout: 3000,
      color: "success"
    }
  }
}
</script>