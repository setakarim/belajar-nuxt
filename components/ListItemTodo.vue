<template>
  <b-tr>
    <b-td>{{ data.id }}</b-td>
    <b-td>{{ data.userId }}</b-td>
    <b-td>{{ data.title }}</b-td>
    <b-td>
      <b-badge v-if="data.completed" variant="success">Selesai</b-badge>
      <b-badge v-else variant="danger">Belum Selesai</b-badge>
    </b-td>
    <b-td>
      <nuxt-link :to="'/todo/' + data.id">
        <b-button variant="info">
          View
        </b-button>
      </nuxt-link>
      <nuxt-link :to="'/todo/' + data.id + '/edit'">
        <b-button variant="warning">
          Edit
        </b-button>
      </nuxt-link>
      <b-button @click="hapus" variant="danger">Delete</b-button>
    </b-td>
  </b-tr>
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
