<template>
 <section class="app-header ">
   <div class="container">
       <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" tag="li" class="navbar-brand" >Remainder App</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav navbar-nav">
                    <!-- <router-link to="/" tag="li" class="nav-item nav-link" activeClass="active"  >  Home  </router-link> -->
                    <router-link to="/history" tag="li" class="nav-item nav-link"  activeClass="active"  > History </router-link>
                    <router-link to="/portfolio" class="nav-item nav-link" activeClass="active" tag="li"> Portfolio  </router-link>
                </ul>
            </div>
            <form class="form-inline float-md-right">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
        </nav>
  </div>
   </div>
   <!-- /.container-->
</section>

</template>

<script>
export default {
    
}
</script>

<style scoped>
.app-header{
    width: 100%;
    height: auto;
    position: relative;
    top: 0;
    left: 0;
    padding:10px;
    background-color:rgb(15, 206, 219);
}
.active{
    background-color:rgb(57, 66, 201);
    color:#fff;
    border-radius:6px;
}
.active a{
    color:#fff;
}
li a{
    text-decoration: none;
    color:#000;
}
</style>