import React from "react";
import LogoItems from "./Items/LogoCustomerItems";

const LogoCustomer = () => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-semibold text-[#242328] text-center">
                Telah Dipercaya oleh 45.000+ Pelanggan Aktif
            </h1>
            <LogoItems />
        </div>
    );
};

export default LogoCustomer;
