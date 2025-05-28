import React from 'react';

const DevOpsConsultingServices: React.FC = () => {
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
    flexRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      justifyContent: 'space-between',
      marginBottom: '60px',
    },
    serviceBox: {
      flex: 1,
      minWidth: '300px',
      background: '#f9f9f9',
      borderRadius: '10px',
      padding: '25px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    iconImage: {
      width: '80px',
      height: '80px',
      objectFit: 'contain',
      marginBottom: '20px',
    },
    serviceHeading: {
      fontSize: '20px',
      fontWeight: 700,
      marginBottom: '15px',
      color: '#002b7f',
    },
    paragraph: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '15px',
      textAlign: 'left',
    },
    ul: {
      paddingLeft: '20px',
      fontSize: '16px',
      color: '#555',
      textAlign: 'left',
    },
    li: {
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>DevOps Consulting Services</h1>
      </div>

  

      {/* Services Section */}
      <section style={styles.section}>

            <p style={{ ...styles.paragraph, textAlign: 'center', maxWidth: '900px', margin: '0 auto 50px' }}>
    AionNimbius helps organizations achieve seamless collaboration and efficiency by improving their infrastructure, development, and IT operations.
  </p>

  
        <div style={styles.flexRow}>
          <div style={styles.serviceBox}>
            <img src="/images/devops-icon1.png" alt="Advisory Icon" style={styles.iconImage} />
            <h2 style={styles.serviceHeading}>DevOps Advisory Services</h2>
            <p style={styles.paragraph}>
              We guide our customers on how to adopt a DevOps culture to accelerate cloud operations,
              optimize spending, and improve security. We can help you with:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>Assessment and cloud strategy development</li>
              <li style={styles.li}>Cloud architecture design and implementation</li>
              <li style={styles.li}>Proof-of-concept implementation</li>
              <li style={styles.li}>DevOps automation</li>
            </ul>
          </div>

          <div style={styles.serviceBox}>
            <img src="/images/devops-icon2.png" alt="Professional Icon" style={styles.iconImage} />
            <h2 style={styles.serviceHeading}>DevOps Professional Services</h2>
            <p style={styles.paragraph}>
              We assist our clients in applying DevOps best practices within their organizations. Our certified team helps you realize DevOps initiatives, such as:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>Continuous Integration and Continuous Delivery</li>
              <li style={styles.li}>Monitoring and Logging</li>
              <li style={styles.li}>Infrastructure as Code</li>
              <li style={styles.li}>DevSecOps</li>
            </ul>
          </div>

          <div style={styles.serviceBox}>
            <img src="/images/devops-icon3.png" alt="Consulting Icon" style={styles.iconImage} />
            <h2 style={styles.serviceHeading}>DevOps Consulting Services We Offer</h2>
            <p style={styles.paragraph}>
              We assist our clients in applying DevOps best practices within their organizations. Our certified team helps you realize DevOps initiatives, such as:
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>24×7 NOC and incident response</li>
              <li style={styles.li}>Cloud infrastructure management</li>
              <li style={styles.li}>Performance optimization and scalability</li>
              <li style={styles.li}>Cloud modernization & SRE</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsConsultingServices;
