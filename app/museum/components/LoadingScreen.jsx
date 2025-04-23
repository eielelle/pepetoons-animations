function LoadingCircle() {
    return <div className="relative">
        <div className="w-[140px] h-[140px] rounded-full border-2 border-[#C66030]"></div>

        <div className="absolute top-0 left-0 w-[140px] h-[140px] rounded-full bg-[#C66030]">
            <div className="w-full h-full flex gap-1 overflow-hidden">
                <div className="w-1 h-full bg-[#060606]"></div>
                <div className="w-1 h-full bg-[#060606]"></div>
                <div className="w-1 h-full bg-[#060606]"></div>
                <div className="w-1 h-full bg-[#060606]"></div>
                <div className="w-1 h-full bg-[#060606]"></div>
                <div className="w-1 h-full bg-[#060606]"></div>
                <div className="w-1 h-full bg-[#060606]"></div>
                <div className="w-1 h-full bg-[#060606]"></div>
            </div>
        </div>
    </div>
}



export default function LoadingScreen() {
    return <div className="w-full h-full bg-[#060606] flex justify-around items-center">
        <div className="h-[2px] w-1/3 bg-[#C66030]"></div>
        <div className="flex flex-col items-center gap-2">
            <LoadingCircle />
            <p>Loading... Please wait.</p>
        </div>
        <div className="h-[2px] w-1/3 bg-[#C66030]"></div>
    </div>
}