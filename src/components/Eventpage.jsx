import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/EventPage.css";
import bgVideo from "/images/Space_Background.mp4";
import Header from "./Header.jsx";

const drinks = [
    // Your event data remains the same...
  {
    name: "BOT OR NOT",
    subtext: "Creativity for BOTs.",
    description:
      " BOT-NOT is a super fun and interactive game where you get to guess whether a creation is made by AI or a human! As you play, you’ll earn points and have a blast competing for the top spot, all while sharpening your observation and analytical skills. Comejoin the fun and see how many you can get right ",
      image: "/images/Jupiter.png",
    pdfUrl: "/rulebooks/BOT OR NOT.pdf",
  },
  {
    name: "TRADE TECH CHALLENGE ",
    subtext: "Trading Contest.",
    description:
      " This is your chance to prove your financial instincts and analytical skills under pressure. Think fast, trade smart, and may the best trader win! 📈⚡",
    image: "/images/Mars.png",
    pdfUrl: "/rulebooks/TRADE TECH CHALLENGE .pdf",
  },
  
  {
    name: "MEME MINDS",
    subtext: "Because a Picture’s Worth a Thousand Laughs.",
    description:
      "Meme Minds is a creative contest that celebrates humor and originality through memes. Participants craft witty, theme-based memes using their imagination and design skills. Join the fun, showcase your creativity, and let your memes do the talking in this battle for the title of Meme Master!",
    image: "/images/mercury.png",
    pdfUrl: "/rulebooks/mememinds.pdf",
  },
  
  {
    name: "BUG HUNT",
    subtext: "Decoding contest.",
    description:
      " In the Find the Glitch game, participants will analyze given code snippets and identify errors or bugs present in them. Thegame will test their debugging skills across different levels, such as easy, moderate, and high difficulty. Each round will feature coding problems with logical, syntactical, or semantic errors, and participants will be required to find and correct them within a given time limit.",
    image: "/images/Saturn.png",
    pdfUrl: "/rulebooks/BUG HUNT.pdf",
  },
  
  
  {
    name: "WEBCRAFT",
    subtext: "Web Creativity.",
    description:
      "Teams will design their main page with dynamic features, animations, and interactive elements",
    image: "/images/Jupiter.png",
    pdfUrl: "/rulebooks/WEBCRAFT.pdf",
  },
  {
    name: "AI DEBATE",
    subtext: "Debate over Artificial Intelligence.",
    description:
      "Welcome to the AI Debate Competition, where intellect, reasoning, and adaptability collide!This unique debate challenges participants to test their debating skills first against Artificial Intelligence (AI) and then against fellow human opponents",
    image: "/images/Earth.png",
    pdfUrl: "/rulebooks/AI DEBATE .pdf",
  },
  {
    name: "CODESPRINT HACKATHON",
    subtext: "Hackthon.",
    description:
      "Welcome to CodeSprint, the ultimate hackathon where innovation, teamwork, and coding brilliance collide! Your mission? To ideate, design, and build impactful solutions within the given timeframe.",
     image: "/images/Pluto.G09.watermarked.2k.png",
    pdfUrl: "/rulebooks/sCODESPRINT HACKATHON.pdf",
  },
];

// EncryptButton component remains the same...
const EncryptButton = ({ pdfUrl }) => {
    // ... no changes needed here
    const TARGET_TEXT = "Rule Book";
    const CYCLES_PER_LETTER = 2;
    const SHUFFLE_TIME = 50;
    const CHARS = "!@#$%^&*():{};|,.<>/?";
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

  const handleClick = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
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
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
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
  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    };

    const handleSwipe = () => {
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      const threshold = 50;

      // If horizontal swipe is greater than vertical and exceeds threshold, navigate carousel
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          prev(); // Swipe right -> previous
        } else {
          next(); // Swipe left -> next
        }
      }
      // Vertical swipes are allowed for page scrolling
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [current]);

  const drink = drinks[current];

  return (
    <div className="eventpage">
      {/* Background video */}
      <video
        autoPlay muted loop playsInline
        id="event-bg-video"
        className="background-video"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="event-content">
        {/* ✅ ADDED: Wrapper div to fix layout bug */}
        <div className="grid-cell">
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
        </div>

        {/* ✅ ADDED: Wrapper div to fix layout bug */}
        <div className="grid-cell">
          <AnimatePresence mode="wait">
            <motion.img
              key={drink.name + "-img"}
              src={drink.image}
              alt={drink.name}
              className="drink-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default EventPage;