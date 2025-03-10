import Image from "next/image";
import Link from 'next/link'
import Logos from '../../assets/logo/Logo.png';

export default function Homepage() {
    return (
        <>
            {/* My Sidebar */}
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col content-center justify-center gap-3 bg-[#101230] w-fit ">
                    {/* Page content here */}
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label> */}

                    {/* bg-[#101230] */}

                    <div className="inline h-auto w-full mt-5">
                        <div className="carousel rectangle-box h-full gap-5">
                            <div className="carousel-item w-70 h-45 bg-[url(https://placehold.co/300x300)] bg-cover bg-center bg-no-repeat">

                            </div>

                            <div className="carousel-item w-70 h-45 bg-[url(https://placehold.co/300x300)] bg-cover bg-center bg-no-repeat">

                            </div>

                            <div className="carousel-item w-70 h-45 bg-[url(https://placehold.co/300x300)] bg-cover bg-center bg-no-repeat">

                            </div>

                            <div className="carousel-item w-70 h-45 bg-[url(https://placehold.co/300x300)] bg-cover bg-center bg-no-repeat">

                            </div>

                            <div className="carousel-item w-70 h-45 bg-[url(https://placehold.co/300x300)] bg-cover bg-center bg-no-repeat">

                            </div>
                        </div>
                    </div>

                    <div className="inline h-auto w-full mt-5">
                        <div className="carousel rectangle-box h-full gap-5">
                            <div className="carousel-item w-70 h-45 bg-[url(https://placehold.co/300x300)] bg-cover bg-center bg-no-repeat">

                            </div>

                            <div className="carousel-item w-70 h-45 bg-[url(https://placehold.co/300x300)] bg-cover bg-center bg-no-repeat">

                            </div>

                            <div className="carousel-item w-70 h-45 bg-[url(https://placehold.co/300x300)] bg-cover bg-center bg-no-repeat">

                            </div>

                            <div className="carousel-item w-70 h-45 bg-[url(https://placehold.co/300x300)] bg-cover bg-center bg-no-repeat">

                            </div>

                            <div className="carousel-item w-70 h-45 bg-[url(https://placehold.co/300x300)] bg-cover bg-center bg-no-repeat">

                            </div>
                        </div>
                    </div>



                </div>
                <div className="drawer-side bg-[#131639]">

                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <div className="menu bg-[#131639] text-white gap-2 text-white-content h-auto w-60 p-4">
                        <div className="justify-start h-auto">

                            <div className="flex items-center ms-2 gap-3 p-0 h-14">
                                <Image src={Logos} alt="Logo" id='logos'
                                    width={50}
                                    height={50} />
                                <h3 className="cursor-default text-2xl" id="Title">PepeToons</h3>
                            </div>

                            <ul className="list-none p-0 m-0 gap-2 mt-5" id="sidebar-links">
                                <li className="flex items-start"> <a className="items-center">Home</a> </li>
                                <li className="flex items-start"> <a className="items-center">Explore</a> </li>
                                <li className="flex items-start"> <a className="items-center">Geolocation</a> </li>
                                <li className="flex items-start"> <a className="items-center">About</a> </li>
                                <li className="flex items-start"> <a className="items-center">Team</a> </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}