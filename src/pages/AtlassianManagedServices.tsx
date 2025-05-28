import React from 'react';

const AtlassianManagedServices: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    page: {
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
    },
    hero: {
      backgroundColor: '#4d7efb',
      textAlign: 'center',
      padding: '120px 20px 40px 20px',
    },
    heroTitle: {
      fontSize: '42px',
      fontWeight: 700,
      color: '#ffffff',
      marginBottom: '20px',
    },
    heroSubtitle: {
      fontSize: '20px',
      fontWeight: 600,
      color: '#ffffff',
      maxWidth: '900px',
      margin: '0 auto',
    },
    section: {
      padding: '60px 20px 40px 20px',
      maxWidth: '1100px',
      margin: '0 auto',
      textAlign: 'center',
    },
    heading: {
      fontSize: '28px',
      fontWeight: 700,
      marginBottom: '30px',
      color: '#0f172a',
    },
    paragraph: {
      fontSize: '18px',
      lineHeight: 1.75,
      color: '#555',
      maxWidth: '950px',
      margin: '0 auto',
    },

    // Managed Services Section
    serviceBlock: {
      padding: '0px 20px 80px 20px',
      maxWidth: '1100px',
      margin: '0 auto',
      textAlign: 'center',
    },
    serviceHeading: {
      fontSize: '32px',
      fontWeight: 700,
      marginBottom: '10px',
      color: '#0f172a',
    },
    serviceSubheading: {
      fontSize: '20px',
      fontWeight: 600,
      color: '#0f172a',
      marginBottom: '10px',
    },
    serviceDescription: {
      fontSize: '16px',
      color: '#666',
      maxWidth: '700px',
      margin: '0 auto 50px auto',
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '40px',
    },
    card: {
      flex: '1 1 220px',
      maxWidth: '250px',
      textAlign: 'center',
    },
    iconWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '15px',
    },
    icon: {
      width: '60px',
      height: '60px',
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: 600,
      marginBottom: '10px',
    },
    cardText: {
      fontSize: '15px',
      color: '#555',
      lineHeight: 1.6,
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Atlassian Managed Services & Support</h1>
        <p style={styles.heroSubtitle}>
          Providing dedicated, hands-on support to deliver the right solutions for your organization
        </p>
      </div>

      {/* Section: Overview */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Effectively Managing and Scaling Your Atlassian Tools</h2>
        <p style={styles.paragraph}>
          Organizations of all sizes and industries rely on Atlassian tools to address complex business needs.
          However, as companies grow, managing and scaling these tools can become increasingly challenging.
          That’s where AionNimbus’ Managed Services step in. We provide essential support to help organizations
          maximize the value of their Atlassian investments, offering peace of mind throughout the process.
          <br /><br />
          From the outset, we collaborate closely to define your specific requirements, key focus areas, scope,
          and expectations. Whether you need to bridge resource or expertise gaps, our team is equipped to
          provide day-to-day management and strategic support for your Atlassian tools, whether in Cloud,
          Data Center, or hybrid environments. Let AionNimbus, paired with Atlassian solutions, drive your
          digital transformation forward.
        </p>
      </section>

      {/* Section: Managed Services Benefits */}
      <section style={styles.serviceBlock}>
        <h2 style={styles.serviceHeading}>What you get with Managed Services</h2>
        <h3 style={styles.serviceSubheading}>Taking Care of the Operational Heavy Lifting</h3>
        <p style={styles.serviceDescription}>
          AionNimbus’ Atlassian Managed Services enable your business to perform at its peak by providing
          comprehensive administration and support for your tools
        </p>

        <div style={styles.grid}>
          {/* Card 1 */}
          <div style={styles.card}>
            <div style={styles.iconWrapper}>
              <img src="/images/1.png" alt="Admin Icon" style={styles.icon} />
            </div>
            <div style={styles.cardTitle}>Administration</div>
            <div style={styles.cardText}>
              We handle all system administration and maintenance tasks related to your Atlassian suite,
              ensuring optimal performance and reliability across your environment.
            </div>
          </div>

          {/* Card 2 */}
          <div style={styles.card}>
            <div style={styles.iconWrapper}>
              <img src="/images/2.png" alt="Support Icon" style={styles.icon} />
            </div>
            <div style={styles.cardTitle}>Support</div>
            <div style={styles.cardText}>
              From handling service requests to managing escalations and incident resolution, our team ensures
              your Atlassian tools run smoothly and efficiently at all times.
            </div>
          </div>

          {/* Card 3 */}
          <div style={styles.card}>
            <div style={styles.iconWrapper}>
              <img src="/images/3.png" alt="License Icon" style={styles.icon} />
            </div>
            <div style={styles.cardTitle}>License Management</div>
            <div style={styles.cardText}>
              AionNimbus simplifies licensing by managing everything from selection and purchasing to consolidating
              and renewing licenses, ensuring there are no disruptions in service.
            </div>
          </div>

          {/* Card 4 */}
          <div style={styles.card}>
            <div style={styles.iconWrapper}>
              <img src="/images/4.png" alt="Optimization Icon" style={styles.icon} />
            </div>
            <div style={styles.cardTitle}>Optimization</div>
            <div style={styles.cardText}>
              We configure, integrate, and optimize Atlassian tools to match your unique business needs,
              automating workflows and processes to boost efficiency and productivity.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AtlassianManagedServices;
