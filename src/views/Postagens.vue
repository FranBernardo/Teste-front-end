<template>
    <div>
        <pre>{{detay}}</pre>
        <el-table :data="coments">
            <el-table-column label="name" prop="name"></el-table-column>
            <el-table-column label="email" prop="email"></el-table-column>
            <el-table-column label="body" prop="body"></el-table-column>
        </el-table>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    props:["Postagens"],
    data(){
        return{
            detay:[],
            coments: [],
        }
    },
    methods:{
        getPostagens(){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.Postagens.id}`)
            .then((response)=> {
                console.log(response)
                this.detay = response.data;
                
            })

            
        },
        getComents(){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.Postagens.id}/comments`)
            .then((response) => {
                console.log(response);
                this.coments = response.data
            })
        }
    },
    created(){
        this.getPostagens();
        this.getComents();
    }
}
</script>