  export const validation = (userData) =>{
    const error = {};
    if((!/\S+@\S+\.\S+/.test(userData.email))){
        error.email = 'El email no es correcto mi REY'
    }
    if(!userData.email){//userDate.email === ''
        error.email = 'Pone algo en el campo mi REY'
    }
    if(userData.email.length > 35){
        error.email = 'te fuiste al pingo REY'

    }
    if(!/.*\d+.*/.test(userData.password)){
        error.password= 'Al menos poné un numero REY'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        error.password = 'La contraseña debe tener al menos entre 6 y 10 mi REY'
    }
    return error;

  }


    

