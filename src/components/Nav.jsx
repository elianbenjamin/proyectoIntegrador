import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({onSearch}) => {
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <Link to={'/About'}>
            <button>About</button>
            </Link>

            <Link to={'/Home'}>
            <button>Home</button>
            </Link>
        </div>
    );
}

export default Nav;
