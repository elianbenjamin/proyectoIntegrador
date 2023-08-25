import { useState } from "react";
import { validation } from "../helpers/validation";


function Login({login}) {
    const [userData, setUserData] = useState({
        email: '',
        password:''
    })
    const [error, setError] = useState({
       
    })

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
        
        setError(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
        

    }
    


    return (
        
            <form onSubmit={handleSubmit}>
                <label htmlFor='Email'>Email: </label> 
                <input type="text" name="email" placeholder="Email.." onChange={handleChange} value={userData.email}/>
                <p>{error.email}</p>
                
                <label htmlFor='password'>Password: </label>
                <input type="text" name="password" placeholder="Contraseña.." onChange={handleChange} value={userData.password}/>
                <p>{error.password}</p>

                <button>Submit</button>
            </form>

     );
}

export default Login;