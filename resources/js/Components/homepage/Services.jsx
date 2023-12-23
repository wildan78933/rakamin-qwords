import React from "react";
import ServicesItems from "./Items/ServicesItems";

const Services = () => {
    return (
        <div className="flex flex-col justify-center items-center lg:px-24">
            <h1 className=" text-3xl lg:text-4xl md:text-4xl font-semibold text-[#242328] text-center">
                Lihat Juga Layanan Kami Yang Lain
            </h1>
            <p className="font-light leading-6  mt-5 text-center">
                Optimalkan performa website bisnis Anda dengan berbagai layanan
                berkualitas dari Qwords
            </p>

            <ServicesItems />
        </div>
    );
};

export default Services;
