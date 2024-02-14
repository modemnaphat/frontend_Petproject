import { Link } from 'react-router-dom'
import { FaAngleRight, FaRegUser, FaClipboardList, FaPlane, FaCog, FaAngleLeft } from 'react-icons/fa';
import { useState } from 'react';
import './sidebar.css'

function sidebar() {

    const [showMenu,setShowMenu] = useState(false)
    const toggleMenu = ()=>setShowMenu(!showMenu)

  return (
    <aside>
        <div className="sidebar">
            <div className="sidebar-toggle">
                <Link to='#'>
                    <FaAngleRight />
                </Link>
                <Link to='#'>
                    <FaClipboardList />
                </Link>
                <Link to='#'>
                    <FaPlane onClick={toggleMenu}/>
                </Link>
            </div>
        </div>
        <div className={showMenu ? "sidebar-menu active" : "sidebar-menu"} >
            <ul className="bar-menu-item">
                <li className="sidebar-toggle-close">
                    <Link to='#' className='menu-bar'>
                        <FaAngleLeft onClick={toggleMenu} style={{fontSize: '1.5em'}}/>
                        <span>Shipping</span>
                    </Link>
                </li>
                <li className='menu-text'>
                    <Link to='#'> 
                        <span><p>status</p></span>
                    </Link>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default sidebar