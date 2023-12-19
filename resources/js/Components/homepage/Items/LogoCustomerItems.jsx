import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const LogoCustomerItems = () => {
    const [customerLogos, setCustomerLogos] = useState([
        {
            id: 1,
            url: "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Cimory.webp",
        },
        {
            id: 2,
            url: "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Forisa.webp",
        },
        {
            id: 3,
            url: "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Elsheskin.webp",
        },
        {
            id: 4,
            url: "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Icon.webp",
        },
        {
            id: 5,
            url: "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/Horison.webp",
        },
        {
            id: 6,
            url: "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/partner-customer/Pelanggan/MD.webp",
        },
    ]);

    // Menggunakan fungsi sort untuk mengurutkan berdasarkan ID
    const sortedLogos = customerLogos
        .slice()
        .sort((logoA, logoB) => logoA.id - logoB.id);

    return (
        <div>
            <div className="flex flex-row my-12 ">
                {sortedLogos.map((logo) => (
                    <img
                        className="w-48"
                        key={logo.id}
                        src={logo.url}
                        alt={`Customer Logo ${logo.id}`}
                    />
                ))}
            </div>
            <span className="flex flex-row items-center justify-center gap-3 text-[#FF6E07]">
                <a href="/">Dan Masih Banyak yang Lainnya</a>
                <FontAwesomeIcon icon={faArrowRight} />
            </span>
        </div>
    );
};

export default LogoCustomerItems;
