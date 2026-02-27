import React, { useEffect, useState, useRef, useCallback } from "react";
import "./MyImageGallery.css";

import sz1 from "../assets/images/adh1.png";
import sz2 from "../assets/images/adnec.png";
import sz3 from "../assets/images/eaf.png";

const useKeyNavigation = ({ onNext, onPrev, onClose }) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onNext, onPrev, onClose]);
};

const MyImageGallery = () => {
  const images = [
    { src: sz1, title: "Industrial Excellence", desc: "Precision engineering and turnkey fabrication across UAE." },
    { src: sz2, title: "Landmark Projects", desc: "Delivering major infrastructure & architectural projects." },
    { src: sz3, title: "Trusted Partner", desc: "Material supply and metal services with fast turnaround." },
  ];

  const AUTO_MS = 3000; // 3s autoplay as requested
  const FADE_MS = 450;  // crossfade duration

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopup, setIsPopup] = useState(false);
  const [hovering, setHovering] = useState(false);

  // cross-fade control: visible toggles for transitions
  const [visible, setVisible] = useState(true);
  const transitionTimer = useRef(null);
  const autoplayTimer = useRef(null);

  // Guard against rapid firing ensuring transitions complete
  const isTransitioning = useRef(false);

  const prevImage = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    setVisible(false);
    transitionTimer.current = setTimeout(() => {
      setCurrentIndex((p) => (p - 1 + images.length) % images.length);
      setVisible(true);
      isTransitioning.current = false;
    }, FADE_MS);
  }, [images.length]);

  const nextImage = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    setVisible(false);
    transitionTimer.current = setTimeout(() => {
      setCurrentIndex((p) => (p + 1) % images.length);
      setVisible(true);
      isTransitioning.current = false;
    }, FADE_MS);

    // Safety timeout cleanup not needed as we block entry, but standard cleanup in useEffect handles unmount
  }, [images.length]);

  // autoplay (always when preview, insensitive to hover)
  useEffect(() => {
    if (isPopup) return;

    // Clear any existing interval
    clearInterval(autoplayTimer.current);

    // Start new interval
    autoplayTimer.current = setInterval(() => {
      // We can call nextImage directly, the guard will handle overlaps
      nextImage();
    }, AUTO_MS);

    return () => clearInterval(autoplayTimer.current);
  }, [isPopup, nextImage, AUTO_MS]);

  // popup open/close - keep body class to block navbar clicks and body scroll
  const openPopup = (i = 0) => {
    setCurrentIndex(i);
    setIsPopup(true);
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
    // ensure image is visible immediately
    setVisible(true);
  };
  const closePopup = () => {
    setIsPopup(false);
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
  };

  useKeyNavigation({ onNext: nextImage, onPrev: prevImage, onClose: closePopup });

  // touch swipe for preview & popup
  const touchStartX = useRef(null);
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchMove = (e) => {
    if (!touchStartX.current) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 60) {
      if (dx > 0) prevImage();
      else nextImage();
      touchStartX.current = null;
    }
  };

  // cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearTimeout(transitionTimer.current);
      clearInterval(autoplayTimer.current);
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="gallery full-bleed"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >

      {!isPopup && (
        <>
          <div
            className="gallery-slide preview"
            role="button"
            aria-label="Open gallery fullscreen"
            onClick={() => openPopup(currentIndex)}
          >
            <img
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className={`slide-img ${visible ? "visible" : "hidden"}`}
              draggable={false}
              onLoad={() => setVisible(true)}
            />

            <div className="headline-wrap" aria-hidden>
              <h2 className={`headline ${visible ? "type-in" : ""}`}>{images[currentIndex].title}</h2>
            </div>
          </div>

        </>
      )}

      {isPopup && (
        <div className="popup" role="dialog" aria-modal="true" aria-label="Image viewer" onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
          {/* close button — high z-index & pointer-events so it always works */}
          <button className="close" onClick={closePopup} aria-label="Close viewer">✕</button>

          <div className="popup-content">
            <button className="edge left-edge" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous">❮</button>

            <figure className="popup-figure">
              {/* Same aspect ratio container as preview (keeps size consistent) */}
              <img src={images[currentIndex].src} alt={images[currentIndex].title} draggable={false} />
              {/* description panel with subtle faded gray background + blur and entrance animation */}
              <figcaption className="desc">
                <div className="desc-inner">
                  <h3>{images[currentIndex].title}</h3>
                  <p>{images[currentIndex].desc}</p>
                </div>
              </figcaption>
            </figure>

            <button className="edge right-edge" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next">❯</button>
          </div>

          <div className="popup-indicators" aria-hidden>
            {images.map((_, i) => (
              <button key={i} className={`dot ${i === currentIndex ? "active" : ""}`} onClick={() => setCurrentIndex(i)} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyImageGallery;
