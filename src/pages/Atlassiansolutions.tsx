import React from 'react';

const Atlassiansolutions: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    page: {
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
    },
    hero: {
        backgroundColor: '#1e3a8a',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '100px 60px 0 60px',
      flexWrap: 'wrap',
      gap: '40px',
    },
    textContainer: {
      flex: '1 1 500px',
      minWidth: '280px',
      maxWidth: '600px',
      textAlign: 'left',
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '20px',
      lineHeight: 1.3,
      color: '#ffffff',
    },
    heroDescription: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#ffffff',
    },
    imageContainer: {
      flex: '1 1 320px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heroImage: {
      width: '320px',
      maxWidth: '100%',
      height: 'auto',
    },

    // Section 2
    section: {
      padding: '80px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: '18px',
      fontWeight: 500,
      color: '#002b7f',
      marginBottom: '10px',
    },
    title: {
      fontSize: '36px',
      fontWeight: 700,
      marginBottom: '50px',
    },
    grid: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '40px',
    },
    card: {
      flex: '1 1 220px',
      maxWidth: '260px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    icon: {
      width: '60px',
      height: '60px',
      objectFit: 'contain',
      marginBottom: '20px',
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: '15px',
    },
    list: {
      listStyleType: 'disc',
      paddingLeft: '0px',
      fontSize: '15px',
      color: '#666',
      textAlign: 'center',
    },
    listItem: {
      marginBottom: '10px',
      listStylePosition: 'inside',
    },

    // Section 3
    section3Title: {
      fontSize: '36px',
      fontWeight: 700,
      color: '#0505b5',
      marginBottom: '20px',
      textAlign: 'center',
    },
    section3Subtitle: {
      fontSize: '18px',
      lineHeight: 1.7,
      maxWidth: '900px',
      margin: '0 auto 60px',
      color: '#333',
      textAlign: 'center',
    },
    section3Subheading: {
      fontSize: '28px',
      fontWeight: 700,
      color: '#0505b5',
      marginBottom: '50px',
      textAlign: 'center',
    },
    section3ColumnGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '40px',
      textAlign: 'left',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    section3Card: {
      flex: '1 1 280px',
      maxWidth: '360px',
    },
    section3CardTitle: {
      fontSize: '18px',
      fontWeight: 700,
      marginBottom: '10px',
      textDecoration: 'underline',
    },
    section3CardText: {
      fontSize: '16px',
      color: '#555',
      lineHeight: 1.6,
    },
  };

  return (
    <>
      {/* Section 1: Hero */}
      <div style={styles.hero} className="atlassian-hero">
        <div style={styles.textContainer}>
          <h1 style={styles.heroTitle}>Professional Atlassian Consulting Services</h1>
          <p style={styles.heroDescription}>
            Tap into our extensive IT expertise and the skills of Certified Atlassian Consultants to streamline
            your Atlassian tools and address even the most complex business challenges effectively.
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img
            src="/images/Atlassian-1-2.webp"
            alt="Atlassian consulting graphic"
            style={styles.heroImage}
          />
        </div>
      </div>

      {/* Section 2: How We Help */}
      <section style={styles.section}>
        <p style={styles.subtitle}>How We Help</p>
        <h2 style={styles.title}>Atlassian Customers</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <img src="/images/Planning-1.jpeg" alt="Planning" style={styles.icon} />
            <div style={styles.cardTitle}>Planning</div>
            <ul style={styles.list}>
              <li style={styles.listItem}>Personalized assessments</li>
              <li style={styles.listItem}>License planning & optimization</li>
              <li style={styles.listItem}>Customized success roadmaps</li>
            </ul>
          </div>

          <div style={styles.card}>
            <img src="/images/planning2.png" alt="Implementation" style={styles.icon} />
            <div style={styles.cardTitle}>Implementation</div>
            <ul style={styles.list}>
              <li style={styles.listItem}>Requirement gathering and setup</li>
              <li style={styles.listItem}>Data and platform migration</li>
              <li style={styles.listItem}>Custom app development</li>
            </ul>
          </div>

          <div style={styles.card}>
            <img src="/images/planning3.png" alt="Optimization" style={styles.icon} />
            <div style={styles.cardTitle}>Optimization</div>
            <ul style={styles.list}>
              <li style={styles.listItem}>Tooling & configuration recommendations</li>
              <li style={styles.listItem}>Best practice consulting</li>
              <li style={styles.listItem}>Workshops and coaching</li>
            </ul>
          </div>

          <div style={styles.card}>
            <img src="/images/lanning4.png" alt="Ongoing Support" style={styles.icon} />
            <div style={styles.cardTitle}>Ongoing Support</div>
            <ul style={styles.list}>
              <li style={styles.listItem}>Platform monitoring and maintenance</li>
              <li style={styles.listItem}>Training for users and admins</li>
              <li style={styles.listItem}>Continuous license management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: ITSM with Atlassian */}
      <section style={{ padding: '80px 20px' }}>
        <h2 style={styles.section3Title}>ITSM with Atlassian Tools</h2>
        <p style={styles.section3Subtitle}>
          AionNimbus provides expertise in implementing, training, process, and optimization workflows for Atlassian tools.
          We also assist in migrating from other ITSM platforms to Atlassian solutions.
        </p>
        <h3 style={styles.section3Subheading}>Maximizing Your Atlassian Investment</h3>

        <div style={styles.section3ColumnGrid}>
          <div style={styles.section3Card}>
            <h4 style={styles.section3CardTitle}>▲ Optimized ITSM Solutions</h4>
            <p style={styles.section3CardText}>
              With Jira, we help you streamline IT operations, improve team collaboration, and deliver outstanding service
              to both customers and stakeholders. Partner with AionNimbus and transform your ITSM processes for greater efficiency today!
            </p>
          </div>

          <div style={styles.section3Card}>
            <h4 style={styles.section3CardTitle}>▲ Seamless Cloud Migration</h4>
            <p style={styles.section3CardText}>
              We simplify the entire migration process. Whether you’re moving to or from Atlassian Cloud, or integrating legacy systems,
              our approach ensures a smooth and secure data transition.
            </p>
          </div>

          <div style={styles.section3Card}>
            <h4 style={styles.section3CardTitle}>▲ Empowering Atlassian Training</h4>
            <p style={styles.section3CardText}>
              Our tailored training programs equip your teams with the skills they need to fully leverage Atlassian products.
              From foundational usage to advanced techniques, AionNimbus supports you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Responsive styling */}
      <style>
        {`
          @media (max-width: 768px) {
            .atlassian-hero {
              flex-direction: column;
              padding: 60px 20px 0 20px;
              text-align: center;
            }

            .atlassian-hero h1 {
              font-size: 28px !important;
              text-align: center;
            }

            .atlassian-hero p {
              font-size: 16px !important;
              text-align: center;
            }

            section ul {
              padding-left: 0 !important;
            }

            section h4 {
              text-align: center !important;
            }

            section div[style*='max-width: 360px'] {
              margin: 0 auto;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default Atlassiansolutions;
