import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const LogoNewsItems = () => {
    const [customerLogos, setCustomerLogos] = useState([
        {
            id: 1,
            url: "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/Detikcom.webp",
        },
        {
            id: 2,
            url: "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/Liputan6.webp",
        },
        {
            id: 3,
            url: "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/TribunJogja.webp",
        },
        {
            id: 4,
            url: "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/antara.webp",
        },
        {
            id: 5,
            url: "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/RM.webp",
        },
        {
            id: 6,
            url: "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/liputan/KoranBernas.webp",
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
                        className="w-40"
                        key={logo.id}
                        src={logo.url}
                        alt={`Customer Logo ${logo.id}`}
                    />
                ))}
            </div>
            <span className="flex flex-row items-center justify-center gap-3 text-[#FF6E07]">
                <a href="https://www.qwords.com/v2/media-publication/?_gl=1*w6ssk9*_gcl_au*MTg0ODI5NjU2OC4xNzAyMzY1OTE0&_ga=2.18649401.1256574609.1702459381-633503086.1702365914">
                    Lihat Semua Liputan{" "}
                </a>
                <FontAwesomeIcon icon={faArrowRight} />
            </span>
        </div>
    );
};

export default LogoNewsItems;
