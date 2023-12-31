import React from "react";
import { Link, Head } from "@inertiajs/react";
import CardItems from "./Items/CardItems";

const Card = (props) => {
    return (
        <div className="flex flex-col justify-center items-center lg:px-24">
            <h1 className="text-2xl lg:text-4xl md:text-4xl font-semibold text-[#242328] text-center">
                Cloud Hosting Indonesia <br />
                <span className="font-bold text-4xl lg:text-5xl md:text-5xl text-[#FF6E07]">
                    Diskon Hingga 50%
                </span>
            </h1>
            <p className="font-light leading-6 mt-5 text-center mb-5 lg:mb-14">
                Layanan cloud hosting indonesia terbaik dengan teknologi andal
                untuk website anda
            </p>
            <CardItems />
        </div>
    );
};

export default Card;
