<template>
<div>


  <div class="row remainder" v-if="!pending">
      <div class="col-md-4 v-center">
        <div class="v-center">
            {{ index  }} {{ remainder.remainder.title }}
        </div>
      </div>
      <div class="col-md-4">
        <div class="v-center">
            <app-count-down :date="remainder.remainder.lastdatetime" > </app-count-down>
        </div>
      </div>
      <div class="col-md-2 v-center">
         {{ remainder.remainder.lastdatetime }}
         
      </div>
      <div class="col-md-2 v-center">
          <button class="btn btn-danger" @click="deleteRemainder( index )" > Delete </button>
      </div>
  </div>
    <div class="rew" v-else > <p>Fetching data pending status {{ pending }}</p></div>

  </div>
</template>

<script>
import  moment from 'moment';
import CountDown from './CountDown.vue';

moment().format();

export default {
    props: ['remainder','index'],
    components:{
        appCountDown: CountDown
    },
    data(){
        return{
            interval : null,
            secondDiff : 0,
            startTime : '',
            endTime : '',
        }
    },
    
    mounted() {
        this.startTime = moment( new Date().toLocaleString() )//now
    },
    methods: {
        updateDiffs() {
            this.secondDiff = this.startTime.diff(this.endtime, 'seconds');
        },
        getEndDate(){
            return this.remainder.remainder.lastdatetime;
        },
        deleteRemainder( index ){
            this.$store.dispatch('deleteRemainder', index)
            this.$store.dispatch('initRemainders');
        }
    }
}
</script>

<style scoped>
.remainder {
border: 2px solid blue;
padding:10px;
margin:10px;
}
.v-center{
    text-align: center;
    vertical-align: middle;
    padding-top: 5%;
}

</style>