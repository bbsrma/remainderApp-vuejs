<template>
    <div class="container">
        <app-header></app-header>

        <div class="row">
            <div class="col-md-12">  
                <transition name="slide" appear mode="out-in">
                    <router-view>
                        <app-home></app-home>                                    
                    </router-view> 
                </transition>        
            </div>
        </div>

        <app-footer></app-footer>
    </div>
</template>

<script>

    import Home from './components/Home.vue'
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    export default {
        name: 'rootcomponent',
        components: {
            appHome: Home,
            appHeader: Header,
            appFooter: Footer,

        },
        created() {
            // console.log('app component created ')
        }
    }
</script>

<style>
body {
    padding: 10px;
}

.slide-enter-active {
    animation: slide-in .5s ease-out forwards;
}

.slide-leave-active{
    animation: slide-out .5s ease-out forwards;
}

@keyframes slide-in {
    from {
            transform: translateX(-30px);
            opacity: 0; 
    }
    to {
            transform: translateX(0);
            opacity: 1;
    }
}
@keyframes slide-out {
    from {
            transform: translateX(0);
            opacity: 1; 
    }
    to {
            transform: translateX(50px);
            opacity: 0;
    }
}

</style>