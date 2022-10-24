import { faMoon, faRightToBracket, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const user = ''

    return (
        <div className="flex justify-between w-11/12 md:w-10/12 mx-auto py-3">
            <div className="md:hidden dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <Link to='/'>HOME</Link>
                    <Link to='/courses'>COURSES</Link>
                    <Link>FAQ</Link>
                    <Link>BLOGS</Link>
                    <div className="md:hidden  cursor-pointer" onClick={() => { setToggle(!toggle) }}>
                        {
                            toggle ? <div><p>Dark <FontAwesomeIcon icon={faMoon} /></p></div> : <p>Light <FontAwesomeIcon icon={faSun} /></p>
                        }
                    </div>
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center border border-black rounded-xl px-2 bg-white">
                    <h1 className="md:text-2xl font-bold">LEARN</h1>
                    <img className="w-6 md:w-12" src={logo} alt="" />
                </div>
                <div className="hidden md:block">
                    <ul className="space-x-6">
                        <Link to='/'>HOME</Link>
                        <Link to='/courses'>COURSES</Link>
                        <Link>FAQ</Link>
                        <Link>BLOGS</Link>
                    </ul>
                </div>
            </div>
            <div className="flex items-center">
                <div className="hidden md:block mr-4 cursor-pointer" onClick={() => { setToggle(!toggle) }}>
                    {
                        toggle ? <div><p>Dark <FontAwesomeIcon icon={faMoon} /></p></div> : <p>Light <FontAwesomeIcon icon={faSun} /></p>
                    }
                </div>
                {user ? user.photoURL || <FontAwesomeIcon icon={faUser} /> : <div>
                    <Link to='/login'> <button className="bg-gray-700 px-4 py-2 text-white hover:bg-black rounded"><FontAwesomeIcon icon={faRightToBracket} /><span className=" ml-2">Login</span></button></Link>
                </div>}
            </div>
        </div>
    );
};

export default Header;