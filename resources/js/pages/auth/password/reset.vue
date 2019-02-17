<template>
  <div class="row">
    <div class="col-lg-8 m-auto">
      <card :title="$t('reset_password')">
        <form @submit.prevent="reset">

          <!-- Email -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
            <div class="col-md-7">
              <input v-model="email" class="form-control" type="email" name="email" readonly>
            </div>
          </div>

          <!-- Password -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('password') }}</label>
            <div class="col-md-7">
              <input v-model="password" class="form-control" type="password" name="password">
            </div>
          </div>

          <!-- Password Confirmation -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">{{ $t('confirm_password') }}</label>
            <div class="col-md-7">
              <input v-model="password_confirmation" class="form-control" type="password" name="password_confirmation">
            </div>
          </div>

          <!-- Submit Button -->
          <div class="form-group row">
            <div class="col-md-9 ml-md-auto">
              <button>
                {{ $t('reset_password') }}
              </button>
            </div>
          </div>
        </form>
      </card>
    </div>
  </div>
</template>

<script>

export default {
  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('reset_password') }
  },

  data: () => ({
    status: ''
  }),

  created () {
    
  },

  methods: {
    async reset () {
      const { data } = await this.axios.post('/api/password/reset')

      this.status = data.status

    }
  }
}
</script>
