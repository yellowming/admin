<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  @submit.prevent="login"
                  @keydown="form.onKeydown($event)"
                >
              <v-toolbar dark color="primary">
                <v-toolbar-title>{{ $t('login') }}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                
                  <v-text-field prepend-icon="person" name="user" :label="$t('email')" v-model="email" :rules="emailRules" required></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" :label="$t('password')" type="password" v-model="password" :rules="passwordRules" required></v-text-field>
                  <v-checkbox v-model="remember" name="remember" :label="$t('remember_me')"></v-checkbox>
              </v-card-text>
              <v-card-actions>
                

              <router-link :to="{ name: 'password.request' }" class="small ml-auto my-auto">
                {{ $t('forgot_password') }}
              </router-link>
                <v-spacer></v-spacer>
                <v-btn color="primary" :loading="loading" type="submit">{{ $t('login') }}</v-btn>
              </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>

export default {
  layout: 'basic',
  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => ({
      valid: true,
      email: '867822412@qq.com',
      password: '4356465754676',
      loading: false,
      emailRules: [
        v => !!v || '请输入邮箱',
        v => /.+@.+/.test(v) || '邮箱格式不正确'
      ],
      passwordRules: [
        v => !!v || '请输入密码',
        v => (v.length >= 10) || '密码必须大于10个字符'
      ],
    remember: false
  }),
  methods: {
    async login () {
      // Submit the form.
      this.loading = true
      const { data } = await this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
        remember: this.remember
      })
      this.loading = false
      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token_type + " " + data.access_token,
        expires: data.expires_in
      })
      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
