import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/layout/Navbar";
import Content from "@/Components/layout/Content";
import Footer from "@/Components/layout/Footer";

export default function Main(props) {
    // console.log(props);
    return (
        <div className="max-w-full mx-auto">
            <Head
                title="
	Qwords.com: Cloud Web Hosting Indonesia Akses Cepat Aman"
            />
            <Navbar user={props.auth.user} />
            <Content />
            <Footer />
        </div>
    );
}
