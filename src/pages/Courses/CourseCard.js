
const CourseCard = ({course}) => {
    const {courseName,image,price} = course;
    return (
        <div>
            <div className="border border-black rounded-lg">
                <div>
                    <img className="rounded-lg w-72 h-40" src={image} alt="" />
                </div>
                <h1 className="text-xl font-bold p-2">{courseName}</h1>
                <hr />
                <div className="flex justify-between p-2 font-bold">
                    <h1>
                        $ {price}
                    </h1>
                    <button className="text-orange-400">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;