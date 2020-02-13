<template>
<div>
  <div class="row">
      <div class="col-md-4">
        <div class="v-center">
          <b>Title</b>
        </div>         
      </div>
      <div class="col-md-4">
        <div class="v-center">
          <b> Remaining Time </b>
        </div>
      </div>
      <div class="col-md-4">
        <div class="v-center">
          <b> Last Date & Time</b>
        </div>
      </div>
  </div>
  <div v-if="!pending">
    <app-remainder  v-for="(remainder ,index) in remainders" :remainder="{remainder}" :key="index" :index="remainder.id"> </app-remainder>
  </div>
  <p class="text-center loader" v-else > </p>

</div>
  
</template>

<script>
import Remainder from './Remainder.vue';
export default {
    components: {
        appRemainder: Remainder,
    },
    computed: {
      remainders() {
        // console.log(this.$store.getters.stocks);
        return this.$store.getters.remainders;
      },
      pending() {
        // console.log(this.$store.getters.stocks);
        return this.$store.getters.pending;
      }
    },
    created(){
        this.$store.dispatch('initRemainders');
    }

}
</script>

<style scoped>
.v-center{
    text-align: center;
}
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  /* border-top: 16px solid #3498db;
   */
  border-top: 16px solid  rgb(15, 206, 219);

  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  text-align: center;
  margin:7% 0% 7% 45%;
  /* margin:10%; */
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>