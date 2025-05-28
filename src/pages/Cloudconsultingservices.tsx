import React from 'react';
import {
  FaAws,
  FaSitemap,
  FaCloudUploadAlt,
  FaCogs,
  FaShieldAlt,
  FaSyncAlt,
} from 'react-icons/fa';

const Cloudconsultingservices: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    page: {
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
      lineHeight: 1.6,
      paddingTop: '100px',
    },
    section: {
      padding: '60px 20px',
      maxWidth: '1100px',
      margin: '0 auto',
    },
    title: {
      fontSize: '32px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: '30px',
    },
    iconTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '22px',
      fontWeight: 600,
      marginBottom: '15px',
    },
    text: {
      fontSize: '16px',
      textAlign: 'justify' as const,
      color: '#555',
    },
    ul: {
      paddingLeft: '20px',
      marginTop: '10px',
      color: '#555',
    },
    li: {
      marginBottom: '8px',
    },
    dualSection: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      gap: '30px',
      padding: '30px',
      marginBottom: '40px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
    },
    dualIcon: {
      fontSize: '60px',
      color: '#4d7efb',
      flex: '0 0 60px',
      textAlign: 'center',
    },
    dualText: {
      flex: 1,
      minWidth: '280px',
    },
    ctaContainer: {
      textAlign: 'center',
      padding: '60px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    },
    ctaIcon: {
      fontSize: '80px',
      color: '#4d7efb',
    },
    ctaHeading: {
      fontSize: '28px',
      fontWeight: 700,
      color: '#002b7f',
      margin: 0,
    },
    button: {
      padding: '14px 28px',
      fontSize: '16px',
      backgroundColor: '#002b7f',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.page}>
      {/* Intro Section */}
      <section
        style={{
          ...styles.section,
          backgroundColor: '#f4f8ff',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div style={styles.dualSection}>
          <div style={styles.dualIcon}><FaAws /></div>
          <div style={styles.dualText}>
            <div style={styles.iconTitle}><FaAws /> AWS Consulting Services</div>
            <p style={styles.text}>
              We offer a comprehensive suite of AWS cloud solutions, from implementation and migration to optimization.
              Our team helps you identify and deploy the most suitable options to align with your business goals and drive success.
            </p>
          </div>
        </div>

        <h2 style={styles.title}>AWS consulting services use cases</h2>
        <p style={styles.text}>
          Explore the real-world applications of our AWS consulting services. Understand how these solutions can address your specific business challenges and evaluate their relevance to your current needs.
          AionNimbus AWS Consulting Services are designed to provide practical solutions that drive success in various business scenarios.
        </p>
      </section>

      {/* Service Sections */}
      <section style={styles.section}>
        {/* Architecture */}
        <div style={styles.dualSection}>
          <div style={styles.dualIcon}><FaSitemap /></div>
          <div style={styles.dualText}>
            <div style={styles.iconTitle}><FaSitemap /> AWS solutions architecture</div>
            <p style={styles.text}>
              Our team helps you identify and select the optimal architecture aligned with the AWS Well-Architected Framework.
              We ensure your applications are scalable, resilient, and cost-effective while maintaining top performance.
            </p>
          </div>
        </div>

        {/* Cloud Migration */}
        <div style={styles.dualSection}>
          <div style={styles.dualIcon}><FaCloudUploadAlt /></div>
          <div style={styles.dualText}>
            <div style={styles.iconTitle}><FaCloudUploadAlt /> AWS cloud migrations</div>
            <p style={styles.text}>
              We ensure a seamless cloud adoption journey by handling all aspects of AWS migration from planning to optimization.
              Our certified engineers support strategic transitions to the cloud.
            </p>
            <ul style={styles.ul}>
              <li style={styles.li}>Strategic migration planning</li>
              <li style={styles.li}>AWS Well-Architected Framework assessments</li>
              <li style={styles.li}>Post-migration optimization</li>
              <li style={styles.li}>DevOps automation for enhanced efficiency</li>
            </ul>
          </div>
        </div>

        {/* Optimization */}
        <div style={styles.dualSection}>
          <div style={styles.dualIcon}><FaCogs /></div>
          <div style={styles.dualText}>
            <div style={styles.iconTitle}><FaCogs /> Cloud optimization and SRE</div>
            <p style={styles.text}>
              We help businesses reduce cloud costs, improve scalability, and optimize infrastructure through automation and Site Reliability Engineering practices.
            </p>
          </div>
        </div>

        {/* Disaster Recovery */}
        <div style={styles.dualSection}>
          <div style={styles.dualIcon}><FaShieldAlt /></div>
          <div style={styles.dualText}>
            <div style={styles.iconTitle}><FaShieldAlt /> Disaster recovery implementation</div>
            <p style={styles.text}>
              AWS offers various recovery options for critical applications. We work with your team to build a tailored disaster recovery strategy that ensures business continuity in the face of disruption.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={styles.ctaContainer}>
          <div style={styles.ctaIcon}><FaSyncAlt /></div>
          <h2 style={styles.ctaHeading}>Ready to transform your AWS strategy?</h2>
          <a href="/contact" style={{ textDecoration: 'none' }}>
            <button style={styles.button}>Contact Our Experts</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Cloudconsultingservices;
