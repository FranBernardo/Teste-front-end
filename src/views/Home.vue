<template>
 <div class="home">
  <!-- <pre>
     {{data}}
   </pre>-->

   <el-table :data="data">
     <el-table-column label="userId" prop="userId"></el-table-column>
     <el-table-column label="Id" prop="id"></el-table-column>
     <el-table-column label="title" prop="title"></el-table-column>
     <el-table-column label="body" prop="body"></el-table-column>
     <el-table-column>
       <template slot-scope="scope">
       <el-button @click="detay(scope.row)">
        Postagens
       </el-button>
       </template>
     </el-table-column>
   </el-table>
 </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'Home',
  data(){
    return{
      data: [],
    }
  },
  methods:{
    detay(row){
      this.$router.push({
        name: "Postagens",
        params:{Postagens:row}
      })
    },
    getItem(){
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) =>{
        this.data = response.data;
        console.log(response);
      })
    }
  },
  created(){
    this.getItem();
  }
}
</script>
