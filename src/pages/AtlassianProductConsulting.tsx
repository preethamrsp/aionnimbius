import React from 'react';

const AtlassianProductConsulting: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    page: {
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
    },
    hero: {
          backgroundColor: '#1e3a8a',
      textAlign: 'center',
      padding: '120px 20px 60px 20px', // space below title
    },
    heroTitle: {
      fontSize: '40px',
      fontWeight: 700,
      color: '#fff',
      margin: 0,
    },
    descriptionWrapper: {
      padding: '40px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center',
    },
    subheading: {
      fontSize: '22px',
      fontWeight: 600,
      color: '#001d3d',
      marginBottom: '25px',
    },
    paragraph: {
      fontSize: '18px',
      color: '#555',
      lineHeight: 1.75,
      maxWidth: '900px',
      margin: '0 auto',
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Title Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Atlassian Product Consulting</h1>
      </div>

      {/* Subheading & Paragraph Section */}
      <div style={styles.descriptionWrapper}>
        <h2 style={styles.subheading}>
          Expert Atlassian Services by Trusted Solution Consultants
        </h2>
        <p style={styles.paragraph}>
          AionNimbus specializes in delivering professional services for Atlassian products, designed to maximize their value for your business. 
          Our skilled team, with hands-on experience, is committed to helping you unlock the full potential of Atlassian’s tools. 
          We are driven to ensure you get the most out of their extensive features and capabilities. With AionNimbus, you’re partnering 
          with a team that is dedicated to your success and the effective use of Atlassian solutions.
        </p>
      </div>
    </div>
  );
};

export default AtlassianProductConsulting;
