<template>
  <b-container fluid="md" style="margin-top: 24px;">
    <div class="row">
      <div class="col">
        <h1>Create Todo</h1>
      </div>
      <div class="col text-right">
        <nuxt-link to="/todo"><b-button>Kembali</b-button></nuxt-link>
      </div>
    </div>
    <form class="row" style="margin-top: 24px;">
      <div class="col-md-6">
        <b-form-input
          type="text"
          v-model="todo.title"
          name="title"
          placeholder="Judul"
        />
      </div>
      <div class="col-md-2">
        <b-form-checkbox
          type="checkbox"
          v-model="todo.completed"
          name="completed"
        >
          Completed
        </b-form-checkbox>
      </div>
      <div class="col-md-2">
        <b-form-input
          type="number"
          v-model="todo.userId"
          name="userId"
          placeholder="User Id"
        />
      </div>
      <div class="col-md-2 text-right">
        <b-button @click.prevent="kirim" variant="primary">Kirim</b-button>
      </div>
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
