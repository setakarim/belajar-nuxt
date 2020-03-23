<template>
  <b-container>
    <div>
      <h1>Register</h1>
      <UserAuthForm
        :submit-form="registerUser"
        :button-text="'Register'"
        :has-name="true"
        :disabled-button="disabledButton"
      />
      <OtherLogin />
    </div>
  </b-container>
</template>

<script>
import UserAuthForm from '../components/UserAuthForm'
import OtherLogin from '../components/OtherLogin'

export default {
  auth: false,
  components: { UserAuthForm, OtherLogin },
  data() {
    return {
      disabledButton: false
    }
  },
  methods: {
    async registerUser(registerInfo) {
      this.disabledButton = true
      try {
        const res = await this.$axios.post('register', registerInfo)
        this.$auth.loginWith('local', {
          data: registerInfo
        })
        // eslint-disable-next-line no-console
        console.log('Response Register : ', res.data)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err)
      }
    }
  }
}
</script>
