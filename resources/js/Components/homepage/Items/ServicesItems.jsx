import SecondaryButton from "@/Components/SecondaryButton";
import React from "react";

const ServicesItems = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className=" rounded-2xl shadow-[0px_12px_51.8px_0px_rgba(255,110,7,0.15)] flex flex-col px-7 py-6 mt-10 gap-5">
                <span className="flex flex-col gap-3">
                    <div className="flex flex-row gap-3 justify-start items-center">
                        <img
                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/ssl.webp"
                            alt=""
                        />
                        <h3 className="font-semibold text-lg ">SSL</h3>
                    </div>
                    <p>
                        Jadikan website Anda lebih terpercaya dan disukai oleh
                        search engine dengan menggunakan SSL Certificate.
                    </p>
                </span>
                <p>Mulai dari </p>
                <h3 className="">
                    <span className="font-bold text-[#FF6E07] text-4xl">
                        Rp. 112.000
                    </span>{" "}
                    / tahun
                </h3>
                <SecondaryButton className="min-w-full">
                    Pesan Sekarang
                </SecondaryButton>
            </div>
            <div className=" rounded-2xl shadow-[0px_12px_51.8px_0px_rgba(255,110,7,0.15)] flex flex-col px-7 py-6 mt-10 gap-5">
                <span className="flex flex-col gap-3">
                    <div className="flex flex-row gap-3 justify-start items-center">
                        <img
                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/ssl.webp"
                            alt=""
                        />
                        <h3 className="font-semibold text-lg ">SSL</h3>
                    </div>
                    <p>
                        Jadikan website Anda lebih terpercaya dan disukai oleh
                        search engine dengan menggunakan SSL Certificate.
                    </p>
                </span>
                <p>Mulai dari </p>
                <h3 className="">
                    <span className="font-bold text-[#FF6E07] text-4xl">
                        Rp. 112.000
                    </span>{" "}
                    / tahun
                </h3>
                <SecondaryButton className="min-w-full">
                    Pesan Sekarang
                </SecondaryButton>
            </div>
            <div className=" rounded-2xl shadow-[0px_12px_51.8px_0px_rgba(255,110,7,0.15)] flex flex-col px-7 py-6 mt-10 gap-5">
                <span className="flex flex-col gap-3">
                    <div className="flex flex-row gap-3 justify-start items-center">
                        <img
                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/ssl.webp"
                            alt=""
                        />
                        <h3 className="font-semibold text-lg ">SSL</h3>
                    </div>
                    <p>
                        Jadikan website Anda lebih terpercaya dan disukai oleh
                        search engine dengan menggunakan SSL Certificate.
                    </p>
                </span>
                <p>Mulai dari </p>
                <h3 className="">
                    <span className="font-bold text-[#FF6E07] text-4xl">
                        Rp. 112.000
                    </span>{" "}
                    / tahun
                </h3>
                <SecondaryButton className="min-w-full">
                    Pesan Sekarang
                </SecondaryButton>
            </div>
        </div>
    );
};

export default ServicesItems;
