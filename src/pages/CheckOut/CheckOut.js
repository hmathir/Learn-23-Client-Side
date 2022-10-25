import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const course = useLoaderData();
    const { courseName, image, price, instractor} = course;
    console.log(course.price);
    return (
        <div className="block mt-10 md:mt-0 md:flex items-center justify-between w-full md:w-8/12 mx-auto md:h-screen">
            <div className="w-10/12 mx-auto md:w-4/12 text-center border-2 border-orange-400 rounded-xl p-2">
                <h1 className="text-2xl font-bold">Please Enter Your Phone Number For Payment:</h1>
                <input type="text" className="mx-auto border block mt-2 border-orange-400 focus:border-4 md:w-10/12 py-2 rounded-md px-2" placeholder="017xxxxxxxx" />
                <button className=" md:w-10/12 bg-orange-400 px-4 py-2 rounded-xl text-white mt-4">Proceed To Purchase</button>
            </div>
            <div className="w-10/12 mx-auto md:w-4/12 mt-2 md:mt-0 flex items-center gap-2 border-2 border-orange-400 rounded-xl p-2">
                <div>
                    <img className="w-16 h-16 rounded-full" src={image} alt="" />
                </div>
                <div>
                    <h1 className="text-xl font-bold">{courseName}</h1>
                    <p className="font-bold">{instractor?.name}</p>
                    <hr />
                    <div className="flex justify-between">
                        <p>Course Price:</p>
                        {price}
                    </div>
                    <input type="text" className="border block mt-2 border-orange-400 focus:border-2 md:w-10/12 py-2 rounded-md px-2" placeholder="Promo Code" />
                </div>
            </div>
        </div>
    );
};

export default CheckOut;