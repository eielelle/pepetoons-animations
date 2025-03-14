import Image from 'next/image';
import JoseRizalArrest from '../../assets/arrest/Rizal Arrest.png';
import JoseRizalTrial from '../../assets/arrest/Rizal Trial.jpg';
import JoseRizalExecution from '../../assets/arrest/Rizal Execution.jpg';

export default function Arrest() {
    return (
        <>
            {/* Start of arrest module */}
            <div className="h-screen p-3 my-5">

                {/* Start of module title*/}
                <div className="text-center">
                    <h1 className="text-6xl font-bold">ARREST, TRIAL EXECUTION</h1>
                </div>
                {/* End of module title */}

                <div className="grid grid-rows-3 gap-4 mt-2 py-10">
                    {/* Start of jose rizal arrest */}
                    <div className="flex flex-none justify-center gap-10 h-80">
                        <div className='flex flex-col w-auto h-auto justify-start gap-3'>
                            <Image className='m-auto'
                                src={JoseRizalArrest}
                                width={260}
                                height={200}
                                alt="Jose Rizal Arrest"
                            />
                            <h3 className='text-center inline font-bold'>Arrest of Jose Rizal</h3>
                        </div>
                        <div className='w-1/2 bg-gray-500 p-5 flex flex-col gap-5 justify-center rounded-3xl'>
                            <p className='txt-sm text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi unde doloremque praesentium at numquam quidem sint excepturi debitis, impedit aut, temporibus hic! Veritatis ea rem quidem magnam velit neque hic?</p>
                            <p className='txt-sm text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi unde doloremque praesentium at numquam quidem sint excepturi debitis, impedit aut, temporibus hic! Veritatis ea rem quidem magnam velit neque hic?</p>
                        </div>
                    </div>
                    {/* End of jose rizal arrest */}

                    {/* Start of jose rizal trial*/}
                    <div className="flex flex-none justify-center mt-3 gap-10 h-80">
                        <div className='w-1/2 bg-gray-500 p-5 flex flex-col gap-5 justify-center rounded-3xl'>
                            <p className='txt-sm text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi unde doloremque praesentium at numquam quidem sint excepturi debitis, impedit aut, temporibus hic! Veritatis ea rem quidem magnam velit neque hic?</p>
                            <p className='txt-sm text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi unde doloremque praesentium at numquam quidem sint excepturi debitis, impedit aut, temporibus hic! Veritatis ea rem quidem magnam velit neque hic?</p>
                        </div>
                        <div className='flex flex-col w-auto h-auto me-15 justify-items-start gap-3'>
                            <Image className='m-auto justify-start'
                                src={JoseRizalTrial}
                                width={200}
                                height={180}
                                alt="Jose Rizal Trial" />
                            <h3 className='text-center inline font-bold'>Trial of Jose Rizal</h3>
                        </div>
                    </div>
                    {/* End of jose rizal trial*/}

                    {/* Start of jose rizal execution */}
                    <div className="flex flex-none justify-center mt-5 gap-10 h-80">
                        <div className='flex flex-col w-auto h-auto justify-center gap-5'>
                            <Image className=''
                                src={JoseRizalExecution}
                                width={260}
                                height={300}
                                alt="Jose Rizal Execution"
                            />
                            <h3 className='text-center font-bold'>Execution of Jose Rizal</h3>
                        </div>
                        <div className='w-1/2 bg-gray-500 p-5 flex flex-col gap-5 justify-center rounded-3xl'>
                            <p className='txt-sm text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi unde doloremque praesentium at numquam quidem sint excepturi debitis, impedit aut, temporibus hic! Veritatis ea rem quidem magnam velit neque hic?</p>
                            <p className='txt-sm text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi unde doloremque praesentium at numquam quidem sint excepturi debitis, impedit aut, temporibus hic! Veritatis ea rem quidem magnam velit neque hic?</p>
                        </div>
                    </div>
                    {/* End of jose rizal execution */}

                </div>
            </div>
            {/* End of arrest module */}
        </>
    );
}