import React from 'react'

export default function Copyright() {
    return (
        <div className="footer-copyright">
            <p className="footer-company">All Rights Reserved. ©{' '}{new Date().getFullYear()} <a href="#">Treelah</a> Designed By: 
                <a href="https://www.bloomhubng.com/"> Bloomhubng</a>
            </p>
        </div>
    )
}
