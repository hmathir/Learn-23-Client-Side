import { Icon } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import 'leaflet/dist/leaflet.css';
import { useContext, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useLoaderData, useNavigate } from "react-router-dom";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import achivements from '../../assets/achivements.jpeg';
import appuser from '../../assets/appuser.webp';
import students from '../../assets/students.webp';
import teacher from '../../assets/teacher.webp';
import videos from '../../assets/videos.webp';
import { AuthProvider } from "../../context/UseContext";

const Home = () => {
    const [swiper, setSwiper] = useState({});
    const courses = useLoaderData();
    const naviagte = useNavigate();
    const { dark } = useContext(AuthProvider);
    return (
        <div>

            <div className={`py-10  ${dark ? "bg-black" : "bg-white"}`}>
                <div className={`text-center ${dark ? "text-white" : "text-black"}`}>
                    <h1 className="text-3xl md:text-6xl font-bold">Popular Courses</h1>
                    <p className="text-xl mt-2" >Get 20% Discount on This October Only.</p>
                </div>
                {/* SliderSection */}
                <div className="w-11/12 md:w-9/12 mx-auto mt-10">
                    <Swiper
                        onInit={(event) => {
                            setSwiper(event)
                        }}
                        spaceBetween={40}
                        slidesPerView={3.5}

                    >
                        {courses.map((course, index) => <SwiperSlide key={index}>
                            <div className="border border-white rounded-md">
                                <img onClick={() => { naviagte(`/courses/${course.id}`) }} className='cursor-pointer h-[100px] md:w-[400px] md:h-[350px] rounded-xl' src={course.image} alt="" />
                            </div>
                        </SwiperSlide>)}
                    </Swiper>
                    <div className={`${dark ? "text-white" : "text-black"} space-x-6 mt-5`}>
                        <button className={`${dark ? "border-white" : "border-black"} border  rounded-3xl p-2`} onClick={() => swiper.slidePrev()}> {'<'} </button>
                        <button className={`${dark ? "border-white" : "border-black"} border rounded-3xl p-2`} onClick={() => swiper.slideNext()}> {'>'} </button>
                    </div>
                </div>
            </div>

            {/* Instractor Section */}
            <div className={`py-10  ${dark ? "bg-black" : "bg-white"} ${dark ? "text-white" : "text-black"}`}>
                <div className=" w-10/12 mx-auto">
                    <div className="text-center py-16">
                        <h1 className="text-3xl md:text-6xl font-bold">Our Achivement</h1>
                    </div>
                    <div className="w-11/12 mx-auto md:flex items-center">
                        <div className="md:w-4/12">
                            <img className="rounded-full" src={achivements} alt="" />
                        </div>
                        <div className="md:w-8/12 flex items-center justify-evenly">
                            <div>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <img src={teacher} alt="" />
                                    </div>
                                    <div>
                                        <h1 className="md:text-4xl font-bold">150+</h1>
                                        <p>Teachers</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-10">
                                    <div>
                                        <img src={students} alt="" />
                                    </div>
                                    <div>
                                        <h1 className="md:text-4xl font-bold">50,000+</h1>
                                        <p>Students</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <img src={videos} alt="" />
                                    </div>
                                    <div>
                                        <h1 className="md:text-4xl font-bold">500+</h1>
                                        <p>Videos</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-10">
                                    <div>
                                        <img src={appuser} alt="" />
                                    </div>
                                    <div>
                                        <h1 className="md:text-4xl font-bold">30,000+</h1>
                                        <p>App Users</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className={`text-3xl text-center md:text-6xl font-bold ${dark ? "bg-black" : "bg-white"} ${dark ? "text-white" : "text-black"}`}>
            <h1 className='py-4'>Find Us On Map:</h1>
                <MapContainer center={[23.7936943, 90.4031814]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[23.7936943, 90.4031814]} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} />
                </MapContainer>
            </div>
        </div>
    );
};

export default Home;