<template>
  <card :title="$t('your_info')">
    <form @submit.prevent="update">
      <span :message="$t('info_updated')"></span>

      <!-- Name -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('name') }}</label>
        <div class="col-md-7">
          <input v-model="name"  class="form-control" type="text" name="name">
        </div>
      </div>

      <!-- Email -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
        <div class="col-md-7">
          <input v-model="email" class="form-control" type="email" name="email">
        </div>
      </div>

      <!-- Submit Button -->
      <div class="form-group row">
        <div class="col-md-9 ml-md-auto">
          <button type="success">{{ $t('update') }}</button>
        </div>
      </div>
    </form>
  </card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  created () {
    
  },

  methods: {
    async update () {
      const { data } = await this.axios.patch('/api/settings/profile')

      this.$store.dispatch('auth/updateUser', { user: data })
    }
  }
}
</script>
