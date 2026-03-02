import React from 'react'
import Image from 'next/image'
import "./header.css"

export const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <Image src="/logo.png" alt="MoreType logo" width={70} height={40} priority />
                <a href="mailto:info@moretype.co.uk">info@moretype.co.uk</a>
            </div>
            <div>
                <h2 className="header-text">New Website, New Fonts coming soon</h2>
            </div>
        </div>
    )
}
