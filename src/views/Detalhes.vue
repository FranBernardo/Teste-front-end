<template>
  <el-card class="box-card" :detalheUser="detalheUser">
    <div slot="header" class="clearfix">
      <span>Usuario: </span>
      {{ detalheUser.username }}
    </div>
    <div>
      <span>Nome: </span>
      {{ detalheUser.name }}<br />
      <span>Email: </span>
      {{ detalheUser.email }}<br />
      <span>Numero: </span>
      {{ detalheUser.phone }}<br />
      <span>Site: </span>
      {{ detalheUser.website }}
    </div>
  </el-card>
</template>

<script>
import axios from "axios";

export default {
  props: ["Detalhes"],
  data() {
    return {
      detalheUser: [],
    };
  },
  methods: {
    getDetalhes() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${this.Detalhes.id}`)
        .then((response) => {
          this.detalheUser = response.data;
        });
    },
  },

  created() {
    this.getDetalhes();
  },
};
</script>

<style>
.detalhe {
  display: flex;
  padding: 5px;
}
span {
  color: rgb(97, 97, 201);
}
</style>