<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <p>Id: {{ props.row.id }}</p>
        <p>name: {{ props.row.name }}</p>
        <p>email: {{ props.row.email }}</p>
        <p>phone: {{ props.row.phone }}</p>
      </template>
    </el-table-column>
    <el-table-column label="Id" prop="id"> </el-table-column>
    <el-table-column label="Name" prop="name"> </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <el-button @click="detalheUser(scope.row)"> detalhes</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
     
    

<script>
import axios from "axios";
export default {
  name: "Usuarios",
  data() {
    return {
      data: [],
    };
  },
  methods: {
    detalheUser(row) {
      this.$router.push({
        name: "Detalhes",
        params: { Detalhes: row },
      });
    },
    getUser() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.data = response.data;
        });
    },
  },
  created() {
    this.getUser();
  },
};
</script>

