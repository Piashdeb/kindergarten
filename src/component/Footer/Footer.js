import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark py-5">
            <h2 className="text-light">Kinder<span style={{ color: 'yellow' }}>Garten</span>  </h2>
            <div>
                <div className="container text-light">
                    <i className="fab fa-facebook-square py-3"> </i> 
                    <i className="fab fa-instagram  "></i> 
                    <i class="fab fa-linkedin "></i> 
                </div>
                <div className="text-light">
                    <small> Copyrighte <span>&copy;</span> All rights are reserved. This site is made by Piash Deb </small>
                </div>

            </div>
        </div>
    );
};

export default Footer;