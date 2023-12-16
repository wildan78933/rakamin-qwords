import React from "react";
import Hero from "../homepage/Hero";
import Card from "../homepage/Card";
import Services from "../homepage/Services";

const Content = () => {
    return (
        <div className="max-w-screen flex flex-col gap-24 pb-24">
            <Hero />
            <Card />
            <Services />
        </div>
    );
};

export default Content;
