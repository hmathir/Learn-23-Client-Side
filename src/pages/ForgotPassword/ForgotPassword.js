import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../context/UseContext";

const ForgotPassword = () => {
    const {resetPassword} = useContext(AuthProvider);
    
    const handleResetPass = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        resetPassword(email).then(()=>{
            toast.success('Password Reset Email Sent, Try Sign In') ;
            form.reset();
        }).catch((e)=>{
            toast.error(e.message)
        })
    }
    return (
        <div className=" py-10">
            <div className="w-11/12 mx-auto max-w-md p-8 space-y-3 rounded-xl  border border-black mt-20">
                <h1 className="text-2xl font-bold text-orange-400 text-center">Forget Password</h1>
                <form onSubmit={handleResetPass} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-orange-400 font-bold">Email</label>
                        <input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <button className="block w-full p-3 text-center bg-orange-400  text-white rounded-lg">Confirm</button>
                </form>   
                <p className="text-xs text-center sm:px-6 text-gray-400">Go Back To
                    <Link to='/login' className="underline text-gray-800"> Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;