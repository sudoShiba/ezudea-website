import React from "react";

const Footer = () => {
    return (
        <footer className="bg-brand-dark py-8 px-4 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <div className="text-text-secondary text-sm">
                    <p>
                        Made by Roberto Zunica {' '}
                        <a 
                            href="https://robertozunica.dev" 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-text-secondary hover:text-text-link-hover transition-colors font-semibold"
                        >
                            robertozunica.dev
                        </a>
                        {' '} - © 2026 Ezudea
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
