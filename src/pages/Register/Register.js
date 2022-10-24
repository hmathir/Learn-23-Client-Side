import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="pb-20">
            <div className="w-11/12 mx-auto max-w-md p-8 space-y-3 rounded-xl  border border-black mt-20">
                <h1 className="text-2xl font-bold text-center text-orange-400">Sign Up</h1>
                <form action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="name" className="block text-orange-400 font-bold">Name</label>
                        <input htmlFor="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photoURL" className="block text-orange-400 font-bold">Photo URL</label>
                        <input type="text" name="photoURL" id="photoURL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-orange-400 font-bold">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-orange-400 font-bold">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
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