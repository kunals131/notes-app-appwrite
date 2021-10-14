import "./header.style.scss";

import {Link} from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/main.svg'
import { logoutUser } from "../../appwrite/config.appwrite";
import { refreshPage } from "../../utils/utils";

const handleLogout = ()=>{
    logoutUser().then(response=>{
        refreshPage();
    }, (error)=>{
        console.log(error);
    })
}

const Header = (props) => (

  <div className="header">
    <div className="header__container">
        <Link className='Logo-container' to='/'>
            <Logo className='Logo'></Logo>
        </Link>
      <div className="header__options">
        <div className="header__options__option">
         <Link to= '/' className='link'>My Notes</Link>
        </div>
        <div className="header__options__option">
         <Link to= '/categories' className='link'>Categories</Link>
        </div>
        {
            (props.user!==null) ?(
        <div className="header__options__option logout">
         <span onClick={handleLogout} className='link'>Logout</span>
        </div>
            ): null
        }
      </div>
    </div>
  </div>
);

export default Header;