  const validation = (userData) =>{
    const errors = {};
    if((!/\S+@\S+\.\S+/.test(userData.email))){
        errors.email = 'El email no es correcto mi REY'
    }
    if(!userData.email){//userDate.email === ''
        errors.email = 'Pone algo en el campo mi REY'
    }
    if(userData.email.length > 35){
        errors.email = 'te fuiste al pingo REY'

    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password= 'Al menos poné un numero REY'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe tener al menos entre 6 y 10 mi REY'
    }
    return errors;

  }
export default validation;

    

