import React from 'react';

const Joinus: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    banner: {
      backgroundColor: '#1e3a8a',
      height: '180px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: '80px', // offset for fixed navbar
    },
    bannerTitle: {
      fontSize: '2.4rem',
      fontWeight: 700,
      color: '#ffffff',
      margin: 0,
    },
    wrapper: {
      padding: '40px 20px 20px',
      textAlign: 'center',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    subText: {
      fontSize: '1.1rem',
      color: '#666',
      lineHeight: 1.7,
    },
    benefitsSection: {
      padding: '40px 20px 60px',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '30px',
      color: '#0b1c39',
    },
    benefitsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '40px',
      marginTop: '20px',
    },
    benefitItem: {
      width: '250px',
      textAlign: 'center',
    },
    benefitTitle: {
      fontWeight: 600,
      fontSize: '1.1rem',
      marginBottom: '10px',
    },
    benefitText: {
      color: '#666',
      fontSize: '0.95rem',
      lineHeight: 1.6,
    },
  };

  return (
    <>
      {/* Banner */}
      <div style={styles.banner}>
        <h1 style={styles.bannerTitle}>Join AionNimbus</h1>
      </div>

      {/* Intro Text */}
      <div style={styles.wrapper}>
        <p style={styles.subText}>
          At AionNimbus, we believe that people are the key to success. That’s why we strive to create an environment
          that fosters personal and professional growth. <br />
          Working at our company you will be always appreciated, as mutual assistance and mutual respect are our core
          principles.
        </p>
      </div>

      {/* Benefits */}
      <div style={styles.benefitsSection}>
        <h2 style={styles.sectionTitle}>Our Benefits</h2>
        <div style={styles.benefitsGrid}>
          {[
            {
              icon: '📈',
              title: 'Growth Opportunities',
              text: 'We prioritize the career and personal development of our employees, fostering a culture that values continuous learning and encourages professional growth.',
            },
            {
              icon: '⚙️',
              title: 'Flexibility',
              text: 'We have the agility to promptly respond to changing situations to effectively meet the needs of the colleagues.',
            },
            {
              icon: '🤝',
              title: 'Company Culture',
              text: 'The heart of our community lies in the unity and mutual support among our team members.',
            },
            {
              icon: '💜',
              title: 'Well-Being',
              text: 'We offer a comprehensive benefits package ensuring the well-being of every employee.',
            },
            {
              icon: '🌍',
              title: 'Social Responsibility',
              text: 'We Stand with Ukraine. Our top priority is the well-being and safety of our people and their families.',
            },
          ].map((item, index) => (
            <div key={index} style={styles.benefitItem}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{item.icon}</div>
              <div style={styles.benefitTitle}>{item.title}</div>
              <div style={styles.benefitText}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Joinus;
