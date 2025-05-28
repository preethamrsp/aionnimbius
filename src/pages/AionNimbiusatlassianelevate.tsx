import React from 'react';

const AtlassianElevate: React.FC = () => {
  const brandBlue = '#4d7efb';

  const styles: { [key: string]: React.CSSProperties } = {
    page: {
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
      lineHeight: 1.6,
      paddingTop: '100px',
    },
    hero: {
        backgroundColor: '#1e3a8a',
      color: '#fff',
      textAlign: 'center',
      padding: '80px 20px',
    },
    heroTitle: {
      fontSize: '42px',
      fontWeight: 700,
      margin: 0,
       color: '#fff',
    },
    section: {
      padding: '60px 20px',
      maxWidth: '1100px',
      margin: '0 auto',
    },
    list: {
      fontSize: '18px',
      color: '#555',
      lineHeight: 1.8,
      paddingLeft: '20px',
      listStyleType: 'disc',
    },
    listItem: {
      marginBottom: '12px',
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>AionNimbus Atlassian Elevate</h1>
      </div>

      {/* Bullet Points Section */}
      <section style={styles.section}>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            A New Kind of Atlassian Operations and Enhancement Program with an emphasis on quality,
            flexibility, a range of expertise, and measurable results. AionNimbus Atlassian Elevate goes
            beyond platform administration to provide the strategic guidance you need to succeed on your Atlassian journey.
          </li>
          <li style={styles.listItem}>
            Atlassian talent is hard to find, expensive, and difficult to retain
          </li>
          <li style={styles.listItem}>
            Finding people with the right skills is incredibly challenging, and you’re tired of investing
            in training only to see employees move on.
          </li>
          <li style={styles.listItem}>Demand is piling up, and your backlog just keeps growing</li>
          <li style={styles.listItem}>
            You have more demand than capacity, and your backlog of enhancements is growing without relief.
          </li>
          <li style={styles.listItem}>Expanding your platform requires specialized skill sets</li>
          <li style={styles.listItem}>
            Extending Atlassian to other teams requires specific business and technical knowledge.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AtlassianElevate;
