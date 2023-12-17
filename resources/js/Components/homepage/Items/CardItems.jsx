import SecondaryButton from "@/Components/SecondaryButton";
import React from "react";
import { Link, Head, usePage } from "@inertiajs/react";

const CardItems = () => {
    const { props } = usePage();

    console.log(props.title);
    return (
        <>
            {props.hosting && props.hosting.length > 0 ? (
                props.hosting.map((data, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-4 gap-4 items-center"
                    >
                        <div className="flex flex-col gap-5  px-7 py-6">
                            <div className="">
                                <h3 className="font-bold text-xl pb-3">
                                    {data.title} Unlimited Hosting
                                </h3>
                                <p className="w-[164px] font-light text-sm text-gray-400">
                                    {data.subtitle} Cocok untuk bisnis online
                                </p>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-3">
                                <p className="text-sm line-through">
                                    Rp 109.000
                                </p>
                                <span className="bg-[#FF6E07] text-white rounded-full px-4 py-1 text-xs ">
                                    diskon 10%
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold">Rp 89.900</h3>

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-row gap-3">
                                    <span>
                                        <img src="disk 1.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Disk</p>
                                        <p>3 GB</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <span>
                                        <img src="cpu.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Core CPU</p>
                                        <p>0.5 Core</p>
                                    </div>
                                </div>
                                <div className="flex flex-row  gap-3">
                                    <span>
                                        <img src="bandwidth.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Bandwith</p>
                                        <p>Unlimited</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <span>
                                        <img src="addon.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Addon / parked domain</p>
                                        <p>No</p>
                                    </div>
                                </div>
                            </div>
                            <SecondaryButton className="min-w-full">
                                Pesan Sekarang
                            </SecondaryButton>
                        </div>
                        <span className=" shadow-[0px_12px_51.8px_0px_rgba(255,110,7,0.15)] rounded-2xl bg-white">
                            <h1 className="py-6 text-center bg-[#FF6E07] rounded-t-2xl font-semibold text-white">
                                Recomendation
                            </h1>
                            <div className="flex flex-col gap-5  px-7 py-6">
                                <div className="">
                                    <h3 className="font-bold text-xl pb-3">
                                        Unlimited Hosting
                                    </h3>
                                    <p className="w-[164px] font-light text-sm text-gray-400">
                                        Cocok untuk bisnis online
                                    </p>
                                </div>
                                <div className="flex flex-row items-center justify-start gap-3">
                                    <p className="text-sm line-through">
                                        Rp 109.000
                                    </p>
                                    <span className="bg-[#FF6E07] text-white rounded-full px-4 py-1 text-xs ">
                                        diskon 10%
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold">
                                    Rp 89.900
                                </h3>

                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-row gap-3">
                                        <span>
                                            <img src="disk 1.png" alt="" />
                                        </span>
                                        <div>
                                            <p>Disk</p>
                                            <p>3 GB</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-3">
                                        <span>
                                            <img src="cpu.png" alt="" />
                                        </span>
                                        <div>
                                            <p>Core CPU</p>
                                            <p>0.5 Core</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row  gap-3">
                                        <span>
                                            <img src="bandwidth.png" alt="" />
                                        </span>
                                        <div>
                                            <p>Bandwith</p>
                                            <p>Unlimited</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-3">
                                        <span>
                                            <img src="addon.png" alt="" />
                                        </span>
                                        <div>
                                            <p>Addon / parked domain</p>
                                            <p>No</p>
                                        </div>
                                    </div>
                                </div>
                                <SecondaryButton className="min-w-full">
                                    Pesan Sekarang
                                </SecondaryButton>
                            </div>
                        </span>
                        <div className="flex flex-col gap-5  px-7 py-6">
                            <div className="">
                                <h3 className="font-bold text-xl pb-3">
                                    Unlimited Hosting
                                </h3>
                                <p className="w-[164px] font-light text-sm text-gray-400">
                                    Cocok untuk bisnis online
                                </p>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-3">
                                <p className="text-sm line-through">
                                    Rp 109.000
                                </p>
                                <span className="bg-[#FF6E07] text-white rounded-full px-4 py-1 text-xs ">
                                    diskon 10%
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold">Rp 89.900</h3>

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-row gap-3">
                                    <span>
                                        <img src="disk 1.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Disk</p>
                                        <p>3 GB</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <span>
                                        <img src="cpu.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Core CPU</p>
                                        <p>0.5 Core</p>
                                    </div>
                                </div>
                                <div className="flex flex-row  gap-3">
                                    <span>
                                        <img src="bandwidth.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Bandwith</p>
                                        <p>Unlimited</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <span>
                                        <img src="addon.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Addon / parked domain</p>
                                        <p>No</p>
                                    </div>
                                </div>
                            </div>
                            <SecondaryButton className="min-w-full">
                                Pesan Sekarang
                            </SecondaryButton>
                        </div>
                        <div className="flex flex-col gap-5  px-7 py-6">
                            <div className="">
                                <h3 className="font-bold text-xl pb-3">
                                    Unlimited Hosting
                                </h3>
                                <p className="w-[164px] font-light text-sm text-gray-400">
                                    Cocok untuk bisnis online
                                </p>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-3">
                                <p className="text-sm line-through">
                                    Rp 109.000
                                </p>
                                <span className="bg-[#FF6E07] text-white rounded-full px-4 py-1 text-xs ">
                                    diskon 10%
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold">Rp 89.900</h3>

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-row gap-3">
                                    <span>
                                        <img src="disk 1.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Disk</p>
                                        <p>3 GB</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <span>
                                        <img src="cpu.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Core CPU</p>
                                        <p>0.5 Core</p>
                                    </div>
                                </div>
                                <div className="flex flex-row  gap-3">
                                    <span>
                                        <img src="bandwidth.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Bandwith</p>
                                        <p>Unlimited</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <span>
                                        <img src="addon.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Addon / parked domain</p>
                                        <p>No</p>
                                    </div>
                                </div>
                            </div>
                            <SecondaryButton className="min-w-full">
                                Pesan Sekarang
                            </SecondaryButton>
                        </div>
                    </div>
                ))
            ) : (
                <p>Belum ada data hosting</p>
            )}
        </>
    );
};

export default CardItems;
