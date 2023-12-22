import React, { useState } from "react";

const ComItems = () => {
    const [items, setItems] = useState([
        {
            title: "Layanan 24/7",
            description:
                "Anda dapat menghubungi melalui Live chat, Call Center, Support, Ticket",
            imageSrc:
                "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/call.webp",
        },
        {
            title: "Clustered DNS",
            description:
                "DNS Server selalu dapat di akses karena saling backup antar server.",
            imageSrc:
                "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/networkAlt.webp",
        },

        {
            title: "Panduan Manual Lengkap",
            description:
                "Tutorial dan tips seputar pengelolaan website dan hosting.",
            imageSrc:
                "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/book.webp",
        },
        {
            title: "High Enterprise Server",
            description:
                "Server Dual Xeon Octa Core yang merupakan hardware kelas terbaik.",
            imageSrc:
                "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/diamond.webp",
        },

        {
            title: "Up time 99.99%",
            description:
                "Uptime Network & Server di atas 99. 99% dengan konfigurasi server yang tepat.",
            imageSrc:
                "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/router.webp",
        },
        {
            title: "Tier 1 Network",
            description:
                "Membuat jaringan lebih cepat serta jalur routing yang lebih pendek",
            imageSrc:
                "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/router.webp",
        },
        {
            title: "Jaminan keamanan",
            description:
                "Pemantauan dan pencegahan yang berstandar & berkelanjutan",
            imageSrc:
                "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/guard.webp",
        },
        {
            title: "Peering Network",
            description:
                "Terhubung langsung ke public peering seperti OpenIXP dan CDIX",
            imageSrc:
                "https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/new-icon/network.webp",
        },
    ]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-2">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="px-6 py-8 gap-3 flex flex-row rounded-2xl bg-[#FEF9F5]"
                >
                    <img
                        src={item.imageSrc}
                        alt=""
                        className="w-[56px] h-[56px]"
                    />
                    <div>
                        <h1 className="font-bold text-xl mb-1">{item.title}</h1>
                        <p className=" font-light text-gray-400">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ComItems;
