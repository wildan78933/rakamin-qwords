import React, { useEffect } from "react";

const Footer = () => {
    return (
        <footer className="bg-white  dark:bg-gray-900  text-white px-6 lg:px-24 py-20">
            <div className="lg:footer">
                <div className="grid gap-8">
                    <img
                        src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/logo-dark.webp"
                        alt=""
                        className="w-1/3"
                    />
                    <h2 className="text-xl font-semibold">
                        PT Qwords Company International
                    </h2>
                    <p className="">
                        Cloud Web Hosting Indonesia. Domain & hosting terbaik
                        dengan akses cepat yang didukung layanan support 24/7
                    </p>
                    <img
                        src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/bsi.webp"
                        alt=""
                        className="w-1/3"
                    />
                    <div className="grid gap-3 pb-8">
                        <h2 className="text-xl font-semibold">Customer Care</h2>
                        <ul className="grid gap-2">
                            <li>Pembayaran</li>
                            <li>Faktur Pajak</li>
                            <li>Bantuan 24 jam</li>
                            <li>Qwords Rewards</li>
                            <li>Knowledge Base</li>
                            <li>Blog</li>
                            <li>FAQ</li>
                            <li>Kontak</li>
                        </ul>
                    </div>
                </div>

                <div className="grid gap-8">
                    <div className="grid gap-3">
                        <h2 className="text-xl font-semibold">Mengenai Kami</h2>
                        <ul className="grid gap-2">
                            <li>Corporate Website</li>
                            <li>Qwords History</li>
                            <li>Qwords Differences</li>
                            <li>Media Publication</li>
                            <li>Network & Infrastructure</li>
                            <li>Partner</li>
                            <li>Career & Employment</li>
                        </ul>
                    </div>
                    <div className="grid gap-3">
                        <h2 className="text-xl font-semibold">MSA/SLA/AUP</h2>
                        <ul className="grid gap-2">
                            <li> Master Service Agreement</li>
                            <li>Refund Policy</li>
                            <li>Privacy Policy</li>
                            <li>Product Life Cycle Policy</li>
                            <li>Penggunaan Merek dan Logo</li>
                            <li>Migrasi Ke Qwords</li>
                        </ul>
                    </div>
                </div>
                <div className="grid gap-8">
                    <div className="grid gap-3">
                        <h2 className="text-xl font-semibold">
                            Layanan Lainnya
                        </h2>
                        <ul className="grid gap-2">
                            <li> Extended Support</li>
                            <li>Manage The Box Server</li>
                            <li>Flexi Main Domain</li>
                            <li>FTP Backup</li>
                            <li>Offline Backup</li>
                            <li>Hosting Insurance</li>
                            <li>Software License</li>
                            <li>Digital Signature</li>
                        </ul>
                    </div>
                    <div className="grid gap-3">
                        <h2 className="text-xl font-semibold">
                            Layanan Reseler
                        </h2>
                        <ul className="grid gap-2">
                            <li>Afiliasi</li>
                            <li>Qwords VIP Partner</li>
                            <li>Private Label Hosting Reseller</li>
                            <li>Private Label Domain Reseller</li>
                        </ul>
                    </div>
                    <div className="grid gap-3 pb-8">
                        <h2 className="text-xl font-semibold">Free Tools</h2>
                        <ul className="grid gap-2">
                            <li> Qwords Link-Q</li>
                            <li>WhatsApp Link Generator</li>
                            <li>Network Tools</li>
                        </ul>
                    </div>
                </div>
                <div className="grid gap-8">
                    <div className="grid gap-3">
                        <h2 className="text-xl font-semibold">
                            Kantor Surabaya
                        </h2>
                        <p className="">
                            Gedung Bursa Efek Indonesia Lt.10, Jl. Taman AIS
                            Nasution No.21, Surabaya 60271 - Indonesia 031
                            30008800
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">
                            Kantor Yogyakarta
                        </h2>
                        <p className="">
                            Jl. Blotan no. 18 Kayen Wedomartani, Ngemplak,
                            Sleman, Yogyakarta 55584 - Indonesia 0274 6058800
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">
                            Kantor Jakarta
                        </h2>
                        <p className="">
                            Gedung Cyber 1 Lantai 3, Jl.Kuningan Barat no.8,
                            Jakarta 12710 - Indonesia 021 39708800
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">
                            Kantor Bandung
                        </h2>
                        <p className="">
                            Jl. Terusan Setra Indah I No.19, Sukagalih,
                            Sukajadi, Bandung 40163 - Indonesia 022 30508800
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <h2>Terdaftar di PSE, ICANN dan Partner Lainnya</h2>
                <span className="flex flex-row gap-3 items-center">
                    <div>
                        <a href="https://pse.kominfo.go.id/tdpse-detail/1447">
                            <img
                                src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/code.webp"
                                alt=""
                            />
                        </a>
                    </div>

                    <div>
                        <img
                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/icann-logo.webp"
                            alt=""
                            id="2"
                            className="w-fit"
                        />
                    </div>

                    <div>
                        <img
                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/badge_litespeed.svg"
                            alt=""
                            className="w-[100px]"
                            id="3"
                        />
                    </div>

                    <div>
                        <img
                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/badge_whmadmin.svg"
                            alt=""
                            id="4"
                            className="w-[100px]"
                        />
                    </div>

                    <div>
                        <img
                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/acronis-cloud-tech.webp"
                            alt=""
                            id="5"
                        />
                    </div>

                    <div>
                        <img
                            src="https://qwords.com/v2/wp-content/themes/qwords/assets/images/icons/acronis-cloud-sales.webp"
                            alt=""
                            id="6"
                        />
                    </div>
                </span>
            </div>
        </footer>
    );
};
export default Footer;
