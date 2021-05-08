<template>

<el-card class="box-card" :detalheUser="detalheUser">
  <div slot="header" class="clearfix">
      <p>Usuario</p>
    <span>{{detalheUser.username}}</span>
    
    
  </div>
  <div >
      <p>Nome:</p>
      {{detalheUser.name}}
      <p>Email:</p>
    {{detalheUser.email}}
    <p>Numero</p>
    {{detalheUser.phone}}
    <p>Site</p>
    {{detalheUser.website}}
  </div>
  <router-link class="btn" to="/usuarios"> </router-link>
</el-card>



</template>

<script>
import axios from 'axios'

export default {
    props:["Detalhes"],
    data(){
        return{
            detalheUser: [],

        }
    },
    methods:{
        getDetalhes(){
            axios.get(`https://jsonplaceholder.typicode.com/users/${this.Detalhes.id}`)
            .then((response) => {
                console.log(response)
                this.detalheUser = response.data;
            })
        }
    },

    created(){
        this.getDetalhes();
    }
}
</script>

<style>
.detalhe{
   display: flex;
    padding: 5px;
   
}



</style>