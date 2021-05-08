<template>
  <div id="app">
   <nav class="navbar navbar-expand-lg navbar-light  " style="background-color: #9370DB;">
  <div class="container-fluid " >
    <a class="navbar-brand" href="#">Criptonomia</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <router-link  class="nav-link item" to="/">Home</router-link> 
        
        </li>
        <li class="nav-item">
          
          <router-link class="nav-link item " to="/Postagens">Postagens</router-link>
        </li>
        <li class="nav-item">
          
          <router-link class="nav-link item" to="/Usuarios">Usuarios</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    
    <router-view/>
  </div>
</template>

<style>
#app {
 
  text-align: center;
  color: #2c3e50;
}

@media screen and (min-width: 940px) {
  .item:hover{
  background:#9932CC;
  color: aliceblue;
  border-bottom: 3px solid black;
  
}
}
.item:hover{
  background: #EE82EE;
}



</style>
