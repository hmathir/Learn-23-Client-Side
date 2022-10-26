
import { createBrowserHistory } from "@remix-run/router";
import { useContext } from "react";
import toast from "react-hot-toast";
import teacher from '../../assets/teacher.webp';
import { AuthProvider } from "../../context/UseContext";

const Profile = () => {
    const { user, profileUpdate } = useContext(AuthProvider);
    const history = createBrowserHistory();
    const updatePFL = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        profileUpdate(name, photoURL).then(() => {
            toast.success('Profile Updated');
            form.reset();
            history.go(0);
        }).catch((e) => {
            toast.error(e.message)
        })
    }
    return (
        <div className="w-10/12 py-10 text-center md:w-6/12 mx-auto">
            <div className="">
                <h1 className="text-2xl font-bold mb-5">Welcome {user?.displayName}</h1>
                <img className="w-24 h-24 rounded-full inline text-center mb-5" src={user?.photoURL ? user.photoURL : teacher} alt="" />
            </div>
            <h1 className="font-bold text-xl">Update Your Profile:</h1>
            <form onSubmit={updatePFL} className="md:w-6/12 mx-auto">
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block text-orange-400 font-bold">Your Name</label>
                    <input defaultValue={user?.displayName} htmlFor="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photoURL" className="block text-orange-400 font-bold">Photo URL</label>
                    <input defaultValue={user?.photoURL} type="text" name="photoURL" id="photoURL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block text-orange-400 font-bold">Email (Can't Editable)</label>
                    <input defaultValue={user?.email} readOnly type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                </div>
                <div>
                    <button className="mt-5 bg-orange-400 md:w-6/12 px-3 py-2 hover:bg-black hover:text-white rounded-md  ">Update Profile</button>
                </div>
            </form>


        </div>
    );
};

export default Profile;