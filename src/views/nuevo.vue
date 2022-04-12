<template>
    <div>
       <headers></headers>
        <center>Crea tu curso!
        <div style="width:500px" class="container-form">
            <v-col cols="12" style="padding-top: 10px;" class="textos-entradas">
              <v-text-field
                v-model="titulo"
                placeholder="Titulo curso"
                color="orange"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="textos-entradas" >
              <v-text-field
                v-model="descripcion"
                placeholder="Descripcion Curso"
                color="orange"
                outlined
                dense
              ></v-text-field> 
            </v-col>
            <v-col cols="12" class="textos-entradas" >
              <v-text-field
                v-model="categoria"
                placeholder="Categoría curso"
                color="orange"
                outlined
                dense

              ></v-text-field>
            </v-col>
            <v-col cols="12" class="textos-entradas" >
              <v-text-field
                v-model="precio"
                placeholder="Precio curso"
                color="orange"
                outlined
                dense

              ></v-text-field>
            </v-col>
            <center>
              <v-btn
                class="ma-2"
                color="#e63a3a"
                style="boton-form"
                @click="openTermsConditions()"
              >Crear Curso </v-btn>
            </center>
            
        </div>
        </center>
    </div>
  
</template>
<script>
import headers from '@/components/headers'
import { mapGetters } from "vuex";
export default {
     components:{
        headers
    },
    
    data: () => ({
      loading: false,
      selection: 1,
      titulo: '',
      descripcion: '',
      categoria: '',
      precio:0,

    }),

    methods: {
    openTermsConditions() {
        console.log("en el modal");
        const estado="a"
        console.log(this.titulo,this.descripcion, this.categoria, this.precio );
        const payload={
            "nombre":this.titulo
        }
        this.$store.dispatch('nuevos/subiendo', payload)
        
        // window.location.href = '/prueba';

    },
     

    categorias(){

    },
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
    computed: {
         ...mapGetters("nuevos", ["datosgeneral"])

    },
    mounted () {
        const estado="a"
        this.$store.dispatch('nuevos/consulta', estado)
    },
  }
</script>
<style>
.textos-entradas{
  padding: 0px;
}
.boton-form{
  background: #e63a3a;
  color: #ffffff;

}
.container-form{
  padding: 10px 10px 10px 10px;
  margin-top: 30px;
  border: rgb(60, 97, 106) 2px solid;
  border-radius: 20px;
}
</style>