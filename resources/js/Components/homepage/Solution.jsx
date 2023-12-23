import React from "react";
import SolutionItems from "./Items/SolutionItems";

const Solution = () => {
    return (
        <div className="flex flex-col justify-center items-center lg:px-24">
            <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-[#242328] text-center">
                Solusi Paket Hosting Terbaik dari Kami
            </h1>
            <p className="lg:w-4/6 font-light leading-6 mt-5 text-center mb-14">
                Kami menawarkan solusi paket hosting terbaik untuk segala
                kebutuhan website dan sistem Anda. Mulai dari blog hingga
                website bisnis dan perusahaan
            </p>
            <SolutionItems />
        </div>
    );
};

export default Solution;
