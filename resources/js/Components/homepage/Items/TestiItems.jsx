import {
    faEnvelope,
    faPhone,
    faSquarePhone,
    faWheatAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TestiItems = () => {
    const slides = [
        {
            id: 1,
            url: "https://youtu.be/q2bJogin3eE",
            image: "Frame 45.jpg",
            alt: "Slide 1",
        },
        {
            id: 2,
            url: "https://youtu.be/f15zt4C2e4A",
            image: "Frame 46.jpg",
            alt: "Slide 2",
        },
        {
            id: 3,
            url: "https://youtu.be/ftJMF63RznM",
            image: "Frame 47.jpg",
            alt: "Slide 3",
        },
    ];

    return (
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-x-10">
            <div className="w-80 lg:w-96 carousel rounded-box">
                {slides.map((slide) => (
                    <div key={slide.id} className="carousel-item w-full">
                        <a href={slide.url}>
                            <img
                                src={slide.image}
                                className="w-full"
                                alt={slide.alt}
                            />
                        </a>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-base">Butuh Bantuan ?</h3>
                <p>Kami siap membantu anda 24 jam</p>
                <div className="flex flex-col gap-4 mt-5">
                    <div className="flex flex-row gap-5 items-center px-12 py-6 shadow-[0px_12px_51.8px_0px_rgba(255,110,7,0.15)] rounded-2xl bg-white">
                        <FontAwesomeIcon
                            icon={faPhone}
                            style={{ color: "#ff6e07" }}
                        />
                        <a href="tel:+628041808888" className="">
                            0804-1-808-888
                        </a>
                    </div>

                    <div className="flex flex-row gap-5 items-center px-12 py-6 shadow-[0px_12px_51.8px_0px_rgba(255,110,7,0.15)] rounded-2xl bg-white">
                        <FontAwesomeIcon
                            icon={faPhone}
                            style={{ color: "#ff6e07" }}
                        />
                        <a href="tel:02139708800" className="">
                            021 39708800
                        </a>
                    </div>

                    <div className="flex flex-row gap-5 items-center px-12 py-6 shadow-[0px_12px_51.8px_0px_rgba(255,110,7,0.15)] rounded-2xl bg-white">
                        <FontAwesomeIcon
                            icon={faSquarePhone}
                            style={{ color: "#ff6e07" }}
                        />
                        <a
                            href="https://api.whatsapp.com/send?phone=62817437111"
                            className=""
                        >
                            +6281 7437 111 (Whatsapp Only)
                        </a>
                    </div>

                    <div className="flex flex-row gap-5 items-center px-12 py-6 shadow-[0px_12px_51.8px_0px_rgba(255,110,7,0.15)] rounded-2xl bg-white">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            style={{ color: "#ff6e07" }}
                        />
                        <a href="mailto:info@qwords.com" className="">
                            info@qwords.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestiItems;
