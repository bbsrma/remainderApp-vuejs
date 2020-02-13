
<template>
<div>
    <div class="center">        
        <form class="form-inline m-3">
            <label class="sr-only" for="inlineFormInputName2">Title</label>
            <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-user-clock"></i></div>
            </div>
            <input 
                type="text" 
                class="form-control mb-2 mr-sm-2" 
                id="inlineFormInputName2" 
                placeholder="Title"
                :class="{empty: isTitleEmpty}"
                v-model="title">

            <label class="sr-only" for="inlineFormInputGroupUsername2">Date and Time</label>
            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-clock-o" aria-hidden="true"></i></div>
                </div>
                <app-date-time 
                    v-model="datetime" 
                    type="datetime"
                    :use12-hour= "true"
                    class="form-control"
                    :class="{empty: isDateTimeEmpty}"></app-date-time>
            </div>
            <button 
                type="button" 
                class="btn btn-primary mb-2"
                @click="createRemainder">Add</button><hr/>                
        </form>
            <p class="danger" v-for="(msg, index) in messages" :key="index" > {{ msg.message }}</p>            
    </div>
    <!-- <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 100px; margin-top:-50px; ">
        <div class="toast" style="position: absolute; top: 0; right: 0;">
            <div class="toast-header">
            <img src="" class="rounded mr-2" alt="">
            <strong class="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="toast-body">
            Hello, world! This is a toast message.
            </div>
        </div>
    </div> -->

</div>


</template>

<script>
import axios from 'axios';
import { Datetime } from 'vue-datetime';
export default {
    data(){
        return{
            id:0,
            title: '',
            datetime: '',
            isTitleEmpty : false,
            isDateTimeEmpty: false,
            eligibleforCreate: false,
            hasError: false,
            messages:[],
        }
    },
    components :{
        appDateTime: Datetime,
    },
    methods:{
        createRemainder(){
            this.messages = [];
            if(this.title == '' ){
                this.isTitleEmpty = true;  
                this.hasError= true ;
                this.messages.push({message: 'Title Field is required'});       
            }
            if(this.datetime == '' ){
                this.isDateTimeEmpty = true;
                this.hasError= true ;
                this.messages.push({message: 'Date Time Field is required'});         
            }
            if(this.title != '' && this.datetime != ''){
                this.eligibleforCreate = true;
            }
            const remainder = {
                'id': Math.round( ( 1 + Math.random(100,500) )),
                'title': this.title,
                'datetime': this.datetime,
            }
            if(this.eligibleforCreate){
                // this.$store.dispatch('createRemainder', remainder);
                // this.$store.dispatch('createHistory', remainder);
                // var config ={
                //     headers: { 'Content-Type':"application/json" }

                //     header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
                // };
            axios.post('http://localhost:8000/api/remainders/' , remainder )
                .then(response =>{
                    console.log(response.data)
                    // this.$store.dispatch('createRemainder', response.data);
                    this.$store.dispatch('initRemainders');
                    this.$store.dispatch('createHistory', response.data);

                })
                .catch(error => {
                    console.log(error)
                })

            }

            // this.$store.dispatch('buyStock', order);
            // console.log(remainder);
            this.title = '';
            this.datetime= '';

            }
            


        }
    }
</script>

<style scoped >
    @import '../../../node_modules/vue-datetime/dist/vue-datetime.css';
    .center{
        margin-left:25%;
    }
    .empty{
        border:1px solid red;
    }
    .danger{
        border:1px solid ;
        color:red;
        width:64%;
    }
</style>