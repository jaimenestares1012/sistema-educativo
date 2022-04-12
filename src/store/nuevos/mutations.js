export default {
    

    RESPUESTA(state, payload){
      state.datosGeneral=payload.payload.datos
      console.log("cod res desde las mutaciones", state.datosGeneral );
    },
    DETALLES(state, payload){
    console.log("em las mutations");
      state.detalles=payload.payload
      console.log("cod res desde las mutaciones", state.detalles );
    },
  
    
    
    
    
  };