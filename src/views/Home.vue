<template>
  <div class="container">
    <h2>Blog de postagens</h2>
    <p>Bem vindo ao nosso blog de postagens, aproveite nossas postagens e se divirta. </p>
    <p>Aqui você verá todas as Postagens de nossos usuarios e ainda poderá ver as informações de todos usuarios (caso queira da uma olhada no perfil da paquera rsrsrs).
      Não perca mais tempo comece a ver as postagens e não por fora de nada!
    </p>

    <div class="container-segundo">
      <h3>O que deseje ver primeiro?</h3>
      <div >
  <div class="container-btn">
    <div class="btn">
      
      <el-button type="primary" plain><router-link to="/Postagens">Nossas postagens</router-link></el-button>
    </div>
    <div class="btn">
     <el-button type="primary" plain><router-link to="/Postagens"><router-link to="/Usuarios">Usuarios</router-link></router-link></el-button>
    </div>
  </div>
</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container{
  margin-top: 10%;
  background: #9932CC;
  color: antiquewhite;
  border-radius: 50px;
}
.container-btn{
  display: flex;
    justify-content: center;
}
.btn{
  margin: 20px;
  
}
a{
  text-decoration: none;
}
a:hover{
  color: aliceblue;
}
.container-segundo{
  margin-top: 10%;
}
@media screen and (max-width: 550px){
  .container{
    margin-top: 10%;
    background: #9932CC;
    border-radius: 5%;
    width: 90%;
  }
  .btn{
    margin: 0%;
  }
 .container-btn{
   
   display: block;
 }
}
</style>