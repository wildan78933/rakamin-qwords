import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const AccordionItems = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: "Apa itu web hosting?",
            subcontent:
                "Penjelasan lebih lanjut dapat Anda baca pada artikel ini : https://qwords.com/blog/apa-itu-hosting/",
            content:
                "Hosting adalah tempat penyimpanan file dan data website seperti teks, video dan gambar website. File dan data tersebut di simpan di dalam server yang terkoneksi dengan internet sehingga data tersebut dapat diakses oleh siapa saja, kapan saja dan di mana saja ",
        },
        {
            title: "Ada berapa jenis hosting di Qwords?",
            content: "Content for Accordion 2",
        },
        {
            title: "Apa kelebihan dari cloud hosting Qwords?",
            content: "Content for Accordion 3",
        },
        {
            title: "Mengapa saya perlu web hosting?",
            content: "Content for Accordion 3",
        },
        {
            title: "Bagaimana cara membeli hosting?",
            content: "Content for Accordion 3",
        },
        {
            title: "Apakah saya bisa transfer Hosting ke Qwords Cloud Web Hosting Indonesia?",
            content: "Content for Accordion 3",
        },
    ];

    return (
        <div className="w-full space-y-2 ">
            {accordionData.map((item, index) => (
                <div key={index} className="border rounded-2xl">
                    <div
                        className="flex items-center justify-between px-8 py-6 cursor-pointer"
                        onClick={() => handleAccordion(index)}
                    >
                        <h3>{item.title}</h3>

                        <FontAwesomeIcon
                            icon={faAngleDown}
                            className={`transform transition-transform ${
                                activeIndex === index ? "rotate-180" : ""
                            }`}
                        />
                    </div>
                    {activeIndex === index && (
                        <div className="p-4 bg-white">
                            <p>{item.content}</p>
                            {item.subcontent && (
                                <p className="mt-4 text-blue-500">
                                    <a
                                        href={item.subcontent}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Penjelasan lebih lanjut di sini
                                    </a>
                                </p>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AccordionItems;
