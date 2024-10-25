// src/pages/Faculty.js
import React from 'react';
import '../styles/Faculty.css';

const Faculty = () => {
  const facultyMembers = [
    { name: 'Rachel Gomez', title: 'Assistant Professor', image: '/assets/faculty1.jpg' },
    { name: 'Franklin Doyle', title: 'Professor of History', image: '/assets/faculty2.jpg' },
    // Add more faculty members here
  ];

  return (
    <div className="faculty">
      <h2>Faculty Directory</h2>
      <div className="faculty-grid">
        {facultyMembers.map((member, index) => (
          <div className="faculty-card" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
