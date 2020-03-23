<template>
  <div class="mt-4">
    <p>Other Login</p>
    <b-button @click="submitForm">OAuth2</b-button>
  </div>
</template>

<script>
export default {
  props: {
    submitForm: { type: Function, default: null }
  }
}
</script>
