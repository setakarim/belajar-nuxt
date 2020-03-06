<template>
  <b-container fluid="md" class="mt--4">
    <div v-if="!isError">
      <h1>Detail {{ this.$route.params.id }}</h1>
      <nuxt-link to="/todo"><button>Kembali</button></nuxt-link>
      <nuxt-link :to="'/todo/' + this.$route.params.id + '/edit'"
        ><button>Edit</button></nuxt-link
      >

      <h3 class="mt--4">{{ todo.title }}</h3>
      <h6>{{ todo.completed ? "Selesai" : "Belum Selesai" }}</h6>
    </div>
  </b-container>
</template>

<script>
import TodoListItem from "~/components/ListItem";
import Axios from "axios";

export default {
  components: { TodoListItem },
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
