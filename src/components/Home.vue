<template>
  <div class="row">
    <div class="col-md-12">
      <app-create></app-create>
    </div>
    <div class="col-md-12">
      <app-remainders> </app-remainders>
    </div>
  </div>

</template>

<script>
  
  import Remainders from './remainders/Remainders.vue'
  import Create from './remainders/Create.vue'

  export default {
    name:'homeComponent',
    components: {
      appRemainders : Remainders,
      appCreate: Create,
    }
  }
</script>
<style scoped>

</style>