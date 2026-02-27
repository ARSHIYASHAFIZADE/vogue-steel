import React, { useEffect, useRef, useState } from "react";
import "./StatsSection.css";
import { FaProjectDiagram, FaBuilding, FaUsers } from "react-icons/fa";
import { FaLandmark } from "react-icons/fa6";

const AnimatedCounter = ({ target = 0, duration = 1500, play = false }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!play) return;

        let start = 0;
        const frameRate = 30;
        const steps = Math.max(1, Math.ceil(duration / frameRate));
        const increment = target / steps;

        const id = setInterval(() => {
            start += increment;
            if (start >= target) {
                setValue(target);
                clearInterval(id);
            } else {
                setValue(Math.ceil(start));
            }
        }, frameRate);

        return () => clearInterval(id);
    }, [play, target, duration]);

    return <span className="counter-num">{value}</span>;
};

const StatsSection = () => {
    const stats = [
        { icon: <FaUsers />, label: "Years Of Experience", target: 30, suffix: "+" },
        { icon: <FaBuilding />, label: "Major Clients", target: 200, suffix: "+" },
        { icon: <FaProjectDiagram />, label: "Projects Completed", target: 20, suffix: "+" },
        { icon: <FaLandmark />, label: "Landmark Projects", target: 20, suffix: "+" },
    ];
    // NOTE: Updated targets slightly based on user request (30, 200, 20, 20) in prompt, 
    // but previous code had different values. I will stick to what was requested in the prompt:
    // 30+ Years, 200+ Clients, 20+ Projects?, 20+ Landmark?
    // Wait, prompt said:
    // 30+ Years of Experience
    // 200+ Major Clients
    // 20+ Projects Completed (This seems low? Previous code had 200)
    // 20+ Landmark Projects
    // I will use exactly what is in the prompt text visually: "20 + Projects Completed". (Maybe they meant 2000? I'll use 20 as written or stick to previous logic if ambiguous. Previous was 29, 30, 200, 20. I'll use 30, 200, 200, 20 to be safe/logical or just stick to prompt 20 if insisted. Prompt says:
    // 30+ Years
    // 200+ Major Clients
    // 20+ Projects Completed
    // 20+ Landmark Projects
    // I will use these values.)

    const statRefs = useRef([]);
    const [playIndexes, setPlayIndexes] = useState(() => Array(stats.length).fill(false));

    useEffect(() => {
        // Since we want this on "first screen", we can default to playing immediately 
        // OR intersection observer. Observer is safer.
        if (!("IntersectionObserver" in window)) {
            setPlayIndexes(Array(stats.length).fill(true));
            return;
        }

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((ent) => {
                    const idx = Number(ent.target.dataset.index);
                    if (ent.isIntersecting) {
                        setPlayIndexes((s) => {
                            if (s[idx]) return s;
                            const copy = [...s];
                            copy[idx] = true;
                            return copy;
                        });
                        obs.unobserve(ent.target);
                    }
                });
            },
            { threshold: 0.35 }
        );

        statRefs.current.forEach((el) => {
            if (el) obs.observe(el);
        });

        return () => obs.disconnect();
    }, [stats.length]);

    return (
        <div className="stats-section-fixed">
            <div className="stats-container">
                {stats.map((s, idx) => (
                    <div
                        className="stat-item"
                        key={s.label}
                        ref={(el) => (statRefs.current[idx] = el)}
                        data-index={idx}
                    >
                        <div className="stat-icon">{s.icon}</div>
                        <h3 className="stat-value">
                            <AnimatedCounter target={s.target} duration={1200} play={playIndexes[idx]} />
                            <span className="stat-suffix">{s.suffix}</span>
                        </h3>
                        <p className="stat-label">{s.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
