import React from "react";
import { Link, Head } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";
import NavbarLinks from "../NavbarLinks";

export default function Navbar({ user }) {
    // console.log("isUser?", user);

    const cloudHostingLink = [
        {
            href: "https://www.qwords.com/hosting-murah",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/cloud%20hosting/Value%20Cloud%20Hsting.webp",
            title: "Cloud Hosting Lite",
            description: "Berbasis DirectAdmin dengan penyimpanan lega",
        },
        {
            href: "https://www.qwords.com/web-hosting",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/cloud%20hosting/High%20Performance%20Bisnis.webp",
            title: "Cloud Hosting Pro",
            description:
                "Berbasis cPanel, cocok untuk perusahaan, e-commerce, & startup",
        },
        {
            href: "https://www.qwords.com/cloud-hosting",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/cloud%20hosting/High%20Peformance%20Enterprise.webp",
            title: "Cloud Hosting Enterprise",
            description: "Hosting performa tinggi dengan dedicated resource",
        },
        {
            href: "https://www.qwords.com/wordpress-hosting",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/cloud%20hosting/Wordpress%20Hosting.webp",
            title: "Cloud Hosting WP",
            description:
                "Hosting untuk WordPress performa cepat & gratis Elementor Pro",
        },
        {
            href: "https://www.qwords.com/unlimited-hosting",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/cloud%20hosting/Unlimited%20Hosting.webp",
            title: "Unlimited Hosting",
            description:
                "Hosting dengan Unlimited resource yang dapat diandalkan",
        },

        {
            href: "https://www.qwords.com/private-label-hosting-reseller",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/cloud%20hosting/Private%20Label%20cPanel%20Reseller.webp",
            title: "Private Label cPanel Reseller",
            description: "Bergabung dan mulai Bisnis Sukses bersama Qwords",
        },
        {
            href: "https://www.qwords.com/container-hosting",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/cloud%20hosting/Wordpress%20Hosting.webp",
            title: "Flex WP",
            description:
                "WordPress Hosting super murah, bebas add-on CPU & RAM",
        },
    ];

    const serverLink = [
        {
            href: "https://www.qwords.com/vps-indonesia/cloud-vps-kvm-ssd",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/server/Cloud%20VPS%20KVM%20SSD.webp",
            title: "Cloud VPS KVM SSD",
            description: "KVM Ultrafast dengan Easy Install & OS terbaru",
        },
        {
            href: "https://www.qwords.com/dedicated-server/server-sekolah",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/server/Server%20Sekolah.webp",
            title: "Server sekolah CBT/Moodle",
            description: "Untuk kebutuhan e-learning, ujian sekolah, dsb",
        },
        {
            href: "https://www.qwords.com/dedicated-server/dedicated-box",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/server/Dedicated%20Server.webp",
            title: "Dedicated Server",
            description:
                "Multiple Internet Connection up to 10Gbps, Monitoring 24/7",
        },
        {
            href: "https://www.qwords.com/dedicated-server/colocation-server",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/server/Colocation%20Server.webp",
            title: "Colocation Server",
            description:
                "99% Uptime Server, UPS Backup, On-Site & OffSite Monitoring",
        },
        {
            href: "https://www.qwords.com/dedicated-server/leased-to-owned-dedicated-server",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/server/Leased%20To%20Owned.webp",
            title: "Leased To Owned Server",
            description: "Sekarang sewa, Nanti jadi hak milik Anda!",
        },
        {
            href: "https://fleksibel.com/",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/server/Fleksibel%20VPS.webp",
            title: "Fleksibel VPS",
            description: "KVM Pay as you Growth! Mulai Rp 200/jam",
        },
    ];

    const domainLink = [
        {
            href: "https://www.qwords.com/domain-name",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Daftar%20Domain.webp",
            title: "Daftar/Transfer Domain",
            description: "Domain terbaik untuk identitas website Anda",
        },
        {
            href: "https://www.qwords.com/domain-premium-id",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Domain%20Premium.webp",
            title: "Domain Premium .id",
            description: "Domain premium berkualitas untuk website Anda",
        },
        {
            href: "https://www.qwords.com/domain-backorder",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Domain%20Backorder.webp",
            title: "Domain Backorder",
            description:
                "Dapatkan Domain berkualitas yang tidak diperbarui pemiliknya",
        },
        {
            href: "https://www.qwords.com/domain-privacy-protection",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Domain%20Privacy.webp",
            title: "Domain Privacy Protection",
            description: "Lindungi data pribadi & rahasia Anda dari publik",
        },
        {
            href: "https://www.qwords.com/sewa-domain-domain-lease",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Sewa%20Domain.webp",
            title: "Sewa Domain",
            description: "Dapatkan Domain Premium tanpa bayar biaya penuh",
        },
        {
            href: "https://www.qwords.com/jual-beli-lelang-domain",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Jual-beli%20Domain.webp",
            title: "Jual Beli & Lelang Domain",
            description:
                "Untung berlipat dari Domain cantik dengan sistem lelang",
        },
        {
            href: "https://www.qwords.com/domain-broker-domain-negotiator",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Domain%20Negotiator.webp",
            title: "Domain Negotiator/Broker",
            description:
                "Broker negosiasikan harga terbaik untuk Domain impian Anda",
        },
        {
            href: "https://www.qwords.com/private-label-domain-reseller",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/domain/Private%20Label%20Domain.webp",
            title: "Private Label Domain Reseller",
            description: "Paket Reseller Domain dengan harga yang bersaing",
        },
    ];

    const emailLink = [
        {
            href: "https://www.qwords.com/titan-email",
            icon: "https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/menu/email%20suite/titanemail-icon.webp",
            title: "Titan Email",
            description:
                "Bisnis tampil profesional dengan email domain khusus dari Titan.",
        },
        {
            href: "https://www.qwords.com/eccs",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/email%20suite/EC%20Suite.webp",
            title: "EC Collaboration Suite",
            description:
                "Email premium dengan Kapasitas 25GB hingga 1000 akun.",
        },
        {
            href: "https://www.qwords.com/microsoft365",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/email%20suite/office365.webp",
            title: "Microsoft 365",
            description:
                "Untuk meningkatkan produktivitas kerja perusahaan Anda.",
        },
        {
            href: "https://www.qwords.com/google-workspace",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/email%20suite/google-workspace.webp",
            title: "Google Workspace",
            description: "Layanan Premium dari Google dengan Nama Domain Anda.",
        },
        {
            href: "https://www.qwords.com/mailtogo",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/email%20suite/Mailtogo.webp",
            title: "Mailtogo",
            description:
                "Marketing online lebih mudah dijalankan melalui MailToGo.",
        },
    ];

    const servicesLink = [
        {
            href: "https://www.qwords.com/secured-sockets-layer-certificate",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/SSL.webp",
            title: "SSL",
            description: "Amankan komunikasi data anda",
        },
        {
            href: "https://www.qwords.com/jasa-backlink-murah",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/Link-Q.webp",
            title: "Jual/Beli Backlink",
            description: "Jasa jual/beli backlink aman & berkualitas",
        },

        {
            href: "https://www.qwords.com/services/extended-support",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/Extend%20Support.webp",
            title: "Extended Support",
            description: "Bantuan ekstra untuk akun Hosting Cpanel",
        },
        {
            href: "https://www.qwords.com/manage-the-box-dedicated-colocation-server",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/Box%20Server.webp",
            title: "Manage The Box Server",
            description: "Manage Service untuk mengatur Server Anda",
        },
        {
            href: "https://www.qwords.com/services/offline-backup",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/Offline%20Backup.webp",
            title: "Offline Backup",
            description: "Backup offline dari server anda",
        },
        {
            href: "https://www.qwords.com/advanced-backup",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/Advance%20Backup.webp",
            title: "Advanced Backup",
            description: "Advanced Backup berbasis Acronis",
        },
        {
            href: "https://www.qwords.com/services/hosting-insurance",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/Hosting%20Insurance.webp",
            title: "Hosting Insurance",
            description: "Asuransi downtime untuk Hosting",
        },
        {
            href: "https://www.qwords.com/licenses",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/License.webp",
            title: "Licenses",
            description: "Lisensi software bagi bisnis anda",
        },

        {
            href: "https://www.qwords.com/diego-vpn",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/VPN.webp",
            title: "Diego VPN",
            description:
                "Private Network yang aman, super cepat, dan easy to use",
        },
        {
            href: "https://www.qwords.com/services/digital-signature",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/services/Digital%20Signature.webp",
            title: "Digital Signature",
            description: "Tandatangani dokumen online dengan mudah",
        },
    ];
    const internetAccessLink = [
        {
            href: "https://www.qwords.com/internet-rumah",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/internet%20access/Broadband%20Home.webp",
            title: "Broadband Home",
            description:
                "Internet untuk kebutuhan rumah/personal dengan koneksi stabil tanpa buffering hingga 1Gbps. Kuota Unlimited",
        },
        {
            href: "https://www.qwords.com/internet-bisnis",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/internet%20access/Broadband%20Business.webp",
            title: "Broadband Bisnis",
            description:
                "Jalankan bisnis bisa lebih fokus dengan jaringan internet cepat, koneksi stabil, dan aman",
        },
        {
            href: "https://www.qwords.com/internet-wireless",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/internet%20access/Broadband%20Wireless.webp",
            title: "Broadband Wireless",
            description:
                "Internet dengan teknologi wireless super cepat, bebas FUP untuk kebutuhan rumah & bisnis.",
        },
        {
            href: "https://www.qwords.com/check-coverage",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/internet%20access/Check%20Coverage.webp",
            title: "Check Coverage",
            description:
                "Mau pasang internet? Cek jangkauan internet Broadband Qwords di area rumah Anda.",
        },
    ];

    const customerCareLink = [
        {
            href: "https://www.qwords.com/order-payment",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/customer-care/Pembayaran.webp",
            title: "Pembayaran",
            description:
                "Informasi lengkap seputar cara bayar, konfirmasi bayar dan faktur pajak",
        },
        {
            href: "https://portal.qwords.com/submitticket.php?_gl=1*1qceb6d*_gcl_au*MTg0ODI5NjU2OC4xNzAyMzY1OTE0&_ga=2.41852450.1256574609.1702459381-633503086.1702365914",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/customer-care/Bantuan.webp",
            title: "Bantuan 24 Jam",
            description:
                "Tim Support kami akan membantu menyelesaikan masalah secara solutif & respon cepat, 24/7 ",
        },
        {
            href: "https://kb.qwords.com/?_gl=1*93tc40*_gcl_au*MTg0ODI5NjU2OC4xNzAyMzY1OTE0&_ga=2.40222242.1256574609.1702459381-633503086.1702365914",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/customer-care/Knowledge%20Base.webp",
            title: "Knwoledge Base",
            description:
                "Panduan yang lengkap informasi mengenai Hosting, website, dll",
        },
        {
            href: "https://www.qwords.com/faq",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/customer-care/FAQ%202.webp",
            title: "FAQ",
            description:
                "Temukan jawaban dari pertanyaan yang paling sering diajukan di sini",
        },

        {
            href: "https://www.qwords.com/blog",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/customer-care/Blog.webp",
            title: "Blog",
            description:
                "Temukan tips & artikel menarik seputar Hosting, Domain, website, dan internet di sini",
        },

        {
            href: "https://www.qwords.com/about-qwordscom/contact-qwordscom/",
            icon: "https://qwords.com/wp-content/themes/qwords/assets/images/icons/menu/customer-care/Kontak.webp",
            title: "Kontak",
            description:
                "Butuh informasi lebih lanjut? Kunjungi outlet kami atau hubungi melalui call center, live chat, dan media sosial",
        },
    ];

    return (
        <div className="navbar bg-base-100 mt-2 mb-10 lg:px-16 sticky top-0 z-50 shadow-md py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-screen lg:w-auto mx-auto shadow-md"
                    >
                        <li>
                            <details>
                                <summary className="md:w-auto w-auto p-4">
                                    Cloud Hosting
                                </summary>
                                <NavbarLinks
                                    items={cloudHostingLink}
                                    className="bg-base-100 border rounded-3xl p-2 grid grid-cols-1"
                                    style={{
                                        width: "auto",
                                        height: "24rem",
                                        overflowY: "auto",
                                    }}
                                />
                            </details>
                        </li>

                        <li>
                            <details>
                                <summary className="md:w-auto w-auto p-4">
                                    Server
                                </summary>
                                <NavbarLinks
                                    items={serverLink}
                                    className="bg-base-100 border rounded-3xl p-2 grid grid-cols-1"
                                    style={{
                                        width: "auto",
                                        height: "24rem",
                                        overflowY: "auto",
                                    }}
                                />
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="md:w-auto w-auto p-4 ">
                                    Domain
                                </summary>
                                <NavbarLinks
                                    items={domainLink}
                                    className="bg-base-100 border rounded-3xl p-2 grid grid-cols-1"
                                    style={{
                                        width: "auto",
                                        height: "24rem",
                                        overflowY: "auto",
                                    }}
                                />
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="md:w-auto w-auto p-4 ">
                                    Email Suite
                                </summary>
                                <NavbarLinks
                                    items={emailLink}
                                    className="bg-base-100 border rounded-3xl p-2 grid grid-cols-1"
                                    style={{
                                        width: "auto",
                                        height: "24rem",
                                        overflowY: "auto",
                                    }}
                                />
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="md:w-auto w-auto p-4 ">
                                    Services
                                </summary>
                                <NavbarLinks
                                    items={servicesLink}
                                    className="bg-base-100 border rounded-3xl p-2 grid grid-cols-1"
                                    style={{
                                        width: "auto",
                                        height: "24rem",
                                        overflowY: "auto",
                                    }}
                                />
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="md:w-auto w-auto p-4 ">
                                    Internet Access
                                </summary>
                                <NavbarLinks
                                    items={internetAccessLink}
                                    className="bg-base-100 border rounded-3xl p-2 grid grid-cols-1"
                                    style={{
                                        width: "auto",
                                        height: "24rem",
                                        overflowY: "auto",
                                    }}
                                />
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="md:w-auto w-auto p-4 ">
                                    Customer Care
                                </summary>
                                <NavbarLinks
                                    items={customerCareLink}
                                    className="bg-base-100 border rounded-3xl p-2 grid grid-cols-1"
                                    style={{
                                        width: "auto",
                                        height: "24rem",
                                        overflowY: "auto",
                                    }}
                                />
                            </details>
                        </li>
                    </ul>
                </div>
                <img
                    src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/logo-qw-light.webp"
                    alt="logoqwords.jpg"
                />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary className="md:w-auto sm:w-auto text-sm">
                                Cloud Hosting
                            </summary>
                            <NavbarLinks
                                items={cloudHostingLink}
                                className="bg-base-100   grid grid-cols-2 z-50"
                                style={{ width: "50rem" }}
                            />
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className="md:w-auto sm:w-auto text-sm">
                                Server
                            </summary>
                            <NavbarLinks
                                items={serverLink}
                                className="bg-base-100   grid grid-cols-2 z-50"
                                style={{ width: "50rem" }}
                            />
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className="md:w-auto sm:w-auto text-sm">
                                Domain
                            </summary>
                            <NavbarLinks
                                items={domainLink}
                                className="bg-base-100   grid grid-cols-2 z-50"
                                style={{ width: "50rem", left: "-300px" }}
                            />
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className="md:w-auto sm:w-auto text-sm">
                                Email Suite
                            </summary>
                            <NavbarLinks
                                items={emailLink}
                                className="bg-base-100   grid grid-cols-2 z-50"
                                style={{ width: "50rem", left: "-500px" }}
                            />
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className="md:w-auto sm:w-auto text-sm">
                                Services
                            </summary>
                            <NavbarLinks
                                items={servicesLink}
                                className="bg-base-100   grid grid-cols-2 z-50"
                                style={{ width: "50rem", left: "-500px" }}
                            />
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className="md:w-auto sm:w-auto text-sm">
                                Internet Access
                            </summary>
                            <NavbarLinks
                                items={internetAccessLink}
                                className="bg-base-100 grid grid-cols-2 z-50"
                                style={{ width: "50rem", left: "-500px" }}
                            />
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className="md:w-auto sm:w-auto text-sm">
                                Customer Care
                            </summary>
                            <NavbarLinks
                                items={customerCareLink}
                                className="bg-base-100 grid grid-cols-2 z-50"
                                style={{ width: "50rem", left: "-500px" }}
                            />
                        </details>
                    </li>
                    <li>
                        <a href="https://www.qwords.com/promotion">🎁 Promo</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        {!user ? (
                            <>
                                <li>
                                    <Link href={route("login")} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("register")} as="button">
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>Settings</Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
