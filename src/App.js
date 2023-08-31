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





const EMAIL = 'elian@rivera.com'
const PASSWORD = 'rivera12'


function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   const [characters, setCharacters] = useState([]);
   
   const location = useLocation();
   

  
   function login (userData){
     if(userData.password === PASSWORD && userData.email === EMAIL){
        setAccess(true);
        navigate('/home');
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
    
    

   function onSearch(id){
      
      axios(`http://rym2-production.up.railway.app/api/character/${id}?key=henrym-elianbenjamin`)
      .then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   })
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
