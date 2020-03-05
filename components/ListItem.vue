<template>
  <tr>
    <td>{{ data.id }}</td>
    <td>{{ data.title }}</td>
    <td>{{ data.completed ? "Selesai" : "Belum Selesai" }}</td>
    <td>View, Edit, Delete</td>
  </tr>
</template>

<script>
export default {
  props: ["data"]
};
</script>
<style scoped></style>
