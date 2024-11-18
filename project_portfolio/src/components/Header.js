import React from 'react';

const Header = () => {
    return (
        <header className="header-background">
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header-content">
                <img src="https://drive.google.com/file/d/1kI_WNUEKLIMJGCITM7cD4PSlw9AIrtMb/view?usp=drive_link" alt="Profile Photo of Nadya" />
                <h1>Hi, my name is Nadya</h1>
                <p>Web Developer | Designer | Tech Enthusiast</p>
            </div>
        </header>
    );
};

export default Header;