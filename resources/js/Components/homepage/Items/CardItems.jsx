import SecondaryButton from "@/Components/SecondaryButton";
import React from "react";
import { Link, Head, usePage } from "@inertiajs/react";

// const CardItems = () => {
//     const { props } = usePage();

//     console.log(props.hosting);
//     return (
//         <>
//             {props.hosting && props.hosting.length > 0 ? (
//                 props.hosting.map((data, i) => (
//                     <div
//                         key={i}
//                         className="grid grid-cols-4 gap-4 items-center"
//                     >
//                         <div className="flex flex-col gap-5  px-7 py-6">
//                             <div className="">
//                                 <h3 className="font-bold text-xl pb-3">
//                                     {data.title} Unlimited Hosting
//                                 </h3>
//                                 <p className="w-[164px] font-light text-sm text-gray-400">
//                                     {data.subtitle} Cocok untuk bisnis online
//                                 </p>
//                             </div>
//                             <div className="flex flex-row items-center justify-start gap-3">
//                                 <p className="text-sm line-through">
//                                     Rp 109.000
//                                 </p>
//                                 <span className="bg-[#FF6E07] text-white rounded-full px-4 py-1 text-xs ">
//                                     diskon 10%
//                                 </span>
//                             </div>
//                             <h3 className="text-2xl font-bold">Rp 89.900</h3>

//                             <div className="flex flex-col gap-5">
//                                 <div className="flex flex-row gap-3">
//                                     <span>
//                                         <img src="disk 1.png" alt="" />
//                                     </span>
//                                     <div>
//                                         <p>Disk</p>
//                                         <p>3 GB</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-row gap-3">
//                                     <span>
//                                         <img src="cpu.png" alt="" />
//                                     </span>
//                                     <div>
//                                         <p>Core CPU</p>
//                                         <p>0.5 Core</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-row  gap-3">
//                                     <span>
//                                         <img src="bandwidth.png" alt="" />
//                                     </span>
//                                     <div>
//                                         <p>Bandwith</p>
//                                         <p>Unlimited</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-row gap-3">
//                                     <span>
//                                         <img src="addon.png" alt="" />
//                                     </span>
//                                     <div>
//                                         <p>Addon / parked domain</p>
//                                         <p>No</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <SecondaryButton className="min-w-full">
//                                 Pesan Sekarang
//                             </SecondaryButton>
//                         </div>
//                         <span className=" shadow-[0px_12px_51.8px_0px_rgba(255,110,7,0.15)] rounded-2xl bg-white">
//                             <h1 className="py-6 text-center bg-[#FF6E07] rounded-t-2xl font-semibold text-white">
//                                 Recomendation
//                             </h1>
//                             <div className="flex flex-col gap-5  px-7 py-6">
//                                 <div className="">
//                                     <h3 className="font-bold text-xl pb-3">
//                                         Unlimited Hosting
//                                     </h3>
//                                     <p className="w-[164px] font-light text-sm text-gray-400">
//                                         Cocok untuk bisnis online
//                                     </p>
//                                 </div>
//                                 <div className="flex flex-row items-center justify-start gap-3">
//                                     <p className="text-sm line-through">
//                                         Rp 109.000
//                                     </p>
//                                     <span className="bg-[#FF6E07] text-white rounded-full px-4 py-1 text-xs ">
//                                         diskon 10%
//                                     </span>
//                                 </div>
//                                 <h3 className="text-2xl font-bold">
//                                     Rp 89.900
//                                 </h3>

