import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/EventPage.css";
import bgVideo from "/images/Space_Background.mp4";

const drinks = [
  {
    name: "AI DEBATE",
    subtext: "Debate over Artificial Intelligence.",
    description:
      "Welcome to the AI Debate Competition, where intellect, reasoning, and adaptability collide!This unique debate challenges participants to test their debating skills first against Artificial Intelligence (AI) and then against fellow human opponents",
    image: "/images/Earth.png",
    imageWidth: "750px",
    pdfUrl: "/rulebooks/AI DEBATE .pdf", // Add PDF for this slide
  },
  {
    name: "BOT OR NOT",
    subtext: "Creativity for BOTs.",
    description:
      " BOT-NOT is a super fun and interactive game where you get to guess whether a creation is made by AI or a human! As you play, you’ll earn points and have a blast competing for the top spot, all while sharpening your observation and analytical skills. Comejoin the fun and see how many you can get right ",
      image: "/images/Jupiter.png",
      imageWidth: "530px",
    pdfUrl: "/rulebooks/BOT OR NOT.pdf", // Add PDF for this slide
  },
  {
    name: "BUG HUNT",
    subtext: "Decoding contest.",
    description:
      " In the Find the Glitch game, participants will analyze given code snippets and identify errors or bugs present in them. Thegame will test their debugging skills across different levels, such as easy, moderate, and high difficulty. Each round will feature coding problems with logical, syntactical, or semantic errors, and participants will be required to find and correct them within a given time limit.",
    image: "/images/Saturn.png",
    imageWidth: "530px",
    pdfUrl: "/rulebooks/BUG HUNT.pdf", // Add PDF for this slide
  },
  {
    name: "CODESPRINT HACKATHON",
    subtext: "Hackthon.",
    description:
      "Welcome to CodeSprint, the ultimate hackathon where innovation, teamwork, and coding brilliance collide! Your mission? To ideate, design, and build impactful solutions within the given timeframe.",
     image: "/images/Pluto.G09.watermarked.2k.png",
    imageWidth: "530px",
    pdfUrl: "/rulebooks/sCODESPRINT HACKATHON.pdf", // Add PDF for this slide
  },
  {
    name: "TRADE TECH CHALLENGE ",
    subtext: "Trading Contest.",
    description:
      " This is your chance to prove your financial instincts and analytical skills under pressure. Think fast, trade smart, and may the best trader win! 📈⚡",
    image: "/images/Mars.png",
    imageWidth: "530px",
    pdfUrl: "/rulebooks/TRADE TECH CHALLENGE .pdf", // Add PDF for this slide
  },
  {
    name: "WEBCRAFT",
    subtext: "Exotic. Fruity. Fierce.",
    description:
      "Teams will design their main page with dynamic features, animations, and interactive elements",
    image: "/images/Jupiter.png",
    imageWidth: "530px",
    pdfUrl: "/rulebooks/WEBCRAFT.pdf", // Add PDF for this slide
  },
];

const TARGET_TEXT = "Rule Book";
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
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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

  // Touch navigation for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY });
  };

  const onTouchMove = (e) => {
    setTouchEnd({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY });
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = touchStart.y - touchEnd.y;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    // Only trigger swipe if horizontal movement is greater than vertical
    if (absDeltaX > absDeltaY && absDeltaX > minSwipeDistance) {
      if (deltaX > 0) {
        next();
      } else {
        prev();
      }
    }
    // If vertical movement is greater, allow default scrolling
  };

  const drink = drinks[current];

  return (
    <div
      className="eventpage"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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