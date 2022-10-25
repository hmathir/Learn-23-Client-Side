import { faArrowRight, faCheck, faFilePdf, faStar, faUsers, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
    const course = useLoaderData();
    const { courseName, image, rating, price, students, videos, quiz, instractor, details, category, id } = course;

    const ref = createRef();
    const options = {
        orientation: 'landscape',
    };
    return (
        <div>
            <div ref={ref} className="w-10/12 md:flex gap-6 justify-between mx-auto mt-10 font-bold">

                {/* Left Side */}
                <div className="md:w-4/12 border-4 border-orange-400  rounded-lg  bg-gray-300 ">
                    <div>
                        <div>
                            <img src={image} alt="" />
                        </div>
                        <div className="w-10/12 mx-auto py-2 mt-10 text-end">
                            <h1 className="font-bold text-xl">${price}</h1>
                        </div>
                        <div>
                            <Link to={`/checkout/${id}`}> <button className="px-3 w-10/12 mx-auto py-2 flex justify-between bg-white hover:bg-orange-400 border-2 border-orange-400 hover:border-black rounded-md items-center gap-3 hover:text-white ">
                                Get premium access <FontAwesomeIcon icon={faArrowRight} />
                            </button></Link>
                        </div>

                        <div className="flex justify-between items-center w-10/12 mx-auto py-2 text-start mt-10">
                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon className="text-orange-400 text-2xl" icon={faUsers} />
                                <div>
                                    <p>Enrollment</p>
                                    <p>{students}</p>
                                </div>

                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <p>Rating</p>
                                    <p>{rating}</p>
                                </div>
                                <FontAwesomeIcon className="text-orange-400 text-2xl" icon={faStar} />

                            </div>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center w-10/12 mx-auto py-2 mb-10 text-start">
                            <div className="flex items-center gap-2">

                                <p className="flex items-center gap-2">                               <FontAwesomeIcon className="text-orange-400 text-2xl" icon={faVideo} /> {videos} Videos</p>

                            </div>
                            <div>
                                <p className="flex items-center gap-2">                                {quiz} Quizes <FontAwesomeIcon className="text-orange-400 text-2xl" icon={faCheck} /></p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>

                {/* Right Side */}
                <div className="md:w-8/12 bg-gray-300 rounded-lg border-4 border-orange-400 px-6">
                    <div className="">
                        <div className="md:flex md:justify-between md:items-center">
                            <h1 className="w-10/12 text-4xl font-bold my-4">{courseName}</h1>
                            <div className="border border-orange-400 bg-orange-400 text-white rounded-lg px-2">
                                <Pdf targetRef={ref} options={options} filename="course-details.pdf">
                                    {({ toPdf }) => <button onClick={toPdf}>Download <FontAwesomeIcon icon={faFilePdf} /></button>}
                                </Pdf>                            </div>

                        </div>

                        <p>{details}</p>
                    </div>
                    <div className="mt-10">
                        <h1 className="text-2xl font-bold">Instractor:</h1>
                        <div className="md:flex items-center gap-3 p-4 border-2 rounded-lg border-orange-400 my-2">
                            <div>
                                <img className="h-24 w-24 rounded-full" src={instractor?.profileImg} alt="" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">{instractor?.name}</h1>
                                <p>{instractor?.details}</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex gap-1">
                        <p>Category:</p>
                        <p>                        {
                            parseInt(category) === 1 ? 'Development' : 'Design'
                        }</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourseDetails;