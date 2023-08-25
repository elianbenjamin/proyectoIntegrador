import './App.css';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import { Route,Routes,useLocation, useNavigate } from 'react-router-dom';
import About from './views/About.jsx';
import Detail from './views/Detail.jsx';
import Login from './views/Login';




const email = 'elian@rivera.com '
const password = 'riveraelian1'


function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false)

   const [characters, setCharacters] = useState([]);
   
   const location = useLocation();
   const isHomePage = location.pathname === '/'

  
   
   function onClose(id) {
      setCharacters(
        characters.filter((character) => {
          return character.id !== Number(id)
        })
      );
    }
    
    
    const login = (userData)=>{
      if(email === userData.email && password === userData.password){
         setAccess(true);
         navigate('/home')
      }
     
    }
    useEffect(() => {
      !access && navigate('/');
   },[access]);

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

   return (
      <div className='App'>
         {!isHomePage && <Nav onSearch={onSearch}/>}

         
         <Routes>
            <Route path='/' element={<Login login={login} />}/>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>
         </Routes>
        
         
      </div>
   );
}

export default App;
