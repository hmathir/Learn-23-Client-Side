import { useNavigate } from "react-router-dom";

const CourseCard = ({course}) => {
    const {courseName,image,price, id} = course;
    const navigate = useNavigate();
    return (
        <div>
            <div onClick={()=>navigate(`/courses/${id}`)} className="border-4 border-orange-400 rounded-xl h-full bg-white hover:border-black hover:bg-orange-400 hover:text-white cursor-pointer">
                <div>
                    <img className="rounded-lg w-full md:w-72 h-40 border-2 border-orange-400" src={image} alt="" />
                </div>
                <h1 className="text font-bold p-2">{courseName}</h1>
                <hr />
                <div className="flex items-center rounded-lg justify-between p-2 font-bold">
                    <h1>
                        $ {price}
                    </h1>
                    <button className="font-bold px-2 py-1 bg-black rounded-lg text-white">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;