
const Blogs = () => {
    return (
        <div className=" py-10 ">
            <div className='w-10/12 mx-auto border border-orange-400 p-4 rounded-lg '>
                <div>
                    <h1 className="text-xl font-bold">What is Cors?</h1>
                </div>
                <div>
                    <h1 className="font-bold">Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</h1>
                </div>
            </div>
            <div className='mt-6 w-10/12 mx-auto border border-orange-400 p-4 rounded-lg '>
                <div>
                    <h1 className="text-xl font-bold">How does the private route work?</h1>
                </div>
                <div>
                    <h1 className="font-bold">The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</h1>
                </div>
            </div>
            <div className='mt-6 w-10/12 mx-auto border border-orange-400 p-4 rounded-lg '>
                <div>
                    <h1 className="text-xl font-bold">Why are you using firebase? What other options do you have to implement authentication?</h1>
                </div>
                <div>
                    <h1 className="font-bold">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Competitors and Alternatives to Firebase Realtime Database
                        MongoDB.
                        Oracle Database.
                        Amazon Redshift.
                        DataStax Enterprise.
                        Redis Enterprise Cloud.
                        Cloudera Enterprise Data Hub.
                        Db2.
                        Couchbase Server.Í</h1>
                </div>
            </div>
            <div className='mt-6 w-10/12 mx-auto border border-orange-400 p-4 rounded-lg '>
                <div>
                    <h1 className="text-xl font-bold">What is Node? How does Node work?</h1>
                </div>
                <div>
                    <h1 className="font-bold">It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</h1>
                </div>
            </div>
        </div>

    );
};

export default Blogs;