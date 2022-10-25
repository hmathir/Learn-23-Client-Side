import { useNavigate } from "react-router-dom";

const CourseSideBar = ({ course }) => {
    const { courseName, instractor,students, price, id} = course;
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/courses/${id}`)} className="p-2 border-4 border-orange-400 bg-white hover:bg-orange-400 hover:border-black hover:text-white font-bold rounded-lg mb-4 cursor-pointer">
            <h1 className="text-xl font-bold">{courseName}:</h1>
            <div>
                <div className="flex items-center justify-between">
                    <h1>Instractor:</h1>
                    <div className="flex items-center justify-between gap-2">
                        <h1>{instractor?.name} </h1>
                        <img className="rounded-full w-8 h-8" src={instractor?.profileImg} alt="" />

                    </div>
                </div>
                <hr />
                <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center justify-between">
                        <h1>Enrolment: <span className="ml-1">{students}</span></h1>
                    </div>
                    <div className="flex items-center justify-between">
                    <h1>Price: <span className="ml-1">{price}</span></h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseSideBar;