import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-xl font-bold my-6">Our Courses:</h1>
            <div className=" grid grid-cols-4 gap-6 ">
                {
                    courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div>
        </div>

    );
};

export default Courses;