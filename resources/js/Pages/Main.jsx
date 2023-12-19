import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/layout/Navbar";
import Content from "@/Components/layout/Content";

export default function Main(props) {
    // console.log(props);
    return (
        <div className="max-w-screen-xl mx-auto">
            <Head
                title="
	Qwords.com: Cloud Web Hosting Indonesia Akses Cepat Aman"
            />
            <Navbar />
            <Content />
        </div>
    );
}
