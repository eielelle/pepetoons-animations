'use client'

import Header from "../header";
import Lottie from "lottie-react"
import ticketAnim from "../../../../assets/anims/ticket-anim.json"

export default function CTA() {
  return (
    <section id="cta" className="h-screen bg-black text-white sticky top-0">
      <div className="container mx-auto flex flex-col h-full">
        <Header color="white" />
        <div className="border-t-2 text-center border-white flex-1 flex justify-center items-center">
          <div>
            <h1 className="text-6xl mb-4">Enter the museum today!</h1>
            <button className="btn btn-xl btn-wide rounded-4xl bg-blue-800">Let's go </button>
            <Lottie animationData={ticketAnim} style={{ width: "30rem" }} loop={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
