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

async function details(payload) {
  try {
    
    const { data } = await axios({
     
      url: `https://3ykv5dwyg6.execute-api.us-east-1.amazonaws.com/dev/cursos/${payload}`,
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

async function sube(payload) {
    console.log("en el golpe, a punto de subir",payload);
  try {
    
    const { data } = await axios({
     
      url: `https://3ykv5dwyg6.execute-api.us-east-1.amazonaws.com/dev/cursos`,
      method: "POST",
      headers: headers,
      data: payload,
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


async function actualizarform(payload) {
    console.log("en el golpe, a actualizar",payload);
    const id = payload.id
  try {
    
    const { data } = await axios({
     
      url: `https://3ykv5dwyg6.execute-api.us-east-1.amazonaws.com/dev/cursos/${id}`,
      method: "PUT",
      headers: headers,
      data: payload,
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



export {conversor, details, actualizarform};