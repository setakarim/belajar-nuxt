<template>
  <tr>
    <td>{{ data.id }}</td>
    <td>{{ data.title }}</td>
    <td>{{ data.completed ? "Selesai" : "Belum Selesai" }}</td>
    <td>
      <nuxt-link :to="'/todo/' + data.id">View</nuxt-link>
      <nuxt-link :to="'/todo/' + data.id + '/edit'">Edit</nuxt-link>

      <button @click="hapus">Delete</button>
    </td>
  </tr>
</template>

<script>
import Axios from "axios";

export default {
  props: ["data"],
  methods: {
    hapus() {
      const setuju = confirm("Are You Sure");

      if (setuju) {
        Axios.delete("http://localhost:3001/todos/" + this.data.id).then(
          res => {
            console.log("enak");
            this.$emit("refresh-page");
          }
        );
      } else {
        return;
      }
    }
  }
};
</script>
<style scoped></style>
