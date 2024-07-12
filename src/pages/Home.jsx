// src/Home.js

import React from 'react';

import typingImage from './typing.png'; // Import your typing image
import typing3Image from './typing3.png'; // Import your typing3 image


const Home = () => {
    return (
        <div className="home">
            <header className="bg-gray-800 text-white py-4">
                <h1 className="text-3xl text-center">Welcome to Typing Speed Test</h1>
            </header>
            <main className="max-w-6xl mx-auto px-4 py-8">
                <section className="intro text-center mb-8">
                    <img src={typing.png} alt="Typing Test Image" className="max-w-full mb-4" />
                    <p className="text-lg">Improve your typing speed and accuracy with our typing test. Track your progress and challenge yourself!</p>
                </section>
                <section className="features flex justify-around mb-8">
                    <div className="feature text-center p-4 bg-white rounded-lg shadow-md w-1/3">
                        <img src={typing3Image} alt="Feature 1" className="max-w-full mb-4 rounded-lg" />
                        <h2 className="text-xl mb-2">Track Progress</h2>
                        <p>Monitor your typing speed and accuracy over time.</p>
                    </div>
                    <div className="feature text-center p-4 bg-white rounded-lg shadow-md w-1/3">
                        <img src={typingImage} alt="Feature 2" className="max-w-full mb-4 rounded-lg" />
                        <h2 className="text-xl mb-2">Multiple Languages</h2>
                        <p>Test your typing skills in various languages.</p>
                    </div>
                    <div className="feature text-center p-4 bg-white rounded-lg shadow-md w-1/3">
                        <img src={typing3Image} alt="Feature 3" className="max-w-full mb-4 rounded-lg" />
                        <h2 className="text-xl mb-2">Fun Challenges</h2>
                        <p>Engage in fun and interactive typing challenges.</p>
                    </div>
                </section>
                <section className="cta text-center">
                    <h2 className="text-2xl mb-4">Get Started Now!</h2>
                    <a href="/test" className="bg-green-500 text-white py-2 px-4 rounded-lg inline-block hover:bg-green-600 transition duration-300">Start Typing Test</a>
                </section>
            </main>
            <footer className="bg-gray-800 text-white py-4 text-center fixed bottom-0 w-full">
                <p>&copy; 2024 Typing Speed Test. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
