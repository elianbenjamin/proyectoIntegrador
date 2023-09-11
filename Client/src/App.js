import './App.css';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import { Route,Routes,useLocation, useNavigate } from 'react-router-dom';
import About from './views/About.jsx';
import Detail from './views/Detail.jsx';
import Login from './views/Login';
import Favorites from './components/Favorites';
import ErrorPage from './views/ErrorPage';








function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(true);

   const [characters, setCharacters] = useState([]);
   
   const location = useLocation();
   

  
   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';

         const { data } = await axios(URL + `?email=${email}&password=${password}`)

            const { access } = data;
            setAccess(data);
            access && navigate('/home');
     
      } catch (error) {
         console.log(error.message);
      }
   }
   
   useEffect(() => {
     !access && navigate('/');

     }, [access, navigate]);


   function onClose(id) {
      setCharacters(
        characters.filter((character) => {
          return character.id !== Number(id)
        })
      );
    }
    
    

   async function onSearch(id){
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
   } catch (error) {
      alert('¡No hay personajes con este ID!');
      }
   }

   function randomHandler() {
      let memoria = [];
  
      let randomId = (Math.random() * 826).toFixed();
  
      randomId = Number(randomId);
  
      if (!memoria.includes(randomId)) {
        memoria.push(randomId);
        onSearch(randomId);
      } else {
        alert("Ese personaje ya fue agregado");
        return;
      }
    }

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}  randomize={randomHandler}/>}

         
         <Routes>
            <Route path='/' element={<Login login={login} />}/>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path='*' element={<ErrorPage />}/>
            <Route path='/favorites' element={<Favorites />}/>
         </Routes>
        
         
      </div>
   );
}

export default App;
