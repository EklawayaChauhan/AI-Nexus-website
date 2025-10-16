import React, { useState } from 'react';
import '../styles/Schedule.css'; // Import the corresponding CSS file
import Header from "./Header.jsx";

const Schedule = () => {
    // State to keep track of the currently active day
    const [activeDay, setActiveDay] = useState('day1');

    // Function to change the active day
    const showDay = (day) => {
        setActiveDay(day);
    };

    return (
        <div className="content-wrapper">
            <Header/>
            <section className="schedule-section" id="schedule-start">
                <div className="schedule-header">
                    <h1>SCHEDULE</h1>
                    <div className="day-toggle">
                        {/* Buttons to toggle between Day 1 and Day 2 */}
                        <button 
                            className={activeDay === 'day1' ? 'active' : ''} 
                            onClick={() => showDay('day1')}
                        >
                            Day 1
                        </button>
                        <button 
                            className={activeDay === 'day2' ? 'active' : ''} 
                            onClick={() => showDay('day2')}
                        >
                            Day 2
                        </button>
                    </div>
                </div>

                <div className="timeline" id="timeline">
                    {/* Conditionally render Day 1 schedule */}
                    {activeDay === 'day1' && (
                        <div id="day1" className="day-schedule">
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>REGISTRATION</h3>
                                    <p>9:30 AM to 10:00 AM</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>INAUGURATION + SPEAKER SESSION</h3>
                                    <p>10:00 AM - 11:45 AM</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>HTTPS FIND + REAL TRADE MARKET</h3>
                                    <p>12:00 PM - 01:30 PM</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>BREAK</h3>
                                    <p>01:30 PM - 02:00 PM</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>PANEL DISCUSSION</h3>
                                    <p>02:00 PM - 4:00 PM</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>MEME MAKER + AI OR NOT</h3>
                                    <p>04:00 PM - 05:00 PM</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>AI DEVELOP + FIND THE GLITCH</h3>
                                    <p>05:00 PM - 06:00 PM</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                        </div>
                    )}

                    {/* Conditionally render Day 2 schedule */}
                    {activeDay === 'day2' && (
                        <div id="day2" className="day-schedule">
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>DAY 2 START</h3>
                                    <p>09:00 AM: Last-minute registration and setup.</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>WORKSHOP: ETHICAL AI</h3>
                                    <p>09:30 AM - 11:30 AM: Deep dive into bias detection and fairness models.</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>CLOSING CEREMONY & PRIZE DISTRIBUTION</h3>
                                    <p>11:30 AM - 12:30 PM</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>NETWORKING LUNCH</h3>
                                    <p>12:30 PM - 01:30 PM: Final chance to connect with speakers and participants.</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Schedule;