import React from "react";
import LogoPartnerItems from "./Items/LogoPartnerItems";

const LogoPartner = () => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-semibold text-[#242328] text-center">
                Partner Kami
            </h1>
            <LogoPartnerItems />
        </div>
    );
};

export default LogoPartner;
