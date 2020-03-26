<template>
  <div>
    <h1>Login</h1>
    <UserAuthForm
      :submit-form="loginUser"
      :button-text="'Login'"
      :disabled-button="disabledButton"
    />
    <OtherLogin :submit-form="loginWithOAuth" />
  </div>
</template>

<script>
import UserAuthForm from "../components/UserAuthForm";
import OtherLogin from "../components/OtherLogin";

export default {
  components: { UserAuthForm, OtherLogin },
  data() {
    return {
      disabledButton: false
    };
  },
  methods: {
    async loginUser(loginInfo) {
      this.disabledButton = true;
      try {
        const res = await this.$auth.loginWith("local", {
          data: loginInfo
        });
        // eslint-disable-next-line no-console
        console.log("Response Login : ", res.data);
        // this.$store.dispatch('snackbar/setSnackbar', {
        //   text: 'Thanks for sign in'
        // })
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    },
    async loginWithOAuth(loginInfo) {
      try {
        const res = await this.$auth.loginWith("social", {
          data: loginInfo
        });
        // eslint-disable-next-line no-console
        console.log("Response Login : ", res.data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    }
  }
};
</script>
