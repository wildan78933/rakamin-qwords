import React from "react";
import ComItems from "./Items/ComItems";

const Commitment = () => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-[#242328] text-center">
                Komitmen Qwords
            </h1>
            <p className="font-light leading-6 mt-5 text-center mb-14">
                Berbagai alasan mengapa pelanggan memilih sewa hosting di Qwords
            </p>
            <ComItems />
        </div>
    );
};

export default Commitment;
