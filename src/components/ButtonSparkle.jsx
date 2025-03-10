import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const ButtonSparkle = ({ children, className, onClick, href, target, ...props }) => {
  const [stars, setStars] = useState([]);

  const createStar = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newStars = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 40,
      y: y + (Math.random() - 0.5) * 40,
      rotation: Math.random() * 360
    }));

    setStars(prev => [...prev, ...newStars]);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStars(prev => prev.filter(star => Date.now() - parseInt(star.id) < 800));
    }, 800);

    return () => clearTimeout(timeout);
  }, [stars]);

  const handleClick = (e) => {
    createStar(e);
    if (onClick) onClick(e);
  };

  const renderStars = () => {
    return stars.map(star => (
      <FaStar
        key={star.id}
        className="star"
        style={{
          left: `${star.x}px`,
          top: `${star.y}px`,
          transform: `rotate(${star.rotation}deg)`
        }}
      />
    ));
  };

  if (href) {
    return (
      <a 
        href={href}
        target={target}
        className={`btn ${className || ''}`}
        onClick={handleClick}
        {...props}
      >
        {children}
        {renderStars()}
      </a>
    );
  }

  return (
    <button 
      className={`btn ${className || ''}`} 
      onClick={handleClick}
      {...props}
    >
      {children}
      {renderStars()}
    </button>
  );
};

export default ButtonSparkle; 