//                                 <div className="flex flex-col gap-5">
//                                     <div className="flex flex-row gap-3">
//                                         <span>
//                                             <img src="disk 1.png" alt="" />
//                                         </span>
//                                         <div>
//                                             <p>Disk</p>
//                                             <p>3 GB</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex flex-row gap-3">
//                                         <span>
//                                             <img src="cpu.png" alt="" />
//                                         </span>
//                                         <div>
//                                             <p>Core CPU</p>
//                                             <p>0.5 Core</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex flex-row  gap-3">
//                                         <span>
//                                             <img src="bandwidth.png" alt="" />
//                                         </span>
//                                         <div>
//                                             <p>Bandwith</p>
//                                             <p>Unlimited</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex flex-row gap-3">
//                                         <span>
//                                             <img src="addon.png" alt="" />
//                                         </span>
//                                         <div>
//                                             <p>Addon / parked domain</p>
//                                             <p>No</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <SecondaryButton className="min-w-full">
//                                     Pesan Sekarang
//                                 </SecondaryButton>
//                             </div>
//                         </span>
//                         <div className="flex flex-col gap-5  px-7 py-6">
//                             <div className="">
//                                 <h3 className="font-bold text-xl pb-3">
//                                     Unlimited Hosting
//                                 </h3>
//                                 <p className="w-[164px] font-light text-sm text-gray-400">
//                                     Cocok untuk bisnis online
//                                 </p>
//                             </div>
//                             <div className="flex flex-row items-center justify-start gap-3">
//                                 <p className="text-sm line-through">
//                                     Rp 109.000
//                                 </p>
//                                 <span className="bg-[#FF6E07] text-white rounded-full px-4 py-1 text-xs ">
//                                     diskon 10%
//                                 </span>
//                             </div>
//                             <h3 className="text-2xl font-bold">Rp 89.900</h3>

//                             <div className="flex flex-col gap-5">
//                                 <div className="flex flex-row gap-3">
//                                     <span>
//                                         <img src="disk 1.png" alt="" />
//                                     </span>
//                                     <div>
//                                         <p>Disk</p>
//                                         <p>3 GB</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-row gap-3">
//                                     <span>
//                                         <img src="cpu.png" alt="" />
//                                     </span>
//                                     <div>
//                                         <p>Core CPU</p>
//                                         <p>0.5 Core</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-row  gap-3">
//                                     <span>
//                                         <img src="bandwidth.png" alt="" />
//                                     </span>
//                                     <div>
//                                         <p>Bandwith</p>
//                                         <p>Unlimited</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-row gap-3">
//                                     <span>
//                                         <img src="addon.png" alt="" />
//                                     </span>
//                                     <div>
//                                         <p>Addon / parked domain</p>
//                                         <p>No</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <SecondaryButton className="min-w-full">
//                                 Pesan Sekarang
//                             </SecondaryButton>
//                         </div>
//                         <div className="flex flex-col gap-5  px-7 py-6">
//                             <div className="">
//                                 <h3 className="font-bold text-xl pb-3">
//                                     Unlimited Hosting
//                                 </h3>
//                                 <p className="w-[164px] font-light text-sm text-gray-400">
//                                     Cocok untuk bisnis online
//                                 </p>
//                             </div>
//                             <div className="flex flex-row items-center justify-start gap-3">
//                                 <p className="text-sm line-through">
//                                     Rp 109.000
//                                 </p>
//                                 <span className="bg-[#FF6E07] text-white rounded-full px-4 py-1 text-xs ">
//                                     diskon 10%
//                                 </span>
//                             </div>
//                             <h3 className="text-2xl font-bold">Rp 89.900</h3>

//                             <div className="flex flex-col gap-5">
//                                 <div className="flex flex-row gap-3">
//                                     <span>
//                                         <img src="disk 1.png" alt="" />
//                                     </span>
//                                     <div>
//                                         <p>Disk</p>
//                                         <p>3 GB</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-row gap-3">
//                                     <span>
//                                         <img src="cpu.png" alt="" />
//                                     </span>
//                                     <div>
//                                         <p>Core CPU</p>
//                                         <p>0.5 Core</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-row  gap-3">
//                                     <span>
//                                         <img src="bandwidth.png" alt="" />
//                                     </span>
//                                     <div>
//                                         <p>Bandwith</p>
//                                         <p>Unlimited</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-row gap-3">
//                                     <span>
//                                         <img src="addon.png" alt="" />
//                                     </span>
//                                     <div>
//                                         <p>Addon / parked domain</p>
//                                         <p>No</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <SecondaryButton className="min-w-full">
//                                 Pesan Sekarang
//                             </SecondaryButton>
//                         </div>
//                     </div>
//                 ))
//             ) : (
//                 <p>Belum ada data hosting</p>
//             )}
//         </>
//     );
// };

