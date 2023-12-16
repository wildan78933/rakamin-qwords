import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleRight,
    faBlog,
    faBuilding,
    faLaptopCode,
    faPerson,
    faSchool,
    faShop,
    faSitemap,
} from "@fortawesome/free-solid-svg-icons";

const SolutionItems = () => {
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="w-1/2">
                <img
                    src="https://www.qwords.com/wp-content/themes/qwords/assets/images/illustrations/Web%20hosting%20untuk%20bisnis%20profesional.webp"
                    alt=""
                />
            </div>
            <div className="w-2/5 grid grid-rows-3">
                <a href="https://qwords.com/v2/hosting-dan-server-perusahaan/">
                    <div className=" rounded-2xl bg-[#1E3A72] flex flex-col px-7 py-6 mt-10 gap-5">
                        <span className="flex flex-row justify-between">
                            <div className="flex flex-row gap-3 justify-start items-center">
                                <FontAwesomeIcon
                                    icon={faBuilding}
                                    size="2xl"
                                    style={{ color: "#fff" }}
                                />
                                <h3 className="font-semibold text-lg text-white">
                                    Perusahaan
                                </h3>
                            </div>
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                size="2xl"
                                style={{ color: "#fff" }}
                            />
                            {/* <p>
                            Wujudkan website perusahaan profesional dan berkelas
                            dengan dukungan web hosting terbaik dan fitur
                            keamanan ekstra
                        </p> */}
                        </span>
                    </div>
                </a>
                <a href="https://qwords.com/v2/hosting-dan-server-umkm/">
                    <div className=" rounded-2xl bg-[#1E3A72]  flex flex-col px-7 py-6 mt-10 gap-5">
                        <span className="flex flex-row justify-between">
                            <div className="flex flex-row gap-3 justify-start items-center">
                                <FontAwesomeIcon
                                    icon={faShop}
                                    size="2xl"
                                    style={{ color: "#fff" }}
                                />
                                <h3 className="font-semibold text-lg text-white">
                                    UMKM dan Toko Online
                                </h3>
                            </div>
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                size="2xl"
                                style={{ color: "#fff" }}
                            />
                            {/* <p>
                            Memberikan hosting terbaik untuk mendukung kebutuhan
                            website pemasaran barang/jasa secara online.
                        </p> */}
                        </span>
                    </div>
                </a>
                <a href="https://qwords.com/v2/hosting-dan-server-organisasi/">
                    <div className=" rounded-2xl bg-[#1E3A72]  flex flex-col px-7 py-6 mt-10 gap-5">
                        <span className="flex flex-row justify-between">
                            <div className="flex flex-row gap-3 justify-start items-center">
                                <FontAwesomeIcon
                                    icon={faSitemap}
                                    size="2xl"
                                    style={{ color: "#fff" }}
                                />
                                <h3 className="font-semibold text-lg text-white">
                                    Organisasi dan Komunitas
                                </h3>
                            </div>
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                size="2xl"
                                style={{ color: "#fff" }}
                            />
                            {/* <p>
                            Bikin website organisasi atau komunitas Anda dengan
                            paket hosting unggulan yang ramah kantong.
                        </p> */}
                        </span>
                    </div>
                </a>

                <a href="https://qwords.com/v2/hosting-dan-server-sekolah/">
                    <div className=" rounded-2xl bg-[#1E3A72]  flex flex-col px-7 py-6 mt-10 gap-5">
                        <span className="flex flex-row justify-between">
                            <div className="flex flex-row gap-3 justify-start items-center">
                                <FontAwesomeIcon
                                    icon={faSchool}
                                    size="2xl"
                                    style={{ color: "#fff" }}
                                />
                                <h3 className="font-semibold text-lg text-white">
                                    Sekolah
                                </h3>
                            </div>
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                size="2xl"
                                style={{ color: "#fff" }}
                            />
                            {/* <p>
                            Infrastruktur web hosting terbaik untuk menunjang
                            kegiatan e-learning. Didukung platform MOODLE khusus
                            pembelajaran daring
                        </p> */}
                        </span>
                    </div>
                </a>
                <a href="https://qwords.com/v2/hosting-dan-server-developer/">
                    <div className=" rounded-2xl bg-[#1E3A72]  flex flex-col px-7 py-6 mt-10 gap-5">
                        <span className="flex flex-row justify-between">
                            <div className="flex flex-row gap-3 justify-start items-center">
                                <FontAwesomeIcon
                                    icon={faLaptopCode}
                                    size="2xl"
                                    style={{ color: "#fff" }}
                                />
                                <h3 className="font-semibold text-lg text-white">
                                    Developer
                                </h3>
                            </div>
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                size="2xl"
                                style={{ color: "#fff" }}
                            />
                            {/* <p>
                            Tersedia paket hosting Indonesia dengan spesifikasi
                            khusus yang dev-friendly. Ekstra NodeJS dan Git
                            Version Control
                        </p> */}
                        </span>
                    </div>
                </a>
                <a href="https://qwords.com/v2/hosting-dan-server-blogger/">
                    <div className=" rounded-2xl bg-[#1E3A72]  flex flex-col px-7 py-6 mt-10 gap-5">
                        <span className="flex flex-row justify-between">
                            <div className="flex flex-row gap-3 justify-start items-center">
                                <FontAwesomeIcon
                                    icon={faPerson}
                                    size="2xl"
                                    style={{ color: "#fff" }}
                                />
                                <h3 className="font-semibold text-lg text-white">
                                    Blogger dan Personal
                                </h3>
                            </div>
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                size="2xl"
                                style={{ color: "#fff" }}
                            />
                            {/* <p>
                            Memfasilitasi blogger dengan infrastruktur hosting
                            Indonesia terbaik serta template website premium
                            untuk tampil lebih profesional
                        </p> */}
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default SolutionItems;
