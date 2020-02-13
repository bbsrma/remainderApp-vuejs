<template>
<div>
    <div class="block" :class="checkTime.displayClass">
        <p class="digit">{{ days  | two_digits}}</p>
        <p class="text">Days</p>
    </div>
    <div class="block" :class="checkTime.displayClass">
        <p class="digit">{{ hours | two_digits }}</p>
        <p class="text">Hours</p>
    </div>
    <div class="block" :class="checkTime.displayClass">
        <p class="digit">{{ minutes | two_digits }}</p>
        <p class="text">Minutes</p>
    </div>
    <div class="block" :class="checkTime.displayClass">
        <p class="digit">{{ seconds.seconds | two_digits}}</p>
        <p class="text"> Seconds  </p>
    </div>
    <transition name="zoom" appear mode="out-in">
        <div class="block">
            <div 
            class="status-box"
            :class="checkTime.styleClass"
            @click="deleteRemainder">
            </div>
        </div>
    </transition>
    <div class="block"
        :class="{playmusic: playMusic.display}"> 
        <audio :src="playMusic.src" controls="true" autoplay="true"></audio> 
        <!--  autoplay="true" -->
    </div>
</div>
</template>

<script>
import moment from 'moment';

export default {
    /* ready function will be here */
    created() {
        window.setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        },1000);
    },

    props : {
        date : {
            type: String,
            coerce: str => Math.trunc(Date.parse(str) / 1000)
        }
    },

    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            isInfo: false,
            isDanger : false,
            inVisible:false,
        }
    },
    /* Computed properties will be here */
 
  methods: {
      deleteRemainder(){
          console.log('delete remainder now');
          this.$store.state.remainders.splice($store.state.remainders.indexOf(event), 1);
        }
    
    },
  computed: {
    seconds() { //(new Date().getTime()/1000.0
        return {
                seconds : (new Date(this.date).getTime()/1000.0 - this.now) % 60
                };
    },

    minutes() {
        return Math.trunc((new Date(this.date).getTime()/1000.0 - this.now) / 60) % 60;
    },

    hours() {
        return Math.trunc((new Date(this.date).getTime()/1000.0 - this.now) / 60 / 60) % 24;
    },

    days() {
        return Math.trunc((new Date(this.date).getTime()/1000.0 - this.now) / 60 / 60 / 24);
    },
    playMusic() {        
        if (this.hours <= 0 && this.days <= 0 && this.minutes <= 0 && this.minutes <= 0 && this.seconds.seconds <= 0 ){
            // return  '/audio.mp3';
            return {
                'src' : '/audio.mp3',
                'display' : true,
            }
        }
        return {
                'display' : false,
            }
    },
    checkTime: function () {
        if(this.hours <= 0 && this.days <= 0 && this.minutes > 10 && this.minutes <= 15 ){
            return{ 
                styleClass : {  
                    'bg-success' : true                  
                }
            }
        }
        else if (this.hours <= 0 && this.days <= 0 &&  this.minutes > 6 && this.minutes <= 8 ){
            return{ 
                styleClass : {  
                    'bg-warning' : true                  
                }
            }
        }
        else if (this.hours <= 0 && this.days <= 0 && this.minutes >= 0 && this.minutes <= 6 ){
            return{ 
                styleClass : {  
                    'bg-danger' : true                  
                }
            }
        }
        else{
            return {
                styleClass : {  
                    'bg-info' : true
                }
        }}
  }
}
}
</script>

<style scoped>
 @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);

.block {
    display: inline-block;
    flex-direction: column;
    text-align: center;
    padding-top:10px;
}

.text {
    color: #1abc9c;
    font-size: 16px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 1;
    margin-left :1px;
    text-align: center;
    display:true;
}


.digit {
    color: #12852e;
    font-size: 12px;
    font-weight: bold;
    font-family: 'Roboto', serif;
    /* margin: 10px; */
    text-align: center;
    display:true;
}
.status-box {
    height:25px;
    width:25px;
    border-radius:25px;
    cursor:pointer;
    animation: zoom-in 2s infinite ease-in-out;
}
.danger{
    background-color: red;
    /* animation:move 3s infinite ease-in-out; */
}
.info{
    background-color: rgb(19, 110, 19);
}
.warning{
    background-color: rgb(219, 151, 63);
    /* animation:move 3s infinite ease-in-out; */

}
.inVisible{
    display:none;
}
.playmusic{
    margin-top:1px;
    border:2px solid green ;
    margin-bottom:10px;
}

/* @keyframes move{
100%{
 transform: scale(.5) rotate(0deg);
}
  200%{
   transform: scale(1) rotate(90deg);

  }

} */
.zoom-enter-active {
  animation: zoom-in 2s infinite; 
}
.zoom-leave-active {
  animation: zoom-out 2s reverse infinite;
}
@keyframes zoom-in {
  0% {
    transform: scale(.2);
    transition: .1s;
    opacity: .2;
  }
  25% {
    transform: scale(.5);
    transition: .1s;
    opacity: .6
  }
  50% {
    transform: scale(0.7);
    transition: .1s;
    opacity: 1;
  }
  75% {
    transform: scale(.5);
    transition: .1s;
    opacity: .6;
  }
  100% {
    transform: scale(.2);
    transition: .1s;
    opacity: .2;
  }
}
@keyframes zoom-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>