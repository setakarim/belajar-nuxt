<template>
  <b-container fluid="md" class="mt--4">
    <h1>Todo List</h1>
    <nuxt-link to="/todo/create"><button>Create Todo</button></nuxt-link>
    <div v-if="isLoading">
      <b-spinner type="grow" label="Loading..."></b-spinner>
    </div>
    <div v-else-if="isError">
      <b-alert show variant="danger">Error Bro</b-alert>
    </div>
    <div v-else-if="isEmpty">
      <b-alert show variant="info">Data Kosong</b-alert>
    </div>
    <div v-else>
      <table border="1 solid">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <TodoListItem
            :data="todo"
            v-for="todo in todos"
            :key="todo.id"
            @refresh-page="getItem"
          />
        </tbody>
      </table>
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
      todos: [],
      isLoading: false,
      isEmpty: false,
      isError: false
    };
  },
  mounted() {
    this.getItem();
  },
  methods: {
    getItem() {
      this.isLoading = true;

      Axios.get("http://localhost:3001/todos")
        .then(res => {
          this.todos = res.data;

          if (this.todos.length === 0) {
            this.isEmpty = true;
          }

          this.isLoading = false;
        })
        .catch(err => {
          console.error(err);

          this.isError = true;
          this.isLoading = false;
        });
    }
  }
};
</script>
<style scoped></style>
