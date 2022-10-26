import { faMoon, faRightToBracket, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import teacher from '../assets/teacher.webp';
import { AuthProvider } from "../context/UseContext";

const Header = () => {
    const { user, logOut, dark, setDark } = useContext(AuthProvider);

    const userSignOut = () => {
        logOut().then(() => { }).catch(() => { })
    }

    return (
        <div className={`${dark ? "bg-black" : "bg-white"} ${dark ? "text-white" : "text-black"}`}>
            <div className="flex justify-between w-11/12 md:w-10/12 mx-auto py-3 ">
                <div className="md:hidden dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu bg-gray-500 menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        <NavLink style={({ isActive }) => { return { color: isActive ? 'skyblue' : 'orange' } }} to='/home'>HOME</NavLink>
                        <NavLink style={({ isActive }) => { return { color: isActive ? 'skyblue' : 'orange' } }} to='/courses'>COURSES</NavLink>
                        <NavLink style={({ isActive }) => { return { color: isActive ? 'skyblue' : 'orange' } }} to='/faqs'>FAQ</NavLink>
                        <NavLink style={({ isActive }) => { return { color: isActive ? 'skyblue' : 'orange' } }} to='/blogs'>BLOGS</NavLink>
                        <div className="md:hidden  cursor-pointer" onClick={() => setDark(!dark)}>
                            {
                                dark ? <p>Light <FontAwesomeIcon icon={faSun} /></p> : <div><p>Dark <FontAwesomeIcon icon={faMoon} /></p></div>
                            }
                        </div>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center border rounded-xl px-2 ">
                        <h1 className="md:text-2xl font-bold">LEARN</h1>
                        <img className="w-6 md:w-12 rounded-full" src={logo} alt="" />
                    </div>
                    <div className="hidden md:block">
                        <ul className="space-x-6">
                            <NavLink style={({ isActive }) => { return { color: isActive ? 'skyblue' : 'orange' } }} to='/home'>HOME</NavLink>
                            <NavLink style={({ isActive }) => { return { color: isActive ? 'skyblue' : 'orange' } }} to='/courses'>COURSES</NavLink>
                            <NavLink style={({ isActive }) => { return { color: isActive ? 'skyblue' : 'orange' } }} to='/faqs'>FAQ</NavLink>
                            <NavLink style={({ isActive }) => { return { color: isActive ? 'skyblue' : 'orange' } }} to='/blogs'>BLOGS</NavLink>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="hidden md:block mr-4 cursor-pointer" onClick={() => { setDark(!dark) }}>
                        {
                            dark ? <p>Light <FontAwesomeIcon icon={faSun} /></p> : <div><p>Dark <FontAwesomeIcon icon={faMoon} /></p></div>
                        }
                    </div>
                    {
                        user ? <div className="tooltip tooltip-left flex items-center" data-tip={user.displayName}>
                            <NavLink to='/profile' className=" cursor-pointer">
                                {<img className="first-letter:w-8 h-8 rounded-full inline mr-4" src={user?.photoURL ? user.photoURL : teacher} alt='User Profile' referrerPolicy="no-referrer" /> || <FontAwesomeIcon icon={faUser} />}
                            </NavLink>

                            <NavLink to='/'> <button onClick={userSignOut} className="bg-gray-700 px-4 py-2 text-white hover:bg-black rounded"><FontAwesomeIcon icon={faRightToBracket} /><span className=" ml-2">Log Out</span></button></NavLink>
                        </div> : <div>
                            <NavLink to='/login'> <button className="bg-gray-700 px-4 py-2 text-white hover:bg-black rounded"><FontAwesomeIcon icon={faRightToBracket} /><span className=" ml-2">Login</span></button></NavLink>
                        </div>
                    }




                    {/* {user ? user.photoURL || <FontAwesomeIcon icon={faUser} />} :  */}
                </div>
            </div>
        </div>
    );
};

export default Header;