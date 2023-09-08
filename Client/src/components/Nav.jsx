import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({onSearch, setAccess, randomize}) => {
    const handleLogOut = () => {
        setAccess(false);
      };
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <Link to={'/about'}>
            <button>About</button>
            </Link>

            <Link to={'/home'}> 
            <button>Home</button>
            </Link>

            <Link to={'/favorites'}>
            <button>Favorites</button>
            </Link> 

            <button onClick={handleLogOut}>Log out</button>
            <button onClick={randomize}>ADD RANDOM</button>
        </div>
    );
}

export default Nav;
