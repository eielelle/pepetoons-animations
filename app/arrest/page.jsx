import Image from "next/image";
import JoseRizalArrest from "../../assets/arrest/Rizal Arrest.png";
import JoseRizalTrial from "../../assets/arrest/Rizal Trial.jpg";
import JoseRizalExecution from "../../assets/arrest/Rizal Execution.jpg";

export default function Arrest() {
  return (
    <main className="bg-[#101230] min-h-screen p-4">
      <h1 className="text-2xl md:text-6xl text-center font-bold mb-4">
        ARREST, TRIAL EXECUTION
      </h1>

      <div className="grid grid-cols-3 w-2/3 mx-auto gap-y-4">
        <div className="flex flex-col col-span-3 md:col-span-1 justify-center items-center gap-3">
          <Image
            src={JoseRizalArrest}
            width={260}
            height={200}
            alt="Jose Rizal Arrest"
          />
          <h3 className="font-bold">Arrest of Jose Rizal</h3>
        </div>

        <div className="col-span-3 md:col-span-2">
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-primary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              unde doloremque praesentium at numquam quidem sint excepturi
              debitis, impedit aut, temporibus hic! Veritatis ea rem quidem
              magnam velit neque hic?
            </div>
          </div>
        </div>

        <div className="col-span-3 md:col-span-2">
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-primary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              unde doloremque praesentium at numquam quidem sint excepturi
              debitis, impedit aut, temporibus hic! Veritatis ea rem quidem
              magnam velit neque hic?
            </div>
          </div>
        </div>

        <div className="flex flex-col col-span-3 md:col-span-1 justify-center items-center gap-3">
          <Image
            src={JoseRizalTrial}
            width={200}
            height={180}
            alt="Jose Rizal Trial"
          />
          <h3 className="font-bold">Trial of Jose Rizal</h3>
        </div>

        <div className="flex flex-col col-span-3 md:col-span-1 justify-center items-center gap-3">
          <Image
            src={JoseRizalExecution}
            width={260}
            height={300}
            alt="Jose Rizal Execution"
          />
          <h3 className="font-bold">Execution of Jose Rizal</h3>
        </div>

        <div className="col-span-3 md:col-span-2">
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-primary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              unde doloremque praesentium at numquam quidem sint excepturi
              debitis, impedit aut, temporibus hic! Veritatis ea rem quidem
              magnam velit neque hic?
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
