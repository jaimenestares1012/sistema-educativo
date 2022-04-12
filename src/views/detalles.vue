<template>
    <div>
        <headers></headers>
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
        <center>
            
            <div class="container-div" >
                <!-- <div v-if="estadoEditar">
                    <div style="display: flex; margin-left: 170px ; padding-top:10px">
                        <p style="width:100px">Nombre curso: </p>
                        <p style="margin-left:50px">{{detalles.nombre}}</p>
                    </div> 
                    <div style="display: flex; margin-left: 170px; margin-top:10px">
                        <p style="width:100px; text-align: initial">Calificación: </p>
                        <p style="margin-left:50px">{{detalles.calificacion}}</p>
                    </div> 
                    <div style="display: flex; margin-left: 170px ; margin-top:10px">
                        <p style="width:100px; text-align: initial">Precio: </p>
                        <p style="margin-left:50px">{{detalles.precio}}</p>
                    </div> 
                    <v-btn
                        color="#ffffff"
                        text
                        style="background:#a6bbf5; margin-left:5px; margin-bottom:10px; margin-top:10px"
                        @click="editar()"
                    >
                        Editar
                </v-btn>
                </div> -->
                <!-- <div v-if="estadoEdicion">
                    <div style="display: flex; margin-left: 170px ; padding-top:10px">
                        <p style="width:100px; margin-right:20px">Nombre curso: </p>
                         <v-text-field
                            v-model="form.nombre"
                            outlined
                            dense
                        ></v-text-field>
                    
                    </div> 
                    <div style="display: flex; margin-left: 170px; margin-top:10px">
                        <p style="width:100px; margin-right:20px; text-align: initial">Calificación: </p>
                         <v-text-field
                            v-model="form.calificacion"
                            outlined
                            style="width: 200px"
                            dense
                        ></v-text-field>
                      
                    </div> 
                    <div style="display: flex; margin-left: 170px ; margin-top:10px">
                        <p style="width:100px; margin-right:20px; text-align: initial">Precio: </p>
                         <v-text-field
                            v-model="form.precio"
                            outlined
                            dense
                        ></v-text-field>
                     
                    </div> 
                    <v-btn
                        color="#ffffff"
                        text
                        style="background:#a6bbf5; margin-left:5px; margin-bottom:10px; margin-top:10px"
                        @click="actualizar()"
                    >
                        actualizar
                    </v-btn>
                </div> -->
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
      
      estadoEditar: true,
      estadoEdicion: false,
      form:{
                id: 2,
		        nombre: "",
				activo: null,
				calificacion: 0,
				precio: 0,
				ramo: null
      }
    }),
    
   
    methods: {
        categorias(){
            console.log("algo");
        },
        editar(){
            this.estadoEditar = false
            this.estadoEdicion = true
            this.form.nombre=this.detalles.nombre,
            this.form.activo=this.detalles.activo,
            this.form.calificacion=this.detalles.calificacion,
            this.form.precio=this.detalles.precio,
            this.form.ramo=this.detalles.ramo
            console.log("este es el form", this.form);
            return 0
        },
        actualizar(){
            this.estadoEditar = true
            this.estadoEdicion = false
            console.log(this.form);
            console.log("estamos antes del enviar la info", this.form);
            this.$store.dispatch('nuevos/actualizar', this.form)
            return 0

        },
    },
    computed: {
         ...mapGetters("nuevos", ["detalles"])

    },
    mounted () {
        const valores = window.location.search;
        const urlParams = new URLSearchParams(valores);
        var valor = urlParams.get('key');
        this.$store.dispatch('nuevos/detalles', valor)



    






    },
  }
</script>
<style >
.container-div{
    /* background: #cbd5ee; */
    /* background: #ebf9ff; */
    width:900px; 
    height:400px;
    text-align: center;
}
</style>
