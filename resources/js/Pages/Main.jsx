import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/layout/Navbar";
import Hero from "@/Components/homepage/Hero";
import Content from "@/Components/layout/Content";

export default function Main(props) {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar />
            <Content />
        </div>
    );
}
