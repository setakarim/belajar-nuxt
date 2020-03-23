<template>
  <b-card style="max-width: 20rem;" class="mt-4 row">
    <b-form class="text-left col-12">
      <label v-if="hasName" for="text-name">Name</label>
      <b-input
        v-if="hasName"
        id="text-name"
        v-model="userInfo.name"
        class="mb-4"
        type="text"
        placeholder="Name"
      ></b-input>

      <label for="text-email">Email Address</label>
      <b-input
        id="text-email"
        v-model="userInfo.email"
        class="mb-4"
        type="email"
        placeholder="Enter email"
      ></b-input>

      <label for="text-password">Password</label>
      <b-input
        id="text-password"
        v-model="userInfo.password"
        class="mb-4"
        type="password"
        aria-describedby="password-help-block"
      ></b-input>

      <b-button
        :disabled="disabledButton"
        class="mt-2 mb-2"
        variant="primary"
        @click="submitForm(userInfo)"
      >
        {{ buttonText }}
      </b-button>
    </b-form>
  </b-card>
</template>

<script>
export default {
  props: {
    submitForm: { type: Function, default: null },
    buttonText: { type: String, default: '' },
    hasName: { type: Boolean, default: false },
    disabledButton: { type: Boolean, default: false }
  },
  data() {
    return {
      userInfo: {
        email: 'eve.holt@reqres.in',
        password: 'pistol',
        name: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
