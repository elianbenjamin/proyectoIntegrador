import { useState } from "react";
import  validation  from "../helpers/validation";


function Login({login}) {
    const [userData, setUserData] = useState({
        email: '',
        password:''
    })
    const [errors, setErrors] = useState({
        email: "Email required", 
        password: "Password required",
    })

    const handleChange = (event) => {
        setUserData({
            ...userData, 
            [event.target.name]: event.target.value
        });
        
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value,
        })
    );
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        login(userData);
        

    }
     function disabledHnandle(){
        let disabled;
        for(let error in errors){
          if(errors[error] === '') disabled = false;
          else{
            disabled = true
            break;
          }
              
    }
    return disabled;
} 
    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='Email'>Email: </label> 
                <input 
                type="text" 
                name="email" 
                placeholder="Email.." 
                onChange={handleChange} 
                 value={userData.email} />
                {errors.email && <p>{errors.email}</p>}
                <hr />
                
                <label htmlFor='password'>Password: </label>
                <input 
                type="password" 
                name="password" 
                placeholder="Contraseña.." 
                onChange={handleChange} 
                value={userData.password}/>
                {errors.password && <p>{errors.password}</p>}
                <br />
                <button  disabled={disabledHnandle()} onSubmit={handleSubmit} type="submit">SUBMIT</button>
            </form>
        </div>    

     );
}

export default Login;