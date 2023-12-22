import React from "react";
import Hero from "../homepage/Hero";
import Card from "../homepage/Card";
import Services from "../homepage/Services";
import Solution from "../homepage/Solution";
import { Link, Head } from "@inertiajs/react";
import Commitment from "../homepage/Commitment";
import LogoCustomer from "../homepage/LogoCustomer";
import LogoPartner from "../homepage/LogoPartner";
import Testimonial from "../homepage/Testimonial";
import LogoNews from "../homepage/LogoNews";
import Accordion from "../homepage/Accordion";

const Content = (props) => {
    return (
        <div className="max-w-screen-xl lg:mx-auto mx-6 flex flex-col gap-24 pb-24">
            <Hero />
            <Card />
            <Services />
            <Solution />
            <Commitment />
            <LogoCustomer />
            <LogoPartner />
            <Testimonial />
            <LogoNews />
            <Accordion />
        </div>
    );
};

export default Content;
