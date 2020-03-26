<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">Home</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="/todo">Todo</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <div v-if="$auth.loggedIn">
        {{ $auth.user.email }}
        <b-button variant="danger" @click="$auth.logout()">Logout</b-button>
      </div>
      <div v-else>
        <b-button variant="success" to="/login">Login</b-button>
        <b-button variant="secondary" to="/register">Register</b-button>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style></style>
