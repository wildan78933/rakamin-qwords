import React from "react";
import AccordionItems from "./Items/AccordionItems";

const Accordion = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-10 lg:px-24">
            <h1 className="text-3xl lg:text-4xl md:text-4xl font-semibold text-[#242328] text-center">
                Pertanyaan seputar{" "}
                <span className="text-[#FF6E07]">Layanan Web Hosting</span>{" "}
                Qwords
            </h1>
            <AccordionItems />
        </div>
    );
};

export default Accordion;
