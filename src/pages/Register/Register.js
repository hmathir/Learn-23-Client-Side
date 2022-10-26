import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../context/UseContext';

const Register = () => {
    const {signUpUsingEmail, updateUserProfile} = useContext(AuthProvider);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password,name,photoURL);
        signUpUsingEmail(email,password).then(()=>{
            updateUserProfile(name,photoURL).then(() => {
              }).catch((error) => {
                toast.error(error.message)
              });
            navigate(from, {replace: true})
            form.reset();
            toast.success('Registration Successful')
        })
        .catch((e)=>{
            console.log(e);
            if(e.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
                toast.error('Password should not be lower than 6 characters');
            }
            else if(e.message === 'Firebase: Error (auth/email-already-in-use).'){
                toast.error('Email Already Used')
            }
            else if(e.message === 'Firebase: Error (auth/network-request-failed).'){
                toast.error('Please Check Your Internet Connection')
            }
            else if(e.message === 'Firebase: Error (auth/invalid-email).'){
                toast.error('Invalid Email')
            }
            else if(e.message === 'Firebase: Error (auth/internal-error).'){
                toast.error('Invalid Password or Internal Error')
            }
            else{
                toast.error(e.message);
            }
        })
    }

    
    
    return (
        <div className="pb-20">
            
            <div className="w-11/12 mx-auto max-w-md p-8 space-y-3 rounded-xl  border border-black mt-20">
                <h1 className="text-2xl font-bold text-center text-orange-400">Sign Up</h1>
                <form onSubmit={handleRegister} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-orange-400 font-bold">Name*</label>
                        <input required htmlFor="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photoURL" className="block text-orange-400 font-bold">Photo URL (Optional)</label>
                        <input type="text" name="photoURL" id="photoURL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-orange-400 font-bold">Email*</label>
                        <input required type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-orange-400 font-bold">Password*</label>
                        <input required type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <button className="block w-full p-3 text-center bg-orange-400 text-white rounded-lg">Register</button>
                </form>

                <p className="text-xs text-center sm:px-6 text-gray-400">Already have an account?
                    <Link to='/login' className="underline text-gray-800">Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;