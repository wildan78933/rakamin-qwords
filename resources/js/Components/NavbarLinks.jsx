import React from "react";

const NavbarLinks = ({ items, className, style }) => (
    <ul className={`p-2 ${className}`} style={style}>
        {items.map((item, index) => (
            <li key={index}>
                <a href={item.href} className="flex items-center gap-2">
                    <img className="w-12" src={item.icon} alt={item.title} />
                    <div>
                        <p className="font-semibold min-w-full">{item.title}</p>
                        <p className="">{item.description}</p>
                    </div>
                </a>
            </li>
        ))}
    </ul>
);

export default NavbarLinks;
