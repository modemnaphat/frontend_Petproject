import './navbar.css'
import { Link } from 'react-router-dom'
import { BsCaretDownFill, BsBell  } from "react-icons/bs";
import { IoPerson, IoSearchOutline } from "react-icons/io5";

function navbar() {

  return (
    <div className="nav">
      <div className="logo"><Link to='/home'><h1>P TELEPORT</h1></Link></div>
      <div className="search-box">
      <form className='search'>
        <Link to=''><i><IoSearchOutline /></i></Link>
        <input type='text' placeholder='Search'></input>
      </form>
    </div>
      <ul className="menu-bar">
        <li className="dropdown">
          <span><Link to='#'>SERVICE<BsCaretDownFill /></Link></span>
          <div className="dropdown-content">
            <Link to='/pet'><p>Pet</p></Link>
            <Link to='/status'><p>Status</p></Link>
            <Link to='/accommodation'><p>Accommodation</p></Link>
          </div>
        </li>
        <li className="dropdown">
          <span><Link to='#'><BsBell style={{fontSize: '1.5em'}}/></Link></span>
          <div className="dropdown-content">
            <Link to=''><p>Notification(77)</p></Link>
          </div>
        </li>
        <li className='dropdown'>
          <span><Link to='#'><IoPerson style={{fontSize: '1.5em'}}/></Link></span>
          <div className="dropdown-content">
            <Link to='/'><p>Log out</p></Link>
          </div>
          </li>
      </ul>
    </div>
  )
}

export default navbar