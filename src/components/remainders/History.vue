<template>
  <div class="row" >
    <div class="col-md-12">
      <!-- <h2> {{ historyDeletingStatus }} </h2> -->

      <ul class="list-group m-4" v-if="!historyDeletingStatus">
        <li class="list-group-item list-group-item-success mt-4" v-for="(remainder, i) in histories" :key="i" :id="remainder.id"> 
            <span sytyle="margin-left:10%;">{{ remainder.title}} </span>   || <span style="margin-left:10%;"> {{ remainder.lastdatetime }} </span>
            <a 
            href="#" class=" btn btn-warning float-md-right"
            @click="deleteHistory(remainder.id)">Delete</a></li>
      </ul>

      <p class="text-center loader" v-else > </p>

      
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios';

export default {
    data(){
        return{
            interval: '',           
        }
    },
computed: {
  now: function () {
    // return Date.now().toDateString()
    return moment( new Date().toLocaleString() )
  },
  historyDeletingStatus(){
    return this.$store.getters.historyDeletingStatus;
  },
  histories() {
        // console.log(this.$store.getters.stocks);
        return this.$store.getters.histories;
      }
},
created(){
  this.$store.dispatch('initHistories');
  

},
methods:{
  deleteHistory(index){
    this.$store.dispatch('deleteHistory',index);
    console.log( index + ' backend id deleted ');
    // this.histories.splice(index , 1);
  }
}
}
</script>

<style>
.v-center{
    text-align: center;
}
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  /* border-top: 16px solid #3498db; */
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