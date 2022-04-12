<template>
  <div class="home">
     <v-btn @click="redirect()">
      Ir al sistema
    </v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    redirect(){
      window.location.href = '/prueba'
    }
  }
}
</script>
