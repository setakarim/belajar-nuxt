<template>
  <b-container fluid="md" style="margin-top: 24px;">
    <div v-if="!isError">
      <h1>Detail {{ this.$route.params.id }}</h1>
      <nuxt-link to="/todo"><b-button>Kembali</b-button></nuxt-link>
      <nuxt-link :to="'/todo/' + this.$route.params.id + '/edit'">
        <b-button variant="warning">Edit</b-button>
      </nuxt-link>
      <h3 style="margin-top: 24px;">{{ todo.title }}</h3>
      <b-badge v-if="todo.completed" variant="success">Selesai</b-badge>
      <b-badge v-else variant="danger">Belum Selesai</b-badge>
    </div>
  </b-container>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      todo: {},
      isError: false
    };
  },
  mounted() {
    Axios.get("http://localhost:3001/todos/" + this.$route.params.id)
      .then(res => {
        this.todo = res.data || {};
      })
      .catch(err => {
        console.error(err);

        this.isError = true;
      });
  }
};
</script>
<style scoped></style>
