import React from "react";
import Hero from "../homepage/Hero";
import Card from "../homepage/Card";
import Services from "../homepage/Services";
import Solution from "../homepage/Solution";
import { Link, Head } from "@inertiajs/react";

const Content = (props) => {
    return (
        <div className="max-w-screen flex flex-col gap-24 pb-24">
            <Hero />
            <Card />
            <Services />
            <Solution />
        </div>
    );
};

export default Content;
