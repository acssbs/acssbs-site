'use client'

import { useEffect } from "react"

export function VLibras() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
        script.async = true;
        script.onload = () => {
            new window.VLibras.Widget('https://vlibras.gov.br/app');
            window.onload();
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [])

    return (
        <div vw="true" className="enabled">
            <div vw-access-button="true" className="active" />
            <div vw-plugin-wrapper="true">
                <div className="vw-plugin-top-wrapper" />
            </div>
        </div>
    )
}