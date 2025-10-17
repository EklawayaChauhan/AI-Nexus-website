import React from "react";
import "../styles/AboutPage.css";
// import Header from "./Header.jsx";

const teamMembers = [
  {
    name: "Akshata Patil",
    role: "Event Coordinator",
    image: "/images/Akshata.jpeg",
  },
  {
    name: "Manashree Jibhkate",
    role: "Event Co-coordinator",
    image: "/images/Manashree.jpeg",
  },
  {
    name: "Aditi Parshavinikar",
    role: "Treasurer",
    image: "/images/Adity.jpeg",
  },
  {
    name: "Om Ganwande",
    role: "Core Member",
    image: "/images/Om.jpeg",
  },
  {
    name: "Parth Khairkar",
    role: "Core Member",
    image: "/images/Parth.jpg"
  },
  {
    name: "Eklawaya Chauhan",
    role: "Lead Web Dev.",
    image: "/images/Eklawaya_chauhan.jpeg",
  },
];

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* <Header /> */}

      {/* The overlay is kept for the dark shade effect over the background image */}
      <div className="overlay" />

      {/* Main Content */}
      <div className="about-content">
        <section className="intro">
          <h1>What is  AI NEXUS...?</h1>
          <p>
            <strong>AI NEXUS</strong> is a national-level celebration of innovation, technology, and collaboration. This two-day event brings together brilliant minds, top companies, and passionate students to explore the limitless possibilities of Artificial Intelligence and emerging technologies.
                From thrilling competitions and creative challenges to insightful industry talks and networking opportunities, Techverse AI provides a platform for students, professionals, and innovators to showcase their skills, share ideas, and shape the future of technology.
                With leading companies collaborating with us, Techverse AI is more than just an event — it’s a gateway to learning, innovation, and career opportunities.
          </p>
        </section>

        <section className="vision">
          <h2>AI Prabodha Forum</h2>
          <p>
            AI Prabhod Forum is a dedicated platform that fosters learning, innovation, and collaboration in the field of Artificial Intelligence. It serves as a bridge between students, educators, researchers, and industry experts, creating opportunities to share knowledge and explore the real-world impact of AI.
            The forum aims to nurture talent, spark discussions, and encourage innovative solutions through events, competitions, and collaborative initiatives. By bringing together diverse perspectives, AI Prabhod Forum empowers the next generation of AI enthusiasts to grow and contribute to the technological revolution.
          </p>
        </section>

        <section className="team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;