import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/EventPage.css";
import bgVideo from "/images/Space_Background.mp4";

const drinks = [
  {
    name: "",
    subtext: "Bold. Creamy. Irresistibly dark.",
    description:
      "Indulge in the ultimate chocolate experience — rich, creamy, and blended to perfection. Your favorite drink, now darker, smoother, and more irresistible than ever.",
    image: "/images/Mars.png",
    imageWidth: "750px",
    pdfUrl: "file:///C:/Users/harsh/Downloads/WEBCRAFT.pdf", // Add PDF for this slide
  },
  {
    name: "Dragon Splash",
    subtext: "Exotic. Fruity. Fierce.",
    description:
      "A vibrant blend of dragon fruit with a tropical twist, bursting with bold flavor. Refresh your energy and awaken your senses.",
    image: "/images/Jupiter.png",
    imageWidth: "530px",
    pdfUrl: "/pdfs/dragon-splash-registration.pdf", // Add PDF for this slide
  },
  {
    name: "Pineapple Zest",
    subtext: "Bright. Juicy. Refreshing.",
    description:
      "Zesty pineapple flavor that lifts your mood and refreshes your soul. The perfect tropical escape in every sip.",
    image: "/images/Saturn.png",
    imageWidth: "530px",
    pdfUrl: "/pdfs/pineapple-registration.pdf", // Add PDF for this slide
  },
  {
    name: "Strawberry Breeze",
    subtext: "Sweet. Creamy. Cool.",
    description:
      "A creamy strawberry blend made to chill your summer cravings. Smooth, sweet, and irresistibly refreshing.",
    image: "/images/Pluto.G09.watermarked.2k.png",
    imageWidth: "530px",
    pdfUrl: "/pdfs/strawberry-registration.pdf", // Add PDF for this slide
  },
  {
    name: "Dragon Splash",
    subtext: "Exotic. Fruity. Fierce.",
    description:
      "A vibrant blend of dragon fruit with a tropical twist, bursting with bold flavor. Refresh your energy and awaken your senses.",
    image: "/images/Jupiter.png",
    imageWidth: "530px",
    pdfUrl: "/pdfs/dragon-splash-2-registration.pdf", // Add PDF for this slide
  },
  {
    name: "Dragon Splash",
    subtext: "Exotic. Fruity. Fierce.",
    description:
      "A vibrant blend of dragon fruit with a tropical twist, bursting with bold flavor. Refresh your energy and awaken your senses.",
    image: "/images/Jupiter.png",
    imageWidth: "530px",
    pdfUrl: "/", // Add PDF for this slide
  },
];

const TARGET_TEXT = "Registration";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = ({ pdfUrl }) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join("");
      setText(scrambled);
      pos++;
      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(TARGET_TEXT);
  };

  // Function to open PDF specific to this slide
  const handleClick = () => {
    if (pdfUrl) {
      // Option 1: Open PDF in new tab
      window.open(pdfUrl, '_blank');
      
      // Option 2: Download PDF (uncomment to use this instead)
      // const link = document.createElement('a');
      // link.href = pdfUrl;
      // link.download = pdfUrl.split('/').pop(); // Gets filename from path
      // link.click();
    } else {
      console.warn('No PDF URL provided for this slide');
    }
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={handleClick}
      className="encrypt-button"
    >
      <div className="encrypt-button-content">
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="encrypt-button-gradient"
      />
    </motion.button>
  );
};

const EventPage = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % drinks.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + drinks.length) % drinks.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        next();
      } else if (e.key === "ArrowLeft") {
        prev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Mouse wheel navigation with better throttling
  useEffect(() => {
    let scrollTimeout = null;
    let accumulatedDelta = 0;
    const threshold = 50;

    const handleWheel = (e) => {
      accumulatedDelta += Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        if (Math.abs(accumulatedDelta) > threshold) {
          if (accumulatedDelta > 0) {
            next();
          } else {
            prev();
          }
        }
        accumulatedDelta = 0;
      }, 150);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [current]);

  const drink = drinks[current];

  return (
    <div className="eventpage">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        id="event-bg-video"
        className="background-video"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Layer */}
      <div className="event-content">
        {/* Text Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={drink.name + "-text"}
            className="drink-info"
            initial={{ x: direction === 1 ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>{drink.name}</h1>
            <h3>{drink.subtext}</h3>
            <p>{drink.description}</p>
            <EncryptButton pdfUrl={drink.pdfUrl} />
          </motion.div>
        </AnimatePresence>

        {/* Image Section */}
        <AnimatePresence mode="wait">
          <motion.img
            key={drink.name + "-img"}
            src={drink.image}
            alt={drink.name}
            className="drink-image"
            style={{
              width: drink.imageWidth,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventPage;