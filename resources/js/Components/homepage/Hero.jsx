import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SecondaryButton from "../SecondaryButton";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedText, setSelectedText] = useState(".id");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleDropdownItemClick = (text) => {
        setSelectedText(text);
        setIsOpen(false);
    };

    return (
        <div className=" flex flex-col md:flex-row lg:flex-row justify-between items-center gap-14 mt-5 lg:mt-10 lg:px-24">
            <div className="w-full lg:w-2/3 md:w-1/2 flex flex-col gap-10">
                <span className="">
                    <h1 className="text-2xl lg:text-4xl md:text-3xl font-semibold text-[#242328]">
                        Cloud Hosting untuk <br />
                        <span className="font-bold text-4xl lg:text-5xl text-[#FF6E07] md:text-5xl">
                            Kesuksesan Websitemu !
                        </span>
                    </h1>
                    <p className="lg:w-1/2 w-full text-base lg:text-base md:text-base font-light leading-6 mt-5">
                        Qwords menawarkan layanan Cloud Hosting yang Cepat,
                        Aman, dan Dukungan 24 jam untuk memenuhi kebutuhan
                        hosting Anda. Tersertifikasi ISO 27001 dengan Data
                        Center Tier 3.
                    </p>
                </span>
                <div className="relative">
                    <div className="flex items-center gap-7">
                        <div className="flex flex-row items-center  shadow-[0px_12px_51.8px_0px_rgba(255,110,7,0.20)]  rounded-2xl w-[360px] bg-white">
                            <input
                                type="text"
                                placeholder="Cari nama domain Anda"
                                className="input w-full max-w-xs bg-transparent placeholder-gray-400 "
                            />
                            <span className="text-sm text-gray-400 ml-2">
                                {selectedText}
                            </span>
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn m-1 bg-transparent border-none shadow-none"
                                    onClick={toggleDropdown}
                                >
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                                {isOpen && (
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li>
                                            <a
                                                onClick={() =>
                                                    handleDropdownItemClick(
                                                        ".id"
                                                    )
                                                }
                                            >
                                                .id
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                onClick={() =>
                                                    handleDropdownItemClick(
                                                        ".com"
                                                    )
                                                }
                                            >
                                                .com
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                        <SecondaryButton
                            onClick={() => console.log("Button clicked")}
                            disabled={false}
                        >
                            Cari
                        </SecondaryButton>
                    </div>
                </div>

                <div className=" flex flex-row text-sm lg:text-base gap-10 pl-5 text-gray-400">
                    <p>
                        .com <br /> Rp 165.000
                    </p>
                    <p>
                        .com <br /> Rp 165.000
                    </p>
                    <p>
                        .com <br /> Rp 165.000
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2">
                <img src="hero.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;
