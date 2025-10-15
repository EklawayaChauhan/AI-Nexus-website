import React from "react";
import "../styles/AboutPage.css";
import Header from "./Header.jsx";

const teamMembers = [
  {
    name: "Akshata patil",
    role: "Event Coordinator",
    image: "/images/Akshata.jpeg",
  },
  {
    name: "Eklawaya Chauhan",
    role: "Lead Developer",
    image: "/images/Eklawaya_chauhan.jpeg",
  },
  {
    name: "Om Ganwande",
    role: "Event Co coordinator",
    image: "/images/Om.jpeg",
  },
  {
    name: "Manashree",
    role: "Treasurer",
    image: "/images/Manashree.jpeg",
  },
  {
    name: "Adity",
    role: "Core Member",
    image: "/images/Adity.jpeg",
  },

];

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />

      {/* Background Video (same style as EventPage) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="/images/854225-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay" />

      {/* Main Content */}
      <div className="about-content">
        <section className="intro">
          <h1>What is NEXUS...?</h1>
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

        {/* Team Section */}
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
