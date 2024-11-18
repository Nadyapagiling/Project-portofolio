import React from 'react';

const Services = () => {
    return (
        <section className="container my-5">
            <h1>My Services</h1>
            <div className="row">
                <div className="col-md-4">
                    <h2>Web Design</h2>
                    <p>Creating beautiful and functional websites...</p>
                </div>
                <div className="col-md- 4">
                    <h2>Photography</h2>
                    <p>Capturing moments through my lens...</p>
                </div>
                <div className="col-md-4">
                    <h2>3D Art</h2>
                    <p>Bringing ideas to life with 3D modeling...</p>
                </div>
            </div>
        </section>
    );
};

export default Services;