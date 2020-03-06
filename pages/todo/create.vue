<template>
  <b-container fluid="md" class="mt--4">
    <h1>Create Todo</h1>
    <nuxt-link to="/todo"><button>Kembali</button></nuxt-link>

    <form>
      <input
        type="text"
        v-model="todo.title"
        name="title"
        placeholder="Judul"
      />
      <input
        type="checkbox"
        v-model="todo.completed"
        name="completed"
        placeholder="Selesai"
      />

      <input
        type="number"
        v-model="todo.userId"
        name="userId"
        placeholder="User Id"
      />

      <button @click.prevent="kirim">Kirim</button>
    </form>
    <div v-if="isError">
      <b-alert show variant="danger">Error Bro</b-alert>
    </div>
  </b-container>
</template>
<script>
import Axios from "axios";

export default {
  data() {
    return { todo: {}, isError: false };
  },
  methods: {
    kirim() {
      console.log("Kekirim : ", this.todo);

      Axios.post("http://localhost:3001/todos", this.todo)
        .then(res => {
          this.$router.push("/todo");
        })
        .catch(err => {
          console.error(err);

          this.isError = true;
        });
    }
  }
};
</script>
