// src/About.js

import React from 'react';

const About = () => {
    return (
        <div className="about">
            <header className="bg-gray-800 text-white py-4">
                <h1 className="text-3xl text-center">About Us</h1>
            </header>
            <main className="max-w-6xl mx-auto px-4 py-8">
                <section className="mission mb-8">
                    <h2 className="text-2xl mb-4">Our Mission</h2>
                    <p className="text-lg">To empower individuals to improve their typing speed and accuracy through interactive typing tests. We aim to provide tools and resources that enable users to track their progress and enhance their typing skills efficiently.</p>
                </section>
                <section className="vision mb-8">
                    <h2 className="text-2xl mb-4">Our Vision</h2>
                    <p className="text-lg">To create a platform that promotes typing proficiency worldwide by offering engaging typing challenges, diverse language options, and personalized learning paths. We envision becoming a leading resource for individuals and organizations seeking to enhance productivity through improved typing skills.</p>
                </section>
                <section className="features mb-8">
                    <h2 className="text-2xl mb-4">Key Features</h2>
                    <ul className="list-disc list-inside text-lg">
                        <li>Interactive typing tests with real-time feedback.</li>
                        <li>Progress tracking and performance analytics.</li>
                        <li>Support for multiple languages to cater to global users.</li>
                        <li>Fun and challenging typing exercises and games.</li>
                        <li>Personalized learning recommendations based on performance.</li>
                        <li>Integration with social media for sharing achievements.</li>
                    </ul>
                </section>
                <section className="benefits mb-8">
                    <h2 className="text-2xl mb-4">Benefits</h2>
                    <ul className="list-disc list-inside text-lg">
                        <li>Improve typing speed and accuracy efficiently.</li>
                        <li>Boost productivity in work and daily tasks.</li>
                        <li>Enhance computer literacy and digital skills.</li>
                        <li>Prepare for typing tests and certifications.</li>
                        <li>Engage in competitive challenges and compare performance.</li>
                    </ul>
                </section>
            </main>
            <footer className="bg-gray-800 text-white py-4 text-center fixed bottom-0 w-full">
                <p>&copy; 2024 Typing Speed Test. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default About;
