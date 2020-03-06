<template>
  <b-container fluid="md" class="mt--4">
    <h1>Update Todo</h1>
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

      <button @click.prevent="simpan">Simpan</button>
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
    return {
      todo: {},
      isError: false
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      console.log(this.$route);
      Axios.get("http://localhost:3001/todos/" + this.$route.params.id)
        .then(res => {
          this.todo = res.data;
        })
        .catch(err => {
          console.error(err);

          this.isError = true;
        });
    },
    simpan() {
      console.log("Disimpan : ", this.todo);

      Axios.patch(
        "http://localhost:3001/todos/" + this.$route.params.id,
        this.todo
      )
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
