"use client";

import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";

export default function Homepage() {

    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // SETTING THE DARK AND LIGHT THEME
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    {/* Gradient color*/ }
    const gradientStyle1 = {
        background: "-webkit-linear-gradient(90deg, hsla(276, 91%, 79%, 1) 0%, hsla(254, 74%, 65%, 1) 100%)",
    };

    const gradientStyle2 = {
        background: "-webkit-linear-gradient(90deg, hsla(192, 80%, 51%, 1) 0%, hsla(355, 85%, 63%, 1) 100%)",
    };

    const gradientStyle3 = {
        background: "-webkit-linear-gradient(90deg, hsla(171, 87%, 67%, 1) 0%, hsla(236, 100%, 72%, 1) 100%)",
    }

    const gradientStyle4 = {
        background: "-webkit-linear-gradient(90deg, hsla(132, 79%, 68%, 1) 0%, hsla(101, 62%, 48%, 1) 100%)",
    }

    const gradientStyle5 = {
        background: "-webkit-linear-gradient(90deg, hsla(187, 82%, 65%, 1) 0%, hsla(65, 77%, 63%, 1) 50%, hsla(327, 67%, 74%, 1) 100%)",
    }

    const gradientStyle6 = {
        background: "-webkit-linear-gradient(90deg, hsla(210, 71%, 55%, 1) 0%, hsla(334, 77%, 69%, 1) 100%)",
    }

    const gradientStyle7 = {
        background: "-webkit-linear-gradient(90deg, hsla(239, 94%, 14%, 1) 0%, hsla(190, 68%, 50%, 1) 100%)",
    }

    const gradientStyle8 = {
        background: "-webkit-linear-gradient(90deg, hsla(198, 65%, 34%, 1) 0%, hsla(178, 44%, 32%, 1) 100%)",
    }

    const gradientStyle9 = {
        background: "-webkit-linear-gradient(90deg, hsla(282, 36%, 25%, 1) 0%, hsla(310, 22%, 37%, 1) 100%)",
    }


    const gradientStyle10 = {
        background: "-webkit-linear-gradient(90deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%)",
    }

    return (
        <>
            <div className={`flex min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
                }`} >
                <Sidebar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

                {/* I adjust to relative to automatically adjust the homepage inside content and make scrollable y and x asis in case needed just like the homepage */}
                <div className="flex-1 relative h-screen overflow-y-auto flex items-start">
                    <div className="drawer-content flex flex-col content-center justify-center gap-3 bg-[#111230] w-full h-full">
                        <div className="inline h-auto w-full m-auto" id="carousel1">
                            <div className="carousel rectangle-box absolute top-25 left-0 right-0 h-full gap-5">
                                {/* bg-[url(https://placehold.co/300x300)] bg-cover bg-center bg-no-repeat */}
                                <div className="carousel-item w-70 h-45" style={gradientStyle1}>
                                    <h3 className="flex m-auto justify-center">Legacy Module</h3>
                                </div>

                                <div className="carousel-item w-70 h-45" style={gradientStyle2}>
                                    <h3 className="flex m-auto justify-center">Rizal Birth Module</h3>
                                </div>

                                <div className="carousel-item w-70 h-45" style={gradientStyle3}>
                                    <h3 className="flex m-auto justify-center">Family Module</h3>
                                </div>

                                <div className="carousel-item w-70 h-45" style={gradientStyle4}>
                                    <h3 className="flex m-auto justify-center">Romantic Module</h3>
                                </div>

                                <div className="carousel-item w-70 h-45" style={gradientStyle5}>
                                    <h3 className="flex m-auto justify-center">Others Modules</h3>
                                </div>
                            </div>
                        </div>

                        <div className="inline h-auto w-full" id="carousel2">
                            <div className="carousel rectangle-box h-full gap-5 absolute top-100 left-0 bot-0 right-0">
                                {/* bg-[url(https://placehold.co/300x300)] bg-cover bg-center bg-no-repeat */}
                                <div className="carousel-item w-70 h-45" style={gradientStyle6}>
                                    <h3 className="flex m-auto justify-center">Others Content</h3>
                                </div>

                                <div className="carousel-item w-70 h-45" style={gradientStyle7}>
                                    <h3 className="flex m-auto justify-center">Others Content</h3>
                                </div>

                                <div className="carousel-item w-70 h-45" style={gradientStyle8}>
                                    <h3 className="flex m-auto justify-center">Others Content</h3>
                                </div>

                                <div className="carousel-item w-70 h-45" style={gradientStyle9}>
                                    <h3 className="flex m-auto justify-center">Others Content</h3>
                                </div>

                                <div className="carousel-item w-70 h-45" style={gradientStyle10}>
                                    <h3 className="flex m-auto justify-center">Others Content</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </>
    );
}