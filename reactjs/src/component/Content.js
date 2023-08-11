import React from 'react';
import jembat from '../assets/jembat.jpg';
import dark from '../assets/dark.png';
import gedung from '../assets/gedung.jpg';
import gelap from '../assets/gelap.jpg';
import cw from '../assets/cw.jpg';

const Content = () => {
  return (
    <div className='container'>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary" style={{ backgroundImage: `url(${dark})`, backgroundSize: 'cover' }}>
                <p className="title">Documentation...</p>
                <p className="subtitle">Learn More</p>
              </article>
              <article className="tile is-child notification is-warning" style={{ backgroundImage: `url(${gedung})`, backgroundSize: 'cover' }}>
                <p className="title">...About</p>
                <p className="subtitle">Our Story</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info" style={{ backgroundImage: `url(${gelap})`, backgroundSize: 'cover' }}>
                <p className="title">Jobs</p>
                <p className="subtitle">Join Us</p>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger" style={{ backgroundImage: `url(${jembat})`, backgroundSize: 'cover' }}>
              <p className="title">Contact</p>
              <p className="subtitle">Get in Touch</p>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-success" style={{ backgroundImage: `url(${cw})`, backgroundSize: 'cover' }}>
            <div className="content">
              <p className="title">Report an Issue</p>
              <p className="subtitle">Submit Issue</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Content;