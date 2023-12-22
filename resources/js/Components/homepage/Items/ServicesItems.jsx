import SecondaryButton from "@/Components/SecondaryButton";
import React from "react";

const servicesData = [
    {
        title: "SSL",
        description:
            "Jadikan website Anda lebih terpercaya dan disukai oleh search engine dengan menggunakan SSL Certificate.",
        price: "Rp. 112.000",
        period: "/ tahun",
        href: "https://www.qwords.com/v2/services/secured-sockets-layer-certificate/?_gl=1*17b401z*_gcl_au*MTg0ODI5NjU2OC4xNzAyMzY1OTE0&_ga=2.206870803.1256574609.1702459381-633503086.1702365914",
    },
    {
        title: "Dedicated Server",
        description:
            "Nikmati kelola Dedicated Server sendiri dengan akses remote dari seluruh dunia tanpa batas.",
        price: "Rp. 499.000",
        period: "/ bulan",
        href: "https://www.qwords.com/v2/dedicated-server/dedicated-box/?_gl=1*pnlcjm*_gcl_au*MTg0ODI5NjU2OC4xNzAyMzY1OTE0&_ga=2.206041491.1256574609.1702459381-633503086.1702365914",
    },
    {
        title: "Colocation Server",
        description:
            "Akses cepat dari seluruh dunia dengan fasilitas 24x7 full monitoring dengan cooling system terbaik serta fire extinguisher.",
        price: "Rp. 500.000",
        period: "/ bulan",
        href: "https://www.qwords.com/v2/dedicated-server/colocation-server/?_gl=1*pnlcjm*_gcl_au*MTg0ODI5NjU2OC4xNzAyMzY1OTE0&_ga=2.206041491.1256574609.1702459381-633503086.1702365914",
    },
];

const ServicesItems = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {servicesData.map((service, index) => (
                <div
                    key={index}
                    className="rounded-2xl shadow-[0px_12px_51.8px_0px_rgba(255,110,7,0.15)] flex flex-col px-7 py-6 mt-10 gap-5"
                >
                    <span className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3 justify-start items-center">
                            <img
                                src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/smallicons/ssl.webp"
                                alt=""
                            />
                            <h3 className="font-semibold text-lg ">
                                {service.title}
                            </h3>
                        </div>
                        <p className="font-light text-gray-400">
                            {service.description}
                        </p>
                    </span>
                    <p className="text-gray-400">Mulai dari </p>
                    <h3 className="">
                        <span className="font-bold text-[#FF6E07] text-4xl">
                            {service.price}
                        </span>{" "}
                        {service.period}
                    </h3>
                    <SecondaryButton href={service.href} className="min-w-full">
                        Pesan Sekarang
                    </SecondaryButton>
                </div>
            ))}
        </div>
    );
};

export default ServicesItems;
