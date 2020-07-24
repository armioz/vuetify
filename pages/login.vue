<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center"
        ><img
          class="VuetifyLogo"
          alt="Vuetify Logo"
          src="/hospital-svgrepo-com.svg"
        />
        <h2>Hariphunchai Hospital BAS System login</h2></v-col
      >
      <v-col>
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login From</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form ref="loginForm" v-model="valid" class="formlogin">
              <v-text-field
                v-model="username"
                label="Uesrname"
                :rules="rules.username"
                :counter="20"
                prepend-icon="mdi-account"
                placeholder="username"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                :rules="rules.password"
                :counter="20"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                placeholder="password"
                prepend-icon="mdi-lock"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <alertform
                v-if="alert.show"
                class="mt-2"
                :type="alert.type"
                :text="alert.text"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="mr-4 mt-2"
              color="primary"
              :loading="loading"
              @click="logingIn"
              >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'login',
  name: 'LoginForm',
  data() {
    return {
      alert: {
        show: false,
        type: 'error',
        text: '',
      },
      showPassword: false,
      valid: false,
      loading: false,
      username: '',
      password: '',
      rules: {
        username: [
          (v) => !!v || 'Username is required',
          (v) =>
            (v && v.length <= 25) || 'Username must be less than 25 characters',
          (v) =>
            (v && v.length >= 3) || 'Username must be more than 3 characters',
        ],
        password: [
          (v) => !!v || 'Password is required',
          (v) =>
            (v && v.length <= 25) || 'Password must be less than 25 characters',
          (v) =>
            (v && v.length >= 3) || 'Username must be more than 3 characters',
        ],
      },
    }
  },
  methods: {
    async logingIn() {
      const validated = this.$refs.loginForm.validate()
      // console.log(validated)
      if (validated) {
        this.alert.show = false
        this.loading = true
        try {
          // console.log(
          //   this.$auth.loginWith('local', {
          //     data: {
          //       email: this.username,
          //       password: this.password,
          //     },
          //   })
          // )
          await this.$auth.loginWith('local', {
            data: {
              email: this.username,
              password: this.password,
            },
          })
          this.$router.push('/')
        } catch (err) {
          this.alert.show = true
          this.alert.text = 'Invalid username or password!'
          // console.log(err)
        }
        this.$router.push('/')
        // console.log('login success')
        this.loading = false
      }
    },
  },
}
</script>

<style>
.logo {
  text-align: center;
  display: block;
}
.VuetifyLogo {
  width: 200px;
}
.fill-height {
  background: turquoise;
}
</style>
