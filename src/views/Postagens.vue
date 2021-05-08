<template>
 <div >

   <el-table
    :data="data"
    style="width: 100%">
    <el-table-column>
      <template slot-scope="props">
        <h4>Titulo:</h4>
        <p> {{ props.row.title }}</p>
          <h4>Postagen:</h4>
        <p> {{ props.row.body }}</p>
      </template>
    </el-table-column>
    
     <el-table-column>
       <template slot-scope="scope">
       <el-button @click="detay(scope.row)">
        comentarios
       </el-button>
       </template>
     </el-table-column>
    
  </el-table> 
 </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'Postagens',
  data(){
    return{
      data: [],
    }
  },
  methods:{
    detay(row){
      this.$router.push({
        name: "Comentarios",
        params:{Comentarios:row}
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
