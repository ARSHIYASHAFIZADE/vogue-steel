import React from 'react';
import Header from './Header'; // Ensure Header is imported if used, though usually in App
import './About.css';
import { teamData } from './teamData';
import { FaProjectDiagram, FaBuilding, FaUsers } from "react-icons/fa";
import { FaLandmark } from "react-icons/fa6";

const MemberStats = ({ stats }) => {
    const { exp = 10, clients = 50, projects = 20, landmark = 5 } = stats || {};
    return (
        <div className="member-stats-row">
            <div className="m-stat-item">
                <div className="m-stat-icon"><FaUsers /></div>
                <div className="m-stat-value">{exp}<span className="m-stat-suffix">+</span></div>
                <p className="m-stat-label">Years Exp.</p>
            </div>
            <div className="m-stat-item">
                <div className="m-stat-icon"><FaBuilding /></div>
                <div className="m-stat-value">{clients}<span className="m-stat-suffix">+</span></div>
                <p className="m-stat-label">Clients</p>
            </div>
            <div className="m-stat-item">
                <div className="m-stat-icon"><FaProjectDiagram /></div>
                <div className="m-stat-value">{projects}<span className="m-stat-suffix">+</span></div>
                <p className="m-stat-label">Projects</p>
            </div>
            <div className="m-stat-item">
                <div className="m-stat-icon"><FaLandmark /></div>
                <div className="m-stat-value">{landmark}<span className="m-stat-suffix">+</span></div>
                <p className="m-stat-label">Landmark</p>
            </div>
        </div>
    );
};

export default function About() {
    return (
        <div className="about-page">
            {/* Original Top Section Structure */}
            <main className="about-section">
                <h1 className="page-title animated fade-in">About Us</h1>

                <section className="overview-block animated slide-up">
                    <h2 className="section-title">Overview</h2>
                    <p className="overview-text">
                        Vogue Steel was established in 1992 with the core focus of being one of the leading engineering and structural steel fabrication companies in UAE. With state-of-the art facility, we are equipped with highly advanced plant and machinery to carry out any complex engineering and fabrication work with utmost precision.
                    </p>
                    <p className="overview-text">
                        Vogue Steel Factory is a professionally managed company with ISO 9001 and OSHAS 18001 certification. Based out of Sharjah Industrial Area 15, we are strategically located to cater to any market across the Emirates or GCC.
                    </p>
                    <p className="overview-text">
                        We have delightfully designed and fabricated some of the most prestigious projects in Architectural and Industrial sectors across UAE. From Al Dar HQ to Burj Khalifa, Adnec to Shaikh Zayed Mosque, we have some of the most iconic landmarks to our repute.
                    </p>
                    <p className="overview-text">
                        Our pragmatic growth is an attribute to our able leadership, technological advancement and our team energy. At VOGUE, every member understands and complies with the organization’s initiatives and underlined objectives of becoming the partner of choice for all our discerning clientele irrespective of their magnitude.
                    </p>
                </section>

                <div className="divider" />

                <h2 className="team-title animated fade-in">Meet Our Team</h2>
            </main>

            {/* New Full Screen Team Sections outside the constrained container */}
            <div className="team-full-sections">
                {teamData.map((member, index) => (
                    <section key={member.id} className="member-full-screen">
                        <div className="member-content-split">
                            {/* Image Side: Alternates Order */}
                            <div className={`member-image-side ${index % 2 === 1 ? 'order-right' : ''}`}>
                                <img src={member.image} alt={member.name} />
                            </div>

                            {/* Content Side */}
                            <div className="member-info-side">
                                <div className="member-info-inner">
                                    <div className="member-badge">
                                        <h2 className="member-name">{member.name}</h2>
                                        <span className="member-sep">|</span>
                                        <span className="member-role">{member.role}</span>
                                    </div>

                                    <MemberStats stats={member.stats} />

                                    <div className="member-bio">
                                        <h3>Vision & Role</h3>
                                        <p>
                                            Dedicated to driving excellence and innovation. Responsible for leading strategic initiatives and ensuring the highest standards of quality and performance across all projects. A key pillar in Vogue Steel's journey towards engineering perfection.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}