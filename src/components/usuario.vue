<template>
    <div class="headers" style="margin: 10px 20px 10px 20px; display: flex">
             <h4  color="#ddeaee" style="margin-left:5px ; margin-top: 20px">
                Hola Usuario
            </h4>
            <v-btn
                class="ma-2"
                color="#ddeaee"
                style="margin-left:900px ; margin-top: 20px"
                @click="openTermsConditions()"
            >Crear Curso
            </v-btn>
        </div>
</template>
<script>

export default {
   
    data: () => ({
      loading: false,
      selection: 1,
      estadoVermas: false
    }),
     methods: {
    
   
    openTermsConditions() {
        console.log("en el modal");
      // await this.$store.dispatch('nuevos/crearURL', this.dataVehiculo.checklist)
    //   this.$refs.termsConditionsModal.open()
        window.location.href = '/nuevo';
      
      // const url = URL.createObjectURL("https://wf4.accesocrediticio.com/acceso/images/documentos_dia/9723151.pdf")
      // console.log("esta es la url", url);
    },
     
    },
    mounted () {
        // const estado="a"
        // console.log("en el mounted");
        // this.$store.dispatch('cursos/consulta', estado)
        
    },
}
</script>
