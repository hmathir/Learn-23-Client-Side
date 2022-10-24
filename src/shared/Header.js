import { faMoon, faRightToBracket, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className="flex justify-between w-10/12 mx-auto py-3">
            <div className="flex items-center gap-6">
                <div className="flex items-center border border-black rounded-xl px-2">
                    <h1 className="text-2xl font-bold">LEARN</h1>
                    <img className="w-12" src={logo} alt="" />
                </div>
                <div>
                    <ul className="space-x-6">
                        <Link>HOME</Link>
                        <Link>COURSES</Link>
                        <Link>FAQ</Link>
                        <Link>BLOGS</Link>
                    </ul>
                </div>
            </div>
            <div className="flex items-center space-x-6">
                <div className="cursor-pointer" onClick={()=>{setToggle(!toggle)}}>
                    {
                        toggle ? <div><p>Dark <FontAwesomeIcon icon={faMoon} /></p></div>  : <p>Light <FontAwesomeIcon icon={faSun} /></p>
                    }
                </div>
                <div>
                    <button className="bg-gray-700 px-4 py-2 text-white hover:bg-black rounded"><FontAwesomeIcon icon={faRightToBracket} /><span className=" ml-2">Login</span></button>
                </div>
            </div>
        </div>
    );
};

export default Header;