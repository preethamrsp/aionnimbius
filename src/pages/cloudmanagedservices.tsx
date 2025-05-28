import React from 'react';
import {
  FaChartLine,
  FaLaptopCode,
  FaServer,
  FaUserCog,
  FaMoneyBillWave,
  FaListAlt,
  FaHandshake,
} from 'react-icons/fa';

const Cloudmanagedservices: React.FC = () => {
  const iconColor = '#4d7efb';
  const iconSize = 64;

  const styles: { [key: string]: React.CSSProperties } = {
    page: {
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
      lineHeight: 1.6,
      paddingTop: '100px',
      backgroundColor: '#fff',
    },
    hero: {
      backgroundColor: '#1e3a8a',
      color: '#fff',
      textAlign: 'center',
      padding: '60px 20px',
    },
    heroTitle: {
      fontSize: '42px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#ffffff',
    },
    section: {
      padding: '60px 20px',
      maxWidth: '1100px',
      margin: '0 auto',
    },
    paragraph: {
      textAlign: 'center',
      fontSize: '16px',
      color: '#666',
      marginBottom: '20px',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    listTitle: {
      fontSize: '30px',
      fontWeight: 800,
      textAlign: 'center',
      marginBottom: '30px',
      color: '#002b7f',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    featuresList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '18px',
      fontSize: '18px',
      fontWeight: 500,
      maxWidth: '900px',
      margin: '0 auto',
      color: '#333',
      lineHeight: 1.8,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '40px',
      marginTop: '40px',
    },
    card: {
      textAlign: 'center',
      padding: '30px 20px',
      borderRadius: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardTitle: {
      fontWeight: 600,
      fontSize: '18px',
      marginBottom: '10px',
    },
    cardText: {
      color: '#555',
      fontSize: '14px',
    },
    icon: {
      fontSize: `${iconSize}px`,
      color: iconColor,
      marginBottom: '20px',
    },
    benefitsLayout: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    benefitsIcon: {
      flex: 1,
      minWidth: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    benefitsText: {
      flex: 2,
      minWidth: '300px',
    },
    benefitsTitle: {
      fontSize: '28px',
      fontWeight: 700,
      marginBottom: '20px',
      color: '#002b7f',
    },
    benefitsList: {
      listStyleType: 'disc',
      paddingLeft: '20px',
      fontSize: '16px',
      color: '#555',
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Managed AWS Services Overview</h1>
      </div>

      {/* Overview Section */}
      <section style={styles.section}>
        <p style={styles.paragraph}>
          Lower costs, enhance security, and boost operational efficiency with a trusted Managed Service Provider.
        </p>
        <p style={styles.paragraph}>
          AionNimbus offers a wide range of managed services for cloud-powered businesses, helping you optimize costs,
          improve availability and scalability, secure your environment, and streamline configurations.
        </p>

        {/* Managed Services List */}
        <h2 style={styles.listTitle}>Our Cloud Managed Services Include:</h2>
        <div style={styles.featuresList}>
          <span>✔️ 24x7x365 management and optimization of cloud infrastructures and applications</span>
          <span>✔️ Advanced cloud modernization and DevOps automation</span>
          <span>✔️ High-performance cloud infrastructure implementation</span>
          <span>✔️ Legacy application modernization and optimization</span>
          <span>✔️ Certified Cloud Solutions Architects and DevOps engineers</span>
          <span>✔️ Reliable disaster recovery solutions</span>
          <span>✔️ End-to-end 24×7 DevOps support using a Follow-the-Sun model</span>
        </div>
      </section>

      {/* Use Cases Section */}
      <section style={styles.section}>
        <h2 style={styles.listTitle}>Cloud Managed Services Use Cases</h2>
        <div style={styles.grid}>
          {[
            {
              icon: <FaChartLine style={styles.icon} />,
              title: 'Cloud Management',
              description: 'Continuous compliance, performance improvements, managed cloud security, and configuration management.',
            },
            {
              icon: <FaLaptopCode style={styles.icon} />,
              title: 'DevOps Consulting Services',
              description: 'Automated workflows, CI/CD, and infrastructure as code (IaC).',
            },
            {
              icon: <FaServer style={styles.icon} />,
              title: 'Next-Gen Cloud Monitoring',
              description: 'Comprehensive monitoring for applications, networks, databases, and logs.',
            },
            {
              icon: <FaUserCog style={styles.icon} />,
              title: '24/7 DevOps Support',
              description: 'Incident resolution, cloud monitoring, and around-the-clock DevOps services.',
            },
            {
              icon: <FaMoneyBillWave style={styles.icon} />,
              title: 'AWS Cost Optimization',
              description: 'Storage, compute, and resource optimization to reduce cloud costs.',
            },
            {
              icon: <FaListAlt style={styles.icon} />,
              title: 'Cloud Strategy & Roadmap',
              description: 'Workshops, reviews, and strategic sessions to guide your AWS transformation.',
            },
          ].map((item, idx) => (
            <div key={idx} style={styles.card}>
              {item.icon}
              <div style={styles.cardTitle}>{item.title}</div>
              <div style={styles.cardText}>{item.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Benefits */}
      <section style={styles.section}>
        <div style={styles.benefitsLayout}>
          <div style={styles.benefitsIcon}>
            <FaHandshake size={iconSize} color={iconColor} />
          </div>
          <div style={styles.benefitsText}>
            <h2 style={styles.benefitsTitle}>Key Benefits</h2>
            <ul style={styles.benefitsList}>
              <li>Flexible payment plans</li>
              <li>Rapid onboarding at no extra cost</li>
              <li>True 24×7 AWS cloud support including holidays and out-of-office hours</li>
              <li>Detailed findings reports, review meetings, and planning sessions</li>
              <li>Customer login to Jira Service Desk and Confluence</li>
              <li>Predictable operating cost</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cloudmanagedservices;
