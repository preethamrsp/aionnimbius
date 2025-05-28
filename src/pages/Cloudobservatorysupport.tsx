import React from 'react';

const Cloudobservatorysupport: React.FC = () => {
  const styles = {
    page: {
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
      lineHeight: 1.7,
      paddingTop: '80px',
    },
    hero: {
     backgroundColor: '#1e3a8a',
      color: '#fff',
      padding: '70px 20px',
      textAlign: 'center' as const,
    },
    heroTitle: {
  fontSize: '40px',
  fontWeight: 'bold',
  margin: 0,
  color: '#ffffff', // ✅ Set title to white
},

    section: {
      padding: '50px 20px',
      maxWidth: '1100px',
      margin: '0 auto',
    },
    paragraph: {
      textAlign: 'justify' as const,
      fontSize: '18px',
      color: '#555',
      marginBottom: '40px',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 700,
      color: '#002b7f',
      margin: '30px 0 15px',
    },
    list: {
      paddingLeft: '20px',
      fontSize: '16px',
      color: '#444',
      marginBottom: '20px',
    },
    listItem: {
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Cloud Observability and Support</h1>
      </div>

      {/* Summary */}
      <section style={styles.section}>
        <p style={styles.paragraph}>
          AionNimbus seamlessly integrates people, processes, and advanced cloud technologies to deliver unmatched value,
          iterating on your current cloud environment and future needs. We provide precise steps to optimize observability
          and enhance operational efficiency. Our refined support model is designed to address the complexities of today’s
          dynamic cloud landscape, ensuring continuous improvement and facilitating sustained business growth.
        </p>

        {/* Sections as Bullet Lists */}
        <h2 style={styles.heading}>Cloud Support Services</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Premium Cloud Support</li>
          <li style={styles.listItem}>24×7 Monitoring and Incident Management</li>
          <li style={styles.listItem}>15-Minute Response SLA for Critical Issues</li>
          <li style={styles.listItem}>Advanced Monitoring Solutions Ready to Deploy</li>
          <li style={styles.listItem}>Continuous Cloud Management and Optimization</li>
          <li style={styles.listItem}>Comprehensive Runbooks, Knowledge Base, and Documentation</li>
          <li style={styles.listItem}>Dedicated Service Manager</li>
          <li style={styles.listItem}>Certified Cloud Specialists</li>
        </ul>

        <h2 style={styles.heading}>Why Do You Need Observability Consulting & Support?</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Achieve Full Ecosystem Visibility</li>
          <li style={styles.listItem}>Streamline Debugging and Incident Response</li>
          <li style={styles.listItem}>Accelerate Release Velocity</li>
          <li style={styles.listItem}>Minimize Downtime with Faster Incident Resolution</li>
          <li style={styles.listItem}>Drive Innovation with Less Risk and Higher Quality</li>
          <li style={styles.listItem}>Continuously Improve Business Outcomes</li>
          <li style={styles.listItem}>Proactively Detect and Resolve Issues</li>
          <li style={styles.listItem}>Optimize Infrastructure Performance and Costs</li>
        </ul>

        <h2 style={styles.heading}>Implement Observability with Confidence</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            AionNimbus is your end-to-end partner for adopting, implementing, and supporting monitoring, logging, and tracing —
            the pillars of observability.
          </li>
        </ul>

        <h2 style={styles.heading}>Infrastructure Monitoring</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Design intuitive dashboards for effective monitoring</li>
          <li style={styles.listItem}>Create visualizations to predict potential issues</li>
          <li style={styles.listItem}>Set real-time alerts for immediate action</li>
        </ul>
      </section>
    </div>
  );
};

export default Cloudobservatorysupport;