const CardItems = () => {
    const { props } = usePage();

    const hostingLinks = {
        "Value Cloud Hosting":
            "https://portal.qwords.com/order/?pid=528&billingcycle=annually&_gl=1*1i7o8b3*_gcl_au*MTg0ODI5NjU2OC4xNzAyMzY1OTE0&_ga=2.253147785.1256574609.1702459381-633503086.1702365914",
        "Unlimited Hosting":
            "https://portal.qwords.com/order/?promocode=FRSTTMESGN&pid=392&_gl=1*1i7o8b3*_gcl_au*MTg0ODI5NjU2OC4xNzAyMzY1OTE0&_ga=2.253147785.1256574609.1702459381-633503086.1702365914",
        "High Performance":
            "https://portal.qwords.com/order/?pid=596&billingcycle=annually&_gl=1*lwbht9*_gcl_au*MTg0ODI5NjU2OC4xNzAyMzY1OTE0&_ga=2.214432791.1256574609.1702459381-633503086.1702365914",
        "Cloud VPS KVM SSD":
            "https://portal.qwords.com/order/?pid=634&billingcycle=annually&_gl=1*qdun7w*_gcl_au*MTg0ODI5NjU2OC4xNzAyMzY1OTE0&_ga=2.50780457.1256574609.1702459381-633503086.1702365914",
    };

    return (
        <div className=" grid grid-cols-4 gap-4 items-center justify-between">
            {props.hosting && props.hosting.length > 0 ? (
                props.hosting.map((data, i) => (
                    <div
                        key={i}
                        className={` ${
                            data.title === "Unlimited Hosting"
                                ? "shadow-[0px_12px_51.8px_0px_rgba(255,110,7,0.15)] rounded-2xl bg-white"
                                : ""
                        }`}
                    >
                        {data.title === "Unlimited Hosting" && (
                            <h1 className="py-6 text-center bg-[#FF6E07] rounded-t-2xl font-semibold text-white">
                                Rekomendasi
                            </h1>
                        )}
                        <div className="flex flex-col gap-5 px-7 py-6">
                            <div>
                                <h3 className="font-bold text-xl pb-3">
                                    {data.title}
                                </h3>
                                <p className="w-fit font-light text-sm text-gray-400">
                                    {data.subtitle}
                                </p>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-3">
                                <p className="text-sm line-through">
                                    Rp {data.original_price.toLocaleString()}
                                </p>
                                <span className="bg-[#FF6E07] text-white rounded-full px-4 py-1 text-xs ">
                                    diskon {data.discount_persen}%
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold">
                                Rp {data.discounted_price.toLocaleString()}
                            </h3>

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-row gap-3">
                                    <span>
                                        <img src="disk 1.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Disk</p>
                                        <p className="font-semibold">
                                            {data.disk_space} GB
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <span>
                                        <img src="cpu.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Core CPU</p>
                                        <p className="font-semibold">
                                            {data.core_cpu} Core
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row  gap-3">
                                    <span>
                                        <img src="bandwidth.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Bandwidth</p>
                                        <p className="font-semibold">
                                            {data.bandwidth}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <span>
                                        <img src="addon.png" alt="" />
                                    </span>
                                    <div>
                                        <p>Addon / parked domain</p>
                                        <p className="font-semibold">
                                            {data.addon_parked_domain}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <SecondaryButton
                                href={hostingLinks[data.title]}
                                className="min-w-full"
                            >
                                Pesan Sekarang
                            </SecondaryButton>
                        </div>
                    </div>
                ))
            ) : (
                <p>Belum ada data hosting</p>
            )}
        </div>
    );
};

export default CardItems;
