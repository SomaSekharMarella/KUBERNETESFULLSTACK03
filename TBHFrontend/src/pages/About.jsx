import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About The Blockchain Hub (TBH)</h1>
      <p className="intro">
        THE BLOCKCHAIN HUB (TBH) at KL University is more than just a student club — it's a revolutionary platform for future tech leaders. Born out of a shared passion for innovation, TBH was founded by Praveen and his team, who turned their bold vision into a thriving community despite early struggles and delays in approvals. At TBH, we believe blockchain is the future, and our mission is simple — make every student blockchain-literate and ready for the decentralized digital world.
      </p>

      <h2>What is Blockchain?</h2>
      <p>
        Blockchain is a revolutionary technology that allows information to be stored securely without needing a central authority. It powers cryptocurrencies like Bitcoin, enables smart contracts, and ensures transparency in digital systems.
      </p>
      <ul>
        <li>🔗 A distributed digital ledger</li>
        <li>🔒 Immutable, secure, and decentralized</li>
        <li>🚀 Enables cryptocurrencies, NFTs, and smart contracts</li>
      </ul>

      <h2>What We Do</h2>
      <ul>
        <li><strong>Learn Blockchain:</strong> Workshops, interactive sessions, and hands-on labs for all skill levels.</li>
        <li><strong>Build Projects:</strong> Work on real-world blockchain applications — dApps, smart contracts, and more.</li>
        <li><strong>Hackathons:</strong> Participate in competitions and challenges to bring ideas to life.</li>
        <li><strong>Research & Innovation:</strong> Explore trends like Zero-Knowledge Proofs, Layer 2 Scaling, and Web3 infrastructure.</li>
      </ul>

      <h2>Our DNA & Vision</h2>
      <p>
        TBH is student-powered and project-first. Founded in 2024 by Mr. Praveen Chennamsetty and a group of Y21 CSE students, we've grown from a study group into the university's premier blockchain collective.
      </p>
      <p className="quote">
        "We launched The Blockchain Hub to help students move from Web2 to Web3 thinking. Blockchain isn't just tech — it's decentralization, transparency, smart contracts, and trustless systems. Today, watching students deploy smart contracts and contribute to real networks proves that we’re not just learning the future — we’re building it, block by block." <br />
        - Mr. Praveen Chennamsetty, Founder
      </p>

      <h2>Why Join TBH?</h2>
      <ul>
        <li>✅ Elevate your technical expertise through hands-on workshops and real projects.</li>
        <li>✅ Connect with Web3 experts and alumni for guidance and mentorship.</li>
        <li>✅ Participate in hackathons, research, and networking events to grow your career.</li>
        <li>✅ Be part of a collaborative and supportive community driven by curiosity.</li>
      </ul>

      <p className="cta">
        🔥 Join Now! DM us on Instagram (@klu_tbh) or join our Telegram channel (@klu_tbh) for updates. Attend your first workshop and start building the decentralized future today!
      </p>
    </div>
  );
}

export default About;
