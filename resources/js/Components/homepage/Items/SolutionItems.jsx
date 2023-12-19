import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faBuilding,
    faLaptopCode,
    faPerson,
    faSchool,
    faShop,
    faSitemap,
} from "@fortawesome/free-solid-svg-icons";

const SolutionItems = () => {
    const solutions = [
        {
            id: 1,
            href: "https://qwords.com/v2/hosting-dan-server-perusahaan/",
            icon: faBuilding,
            title: "Perusahaan",
        },
        {
            id: 2,
            href: "https://qwords.com/v2/hosting-dan-server-umkm/",
            icon: faShop,
            title: "UMKM dan Toko Online",
        },
        {
            id: 3,
            href: "https://qwords.com/v2/hosting-dan-server-organisasi/",
            icon: faSitemap,
            title: "Organisasi dan Komunitas",
        },
        {
            id: 4,
            href: "https://qwords.com/v2/hosting-dan-server-sekolah/",
            icon: faSchool,
            title: "Sekolah",
        },
        {
            id: 5,
            href: "https://qwords.com/v2/hosting-dan-server-developer/",
            icon: faLaptopCode,
            title: "Developer",
        },
        {
            id: 6,
            href: "https://qwords.com/v2/hosting-dan-server-blogger/",
            icon: faPerson,
            title: "Blogger dan Personal",
        },
    ];

    return (
        <div className="flex flex-row justify-between items-center">
            <div className="w-1/2">
                <img
                    src="https://www.qwords.com/wp-content/themes/qwords/assets/images/illustrations/Web%20hosting%20untuk%20bisnis%20profesional.webp"
                    alt=""
                />
            </div>
            <div className="w-2/5 grid grid-rows-3">
                {solutions.map((solution) => (
                    <a key={solution.id} href={solution.href}>
                        <div className="  flex flex-col px-7 py-3 gap-5">
                            <span className="flex flex-row items-center justify-between">
                                <div className="flex flex-row gap-5 justify-start items-center ">
                                    <FontAwesomeIcon
                                        icon={solution.icon}
                                        size="2xl"
                                        style={{ color: "#fff" }}
                                        className="w-10 rounded-xl px-7 py-6 bg-[#1E3A72] transition duration-300 ease-in-out hover:bg-blue-600"
                                    />

                                    <h3 className="font-semibold text-lg transition duration-300 ease-in-out hover:text-blue-600">
                                        {solution.title}
                                    </h3>
                                </div>
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    style={{ color: "#1e3a72" }}
                                />
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SolutionItems;
