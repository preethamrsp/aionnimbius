import React from 'react';

const Companyoverview: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    banner: {
      backgroundColor: '#1e3a8a',
      height: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: '80px', // prevent overlap with fixed navbar
    },
    bannerTitle: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#ffffff',
      margin: 0,
    },
    section: {
      padding: '60px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '20px',
      color: '#0b1c39',
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
      color: '#333',
      marginBottom: '40px',
    },
    lightSection: {
      backgroundColor: '#e8f3fc',
      padding: '60px 20px',
      textAlign: 'center',
    },
    valuesSection: {
      backgroundColor: '#ffffff',
      padding: '60px 20px',
      maxWidth: '1100px',
      margin: '0 auto',
      textAlign: 'center',
    },
    valuesGrid: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: '40px',
      gap: '30px',
    },
    valueItem: {
      flex: '1 1 200px',
      minWidth: '200px',
      maxWidth: '250px',
      textAlign: 'center',
    },
    valueTitle: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: '#4d3fbf',
      marginTop: '15px',
      marginBottom: '10px',
    },
    valueText: {
      fontSize: '1rem',
      color: '#555',
    },
    icon: {
      fontSize: '2.5rem',
    },
  };

  return (
    <>
      {/* Banner */}
      <div style={styles.banner}>
        <h1 style={styles.bannerTitle}>Get to Know AionNimbus</h1>
      </div>

      {/* About Us */}
      <div style={styles.section}>
        <h2 style={styles.heading}>About Us</h2>
        <p style={styles.paragraph}>
          AionNimbus is a cloud and DevOps managed service provider based in India, proudly celebrating four years of empowering
          businesses with elite IT talent through our Hire, Train, and Deploy model. We specialize in strategic staff augmentation
          across the IT spectrum, accelerating cloud adoption with our multi-cloud migration services and DevOps consulting expertise.
        </p>

        <h2 style={styles.heading}>Our Core Services</h2>
        <p style={styles.paragraph}>
          At AionNimbus, we are committed to delivering superior customer service, ensuring seamless transitions, and optimizing
          DevOps practices. Our comprehensive IT managed services include 24/7 cloud operations, DevOps support, Site Reliability
          Engineering (SRE), and Chaos Engineering solutions. Partner with AionNimbus for reliable, high-performance solutions that
          drive your success and ensure uninterrupted performance.
        </p>
      </div>

      {/* Mission */}
      <div style={styles.lightSection}>
        <h2 style={styles.heading}>Our Mission</h2>
        <p style={styles.paragraph}>
          At AionNimbus, our mission is to help SMBs and startups build, optimize, and support outstanding software products on the cloud.
        </p>
      </div>

      {/* Company Values */}
      <div style={styles.valuesSection}>
        <h2 style={styles.heading}>Company Values</h2>
        <div style={styles.valuesGrid}>
          <div style={styles.valueItem}>
            <div style={styles.icon}>✔️</div>
            <div style={styles.valueTitle}>Responsibility</div>
            <div style={styles.valueText}>
              We take collective and individual responsibility for the decisions we make.
            </div>
          </div>
          <div style={styles.valueItem}>
            <div style={styles.icon}>🤝</div>
            <div style={styles.valueTitle}>Teamwork</div>
            <div style={styles.valueText}>
              Mutual aid and respect drive both the company’s and our personal achievements.
            </div>
          </div>
          <div style={styles.valueItem}>
            <div style={styles.icon}>💻</div>
            <div style={styles.valueTitle}>Customer Focus</div>
            <div style={styles.valueText}>
              Delivering requirements and ensuring client success are our highest priorities.
            </div>
          </div>
          <div style={styles.valueItem}>
            <div style={styles.icon}>👥</div>
            <div style={styles.valueTitle}>Put People First</div>
            <div style={styles.valueText}>
              We value people as individuals and work to empower them.
            </div>
          </div>
        </div>
      </div>

      {/* Commitment */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Our Commitment</h2>
        <p style={styles.paragraph}>
          At AionNimbus, we are dedicated to making a positive impact on our community and the world. Through our initiative, AionNimbus Cares,
          we support programs that promote social responsibility, environmental sustainability, and technological advancement. Our efforts
          include fostering education in technology for youth, aiding families in need, and advocating for equality and justice in all forms.
          We believe that by giving back, we can help create a brighter future for everyone.
        </p>
      </div>
    </>
  );
};

export default Companyoverview;
