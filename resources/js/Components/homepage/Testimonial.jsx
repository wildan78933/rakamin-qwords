import React from "react";
import TestiItems from "./Items/TestiItems";

const Testimonial = () => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-semibold text-[#242328] text-center">
                Apa Kata Mereka ?
            </h1>
            <p className="font-light leading-6 mt-5 text-center mb-14">
                Apa kata mereka yang sudah menggunakan layanan web hosting
                Indonesia dari Qwords? <br />
                Simak pengalaman mereka yang telah membuktikan sendiri fitur
                dari layanan kami.
            </p>
            <TestiItems />
        </div>
    );
};

export default Testimonial;
