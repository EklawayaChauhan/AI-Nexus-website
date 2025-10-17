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
                                    <p>10:00 AM - 11:00 AM</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>BOT OR NOT & Trading tech challenge</h3>
                                    <p>11:15 PM - 12:45 PM</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>Meme Minds + Bug Hunt</h3>
                                    <p>01:00 PM - 02:30 PM</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>Webcraft  + AI Debate</h3>
                                    <p>02:45 PM - 04:15 PM</p>
                                </div>
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
                                    <h3>CodeSprint (Hackathon)</h3>
                                    <p>10:00 AM - 4:00 AM: Deep dive and showcase your creativity.</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>Evaluation mentor round</h3>
                                    <p>12:00 PM</p>
                                </div>
                                <div className="event-marker"></div>
                            </div>
                            <div className="timeline-event">
                                <div className="event-content">
                                    <h3>Final evaluation </h3>
                                    <p>Starts at 3.30 PM</p>
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