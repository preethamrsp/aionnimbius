import React from 'react';

const Cloudservices = () => {
  const services = [
    { icon: '☁️⬆️', title: 'Cloud Consulting Services' },
    { icon: '☁️🖥️', title: 'Cloud Managed Services' },
    { icon: '☁️📊', title: 'Cloud Observability & Support' },
    { icon: '☁️📘', title: 'Cloud Training and Enablement' },
  ];

  const styles = {
    page: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffffff',
      color: '#333',
      paddingBottom: '40px',
    },
    header: {
     backgroundColor: '#1e3a8a',
      color: '#fff',
      padding: '20px 0',
      textAlign: 'center',
      fontSize: '28px',
      fontWeight: 'bold',
    },
    content: {
      padding: '40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
      lineHeight: 1.6,
    },
    paragraph: {
      marginBottom: '20px',
      textAlign: 'justify',
    },
    servicesGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px',
      margin: '40px 0',
    },
    serviceCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '200px',
      textAlign: 'center',
    },
    icon: {
      fontSize: '40px',
      color: '#6a5acd',
      marginBottom: '10px',
    },
    serviceTitle: {
      fontWeight: 'bold',
    },
    focusHeader: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: '40px 0 20px',
    },
    focusParagraph: {
      textAlign: 'justify',
      maxWidth: '800px',
      margin: '0 auto',
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>AionNimbus Cloud Services</header>

      <div style={styles.content}>
        <p style={styles.paragraph}>
          Every cloud journey needs a roadmap. Our Cloud Services enable organizations to reduce operational overhead, boost productivity, and lower costs, while also speeding up time-to-market.
        </p>
        <p style={styles.paragraph}>
          AionNimbus Cloud solutions help clients become more agile and responsive to the shifting market landscape. Our team will work closely with you to understand your specific needs and design a tailored solution that fits both your objectives and budget. With AionNimbus Cloud Services, you can focus on growing your core business while we manage the complexities of the cloud.
        </p>

        <div style={styles.servicesGrid}>
          {services.map((service, idx) => (
            <div key={idx} style={styles.serviceCard}>
              <div style={styles.icon}>{service.icon}</div>
              <div style={styles.serviceTitle}>{service.title}</div>
            </div>
          ))}
        </div>

        <div style={styles.focusHeader}>
          FOCUS ON GROWING YOUR BUSINESS<br />
          LET US HANDLE THE BACKEND
        </div>
        <p style={styles.focusParagraph}>
          At AionNimbus, we know the transformative power of cloud computing and the importance of having the right strategy in place. Our skilled team will work closely with you to deliver end-to-end solutions, developing strategies for cloud adoption, migration, security, and infrastructure. Our cloud consultants, including experienced DevOps engineers, will ensure your cloud environment is efficient, high-performing, and secure, allowing you to focus on what matters most—growing your business.
        </p>
      </div>
    </div>
  );
};

export default Cloudservices;
