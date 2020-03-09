<template>
  <b-container fluid="md" style="margin-top: 24px;">
    <h1 style="margin-bottom: 24px;">Todo List</h1>
    <div class="row">
      <div class="col-md-6">
        <nuxt-link to="/todo/create">
          <b-button style="margin-bottom: 24px;">Create Todo</b-button>
        </nuxt-link>
      </div>
      <div class="col-md-5">
        <b-form-input
          type="text"
          v-model="query"
          name="query"
          placeholder="Search"
        />
      </div>
      <div class="col-md-1">
        <b-button variant="outline-dark" @click.prevent="search"
          >Search</b-button
        >
      </div>
    </div>
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
      <b-table-simple hover small caption-top responsive>
        <b-thead>
          <b-tr>
            <b-th>ID</b-th>
            <b-th>User ID</b-th>
            <b-th>Title</b-th>
            <b-th>Status</b-th>
            <b-th>Action</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <TodoListItem
            :data="todo"
            v-for="todo in todos"
            :key="todo.id"
            @refresh-page="getItem"
          />
        </b-tbody>
      </b-table-simple>
    </div>
  </b-container>
</template>

<script>
import TodoListItem from "~/components/ListItemTodo";
import Axios from "axios";

export default {
  components: { TodoListItem },
  data() {
    return {
      todos: [],
      isLoading: false,
      isEmpty: false,
      isError: false,
      query: ""
      // filteredItems: []
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
          // this.filteredItems = res.data;

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
    },
    search() {
      console.log("search");

      Axios.get("http://localhost:3001/todos", {
        params: {
          q: this.query
        }
      })
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
  // computed: {
  //   filteredItems() {
  //     return this.todos.filter(
  //       item =>
  //         item.title.toLowerCase().match(this.query.trim().toLowerCase()) ||
  //         item.id.toString().match(this.query.toLowerCase())
  //     );
  //   }
  // }
  // watch: {
  //   query(newValue, oldValue) {
  //     this.filteredItems = this.todos.filter(item =>
  //       item.title.toLowerCase().match(this.query.trim().toLowerCase())
  //     );
  //   }
  // }
};
</script>
<style scoped></style>
