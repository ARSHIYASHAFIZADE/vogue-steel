import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './Home.css';
import personImg from '../assets/images/Moiz.png';
import sw from '../assets/images/swork.png';
import hqb from '../assets/images/hqb.png';
import mfc from '../assets/images/mfc.png';
import Card from './Card';
import MyImageGallery from './MyImageGallery';
import StatsSection from './StatsSection';

export default function Home() {
    return (
        <div className="home-container">
            {/* 1. Sticky Gallery Section - Acts as background but takes up flow space */}
            <section className="gallery-section">
                <MyImageGallery />
            </section>

            {/* 2. Scrolling Content Section - Scrolls over the sticky gallery */}
            <div className="content-section">
                <main className="hero-section">

                    {/* Vision Section */}
                    <section className="vision-section">
                        <div className="person-center">
                            <div className="vision-split-layout">
                                <div className="vision-image-col">
                                    <img src={personImg} alt="Moiz Abbas - CEO" />
                                </div>
                                <div className="vision-content-col">
                                    <StatsSection />

                                    <div className="ceo-badge">
                                        <span className="ceo-name">Moiz Abbas</span>
                                        <span className="ceo-sep">|</span>
                                        <span className="ceo-title">CEO Vogue Steel Factory LLC</span>
                                    </div>

                                    <h2 className="vision-heading">VISION & MISSION</h2>
                                    <h3 className="vision-subheading">We aspire to be the most trusted name to every associated individual</h3>
                                    <p className="vision-body">
                                        An amalgamation of many ideas and aspirations, driven by passion and an unparalleled dedication is how Vogue Steel Factory was born. Our aim at building Vogue Steel was to create an entity independent in all aspects of engineering and fabrication. Our able leadership, devoted human capital and technological advancement have made us customer oriented.
                                    </p>
                                    <div className="actions">
                                        <Link to="/about" className="know-more">Know More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Business Section */}
                    <section className="business-section">
                        <h2 className="businesses">Our Businesses</h2>
                        <div className="card-scroll-container">
                            <Card img={sw} description="From Engineering & Design to Fabrication and Material installation, We have contrive astounding projects across UAE. Our some pull off sectors comprised Oil & Gas, Metro, Bridges, Water desalination." title="STRUCTURAL" ctaText="View Project"
                                href="/projects/vogue-steel"
                                badge="Featured"
                                tags={["Industrial", "Turnkey", "UAE"]} alt="Structural Projects" />
                            <Card img={hqb} description="From our first small project in Abu Dhabi in 1996, we have engineered some of the most prestigious marvels in UAE & GCC. From Al-Dar HQ, Abu Dhabi to Burj Khalifa, Dubai." title="ARCHITECTURAL" ctaText="View Project"
                                href="/projects/vogue-steel"
                                badge="Featured"
                                tags={["Industrial", "Turnkey", "UAE"]} alt="Architectural Marvels" />
                            <Card img={mfc} description="As one of the leading metal service centers in UAE, we specialize in a wide array of services by using some of the world’s best and most sophisticated machinery and expert personnel." title="METAL SERVICES" ctaText="View Project"
                                href="/projects/vogue-steel"
                                badge="Featured"
                                tags={["Industrial", "Turnkey", "UAE"]} alt="Metal Services" />
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
}