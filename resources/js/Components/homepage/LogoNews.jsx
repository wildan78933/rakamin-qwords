import React from "react";
import LogoNewsItems from "./Items/LogoNewsItems";

const LogoNews = () => {
    return (
        <div className="flex flex-col justify-center items-center lg:px-24">
            <h1 className="text-4xl font-semibold text-[#242328] text-center">
                Diliput oleh
            </h1>
            <LogoNewsItems />
        </div>
    );
};

export default LogoNews;
