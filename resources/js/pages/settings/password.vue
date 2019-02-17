<template>
  <card :title="$t('your_password')">
    <form @submit.prevent="update">
      <span :message="$t('password_updated')"> </span>

      <!-- Password -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('new_password') }}</label>
        <div class="col-md-7">
          <input v-model="password" class="form-control" type="password" name="password">
        </div>
      </div>

      <!-- Password Confirmation -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('confirm_password') }}</label>
        <div class="col-md-7">
          <input v-model="password_confirmation"  class="form-control" type="password" name="password_confirmation">
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

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    
  }),

  methods: {
    async update () {
      await this.axios.patch('/api/settings/password')

    }
  }
}
</script>
