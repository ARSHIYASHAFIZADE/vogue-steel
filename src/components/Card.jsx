import React from "react";
import "./Card.css";

/**
 * Props:
 * - img: image url
 * - alt: alt text for image
 * - title: card title
 * - description: card description (string or node)
 * - ctaText: text for call-to-action (default "Learn More")
 * - href: if provided, CTA renders as <a> linking to href
 * - onClick: click handler (used when href not provided)
 * - badge: small label placed on top-left (e.g. "New", "Featured")
 * - tags: array of short strings to render as chips
 * - className: extra class names
 */
const Card = ({
  img,
  alt = "Card image",
  title,
  description,
  ctaText = "Learn More",
  href,
  onClick,
  badge,
  tags = [],
  className = "",
  ...rest
}) => {
  const Cta = href ? (
    <a
      href={href}
      className="card-button"
      aria-label={`${ctaText} — ${title}`}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {ctaText}
    </a>
  ) : (
    <button className="card-button" onClick={onClick} aria-label={`${ctaText} — ${title}`}>
      {ctaText}
    </button>
  );

  return (
    <article className={`card ${className}`} {...rest}>
      <div className="card-media" role="img" aria-label={alt}>
        {badge ? <span className="card-badge">{badge}</span> : null}
        {img ? (
          <img src={img} alt={alt} className="card-img" loading="lazy" />
        ) : (
          <div className="card-img placeholder" aria-hidden />
        )}
      </div>

      <div className="card-content">
        <header className="card-header">
          <h3 className="card-title">{title}</h3>
          {tags.length > 0 && (
            <ul className="card-tags" aria-hidden>
              {tags.slice(0, 3).map((t, i) => (
                <li key={i} className="card-tag">
                  {t}
                </li>
              ))}
            </ul>
          )}
        </header>

        <div className="card-description" aria-live="polite">
          {description}
        </div>

        <div className="card-footer">{Cta}</div>
      </div>
    </article>
  );
};

export default Card;
