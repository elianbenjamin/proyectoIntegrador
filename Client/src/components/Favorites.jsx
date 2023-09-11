import {  useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { orderCards, filterCards } from "../redux/action";
import { useState } from "react";




const Favorites = () => {
  
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();
  const {myFavorites }= useSelector((state)=> state);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
    setAux(!aux)
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
      
  }

  return (
    <div>
      <select onChange={handleOrder} name="" id="">
        <option value="Ninguno">Ninguno</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
        <select onChange={handleFilter} name="" id="">
        <option value="Ninguno">Ninguno</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      {myFavorites?.map(
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <div key={id}>
              <Card
               
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin}
                image={image}
              />
            </div>
          );
        }
      )}
    </div>
  );

};

export default Favorites;
