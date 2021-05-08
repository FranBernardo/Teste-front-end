<template>
  <div class="container-comentarios">
    <div class="post" :detay="detay">
      <div class="titloPost">
        <h4>Titulo</h4>
        <p>{{ detay.title }}</p>
      </div>
      <div>
        <h5>Postagem..</h5>
        <p>"{{ detay.body }}"</p>
      </div>
    </div>
    <el-collapse v-for="comentarios in coments" :key="comentarios.id">
      <el-collapse-item title="Comentario" class="comentarios">
        <div>
          <span>Nome</span>
          <p>{{ comentarios.name }}</p>
        </div>
        <div>
          <span>Email</span>
          <p>{{ comentarios.email }}</p>
        </div>
        <div>
          <span>Comentario</span>
          <p>{{ comentarios.body }}</p>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["Comentarios"],
  data() {
    return {
      detay: [],
      coments: [],
    };
  },
  methods: {
    getComentarios() {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts/${this.Comentarios.id}`
        )
        .then((response) => {
          this.detay = response.data;
        });
    },
    getComents() {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts/${this.Comentarios.id}/comments`
        )
        .then((response) => {
          this.coments = response.data;
        });
    },
  },
  created() {
    this.getComentarios();
    this.getComents();
  },
};
</script>

<style>
span {
  color: slateblue;
}
.post {
  background: slateblue;
  color: snow;
  width: 50%;
  padding: 5px;
  margin-left: 30%;
  border-radius: 5%;
  margin-top: 3%;
  margin-bottom: 5%;
}

.el-collapse-item__header {
  background: #9370db;
  margin-left: 5px;
}

@media screen and (max-width: 600px) {
  .post {
    width: 80%;
    margin-left: 10%;
  }
}
</style>