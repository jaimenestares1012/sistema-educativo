<template>
<div>
    <div class="headers " style="margin: 10px 20px 0px 20px; display: flex">
             <a href="/inspire"><img src="https://acceso.com.pe/wp-content/uploads/2022/03/san-marcos-2.png" width="200px" height="80px" alt=""></a>           
             <v-btn @click="categorias()" color="#ddeaee" style="margin-left:5px; margin-top: 20px">
                Categorías
            </v-btn>
            <v-text-field  
                outlined
                dense
                style="margin-left:5px; border-radius: 20px; margin-top: 20px"
                placeholder="Buscar cualquier cosa"
                type="text"
                required
                color="#ddeaee"             
             ></v-text-field>
              <v-btn @click="categorias()" color="#ddeaee" style="margin-left:5px ; margin-top: 20px">
                Buscar
            </v-btn>
            <v-btn @click="categorias()" color="#ddeaee" style="margin-left:30px ; margin-top: 20px">
                Mi progreso
            </v-btn>
             <v-btn @click="categorias()" color="#ddeaee" style="margin-left:5px ; margin-top: 20px">
                Perfil
            </v-btn>
            <v-btn
                class="ma-2"
                color="#ddeaee"
                dark
                style="margin-left:5px ; margin-top: 20px"
                ><center>
                    <v-icon
                    dark
                    color="#050505"
                    >
                    mdi-shopping
                    </v-icon>
                </center>
            </v-btn>   
    </div>
</div>
</template>