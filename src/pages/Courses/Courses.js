import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";
import CourseSideBar from "./CourseSideBar";

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div>
            <h1 className="w-10/12 mx-auto text-xl font-bold my-6">Our Courses:</h1>
            <div className="w-10/12 flex gap-6 justify-between mx-auto">

                <div className="w-4/12 border-4 border-orange-400 py-6 rounded-lg px-6 bg-gray-300 ">
                    {
                        courses.map(course => <CourseSideBar key={course.id} course={course}></CourseSideBar>)
                    }
                </div>
                <div className="w-8/12 bg-gray-300 rounded-lg px-6 border-4 border-orange-400 py-6">
                    <div className=" grid grid-col-1 md:grid-cols-3 gap-6">
                        {
                            courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                        }
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Courses;