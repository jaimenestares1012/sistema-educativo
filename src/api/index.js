import axios from "axios";

const headers = {
  "content-type": "application/json",
};
async function conversor(payload) {
  try {
    
    const { data } = await axios({
     
      url: `https://3ykv5dwyg6.execute-api.us-east-1.amazonaws.com/dev/cursos?pagina=1&porPagina=10`,
      method: "GET",
      headers: headers,
      
    });
    return data
    
    // `````
  } catch (error) {
    return {
      codRes: "99",
      message: "Error",
    };
  }
}



export {conversor, sube, details, actualizarform };