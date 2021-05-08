<!-- <template>
  <div class="Usuarios">
     
      <ul v-for="user in users" :key="user">
          <li>{{user.id}}</li>
          <li>{{user.name}}</li>
          <li>{{user.email}}</li>
          <li>{{user.phone}}</li>
          <li>
              <button>teste</button>
          </li>

          <li>
              <template slot-scope="scope">
          <button @click="detalheUser(scope.row)">
              detalhe 
          </button>

      </template>
          </li>
            
      </ul>
      </template>
      -->
      <template>
  <el-table
    :data="data"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <p>Id: {{ props.row.id }}</p>
        <p>name: {{ props.row.name }}</p>
        <p>email: {{ props.row.email }}</p>
        <p>phone: {{ props.row.phone }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label="Id"
      prop="id">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column>
       <template slot-scope="scope">
       <el-button @click="detalheUser(scope.row)">
        detalhes</el-button>
       </template>
     </el-table-column>
  </el-table>
  
</template>
     
     <!-- <el-table :user="user">
          <el-table-column label="Id" prop="id"></el-table-column>
          
          <el-table-column label="name" prop="name"></el-table-column>  
          <el-table-column label="email" prop="email"></el-table-column>  
          <el-table-column label="phone" prop="phone"></el-table-column>   
      </el-table> -->
 

<script>
import axios from 'axios'
export default {
name: "Usuarios",
data(){
    return{
        
        data: [],

    }
},
methods:{
    detalheUser(row){
        this.$router.push({
            name:"Detalhes",
            params: {Detalhes:row}
        })
    },
 getUser(){
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then((response) =>{
         this.data = response.data;
         console.log(response);
     })
}
},
created(){
    this.getUser();
}
}
</script>

