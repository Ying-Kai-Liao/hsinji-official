import React from "react";

const NavLinks = () => {
    const links = [{ name: '臨床案例'}, {name: '主治門診'}, {name: '信基專欄'}, {name: '診所資訊'}]
    return (
        <>
            {links.map((link, index) => (
                <div key={index}>
                    <div className="py-7 px-3 text-md">
                        <h1>{link.name}</h1>
                    </div>
                </div>
            ))}
        </>
    )
}

export default NavLinks