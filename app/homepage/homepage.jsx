export default function Homepage() {

    {/* Gradient Color, Note that the gradient color is not the final one and will change based on the UI or requirements design.*/ }

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
            {/* Homepage Start */}
            <div className="drawer-content flex flex-col content-center h-screen gap-3 bg-[#111230] w-full overflow-y-auto relative">

                {/* Carousel top */}
                <div className="inline h-auto w-full m-auto">
                    <div className="carousel rectangle-box absolute top-22 left-0 right-0 h-full gap-5">
                        <div className="carousel-item w-70 h-45" style={gradientStyle1}>
                            {/* Change me according the required content*/}
                            <h3 className="flex m-auto justify-center">Legacy Module</h3>
                        </div>

                        <div className="carousel-item w-70 h-45" style={gradientStyle2}>
                            {/* Change me according the required content*/}
                            <h3 className="flex m-auto justify-center">Rizal Birth Module</h3>
                        </div>

                        <div className="carousel-item w-70 h-45" style={gradientStyle3}>
                            {/* Change me according the required content*/}
                            <h3 className="flex m-auto justify-center">Family Module</h3>
                        </div>

                        <div className="carousel-item w-70 h-45" style={gradientStyle4}>
                            {/* Change me according the required content*/}
                            <h3 className="flex m-auto justify-center">Romantic Module</h3>
                        </div>

                        <div className="carousel-item w-70 h-45" style={gradientStyle5}>
                            {/* Change me according the required content*/}
                            <h3 className="flex m-auto justify-center">Others Modules</h3>
                        </div>
                    </div>
                </div>

                {/* Carousel bottom */}
                <div className="inline h-auto w-full" id="carousel2">
                    <div className="carousel rectangle-box h-full gap-5 absolute top-100 left-0 bot-0 right-0">
                        <div className="carousel-item w-70 h-45" style={gradientStyle6}>
                            {/* Change me according the required content*/}
                            <h3 className="flex m-auto justify-center">Others Content</h3>
                        </div>

                        <div className="carousel-item w-70 h-45" style={gradientStyle7}>
                            {/* Change me according the required content*/}
                            <h3 className="flex m-auto justify-center">Others Content</h3>
                        </div>

                        <div className="carousel-item w-70 h-45" style={gradientStyle8}>
                            {/* Change me according the required content*/}
                            <h3 className="flex m-auto justify-center">Others Content</h3>
                        </div>

                        <div className="carousel-item w-70 h-45" style={gradientStyle9}>
                            {/* Change me according the required content*/}
                            <h3 className="flex m-auto justify-center">Others Content</h3>
                        </div>

                        <div className="carousel-item w-70 h-45" style={gradientStyle10}>
                            {/* Change me according the required content*/}
                            <h3 className="flex m-auto justify-center">Others Content</h3>
                        </div>
                    </div>
                </div>

            </div>
            {/* Homepage End */}
        </>
    );
}