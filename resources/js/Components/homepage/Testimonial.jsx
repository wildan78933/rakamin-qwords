import React from "react";
import TestiItems from "./Items/TestiItems";

const Testimonial = () => {
    return (
        <div className="flex flex-col justify-center items-center lg:px-24">
            <h1 className="text-3xl lg:text-4xl font-semibold text-[#242328] text-center md:text-4xl">
                Apa Kata Mereka ?
            </h1>
            <p className="font-light md:w-1/2 lg:w-2/3 leading-6 mt-5 text-center mb-14">
                Apa kata mereka yang sudah menggunakan layanan web hosting
                Indonesia dari Qwords? Simak pengalaman mereka yang telah
                membuktikan sendiri fitur dari layanan kami.
            </p>
            <TestiItems />
        </div>
    );
};

export default Testimonial;
