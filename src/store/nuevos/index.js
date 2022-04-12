// import {apiRegistroDescarga} from '~/api/noAdeudo'
// import { codPage, pagesNoAdeudo } from '~/enums/noAdeudo-enums'
export const state = () => ({
  step: codPage.EVALUATION,
  productCode: -1,
  codCredito:'',
});

export const mutations = {
  SET_STEP(state, value) {
    state.step = value
  },
  
  RESPUESTA_PDF(state, value){
    state.respuestaPDF= value;
  },
  CLEAR_ALL(state) {
    state.step = codPage.EVALUATION
    state.productCode = -1
    state.codCredito=''
  },

  CREDITO(state, value){
    console.log("llegamos?, espero si");
    state.codCredito=value
  }


};

export const actions = {
  async consulta({commit}, data){
        console.log("llegamos?");
        return new Promise((resolve, reject) => {
             this.$showSpinner(true)
             const response = apiRegistroDescarga(this.$axios, data)
             commit('RESPUESTA_PDF', response)
             if (response) {
                resolve(response);
             }else{
                reject(error);
             }
        })
  },
  async subiendo({commit}, data){
        console.log("llegamos?");
        return new Promise((resolve, reject) => {
             this.$showSpinner(true)
             const response = apiRegistroDescarga(this.$axios, data)
             commit('RESPUESTA_PDF', response)
             if (response) {
                resolve(response);
             }else{
                reject(error);
             }
        })
  },

  
}
export const getters = {
  
};


