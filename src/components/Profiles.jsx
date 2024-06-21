import React from 'react';
import config from '../config/config';

const Profiles = () => {
  return (
    <section className="py-5">
      <h3 className="text-center mb-4">Meet Our Team</h3>
      <div className="container">
        <div className="row">
          {config.teamMembers.map((person, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card profile-card slide-up">
                <div className="card-body text-center">
                  <img src={person.image} alt={person.name} className="profile-image mb-3" />
                  <h5 className="card-title">{person.name}</h5>
                  <p className="card-text">{person.profile}</p>
                  <p className="card-text"><strong>Skills:</strong> {person.skills.join(', ')}</p>
                  <p className="card-text"><strong>Experience:</strong> {person.experience} years</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;
