import React from 'react';

const AtlassianImplementationServices: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    page: {
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
    },
    hero: {
        backgroundColor: '#1e3a8a',
      textAlign: 'center',
      padding: '120px 20px 60px 20px',
    },
    heroTitle: {
      fontSize: '42px',
      fontWeight: 700,
      color: '#ffffff',
      margin: 0,
    },
    section: {
      padding: '60px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center',
    },
    sectionHeading: {
      fontSize: '20px',
      fontWeight: 600,
      color: '#2b55fb',
      marginBottom: '15px',
    },
    paragraph: {
      fontSize: '16px',
      color: '#555',
      lineHeight: 1.7,
      marginBottom: '40px',
    },
    listSection: {
      padding: '20px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    listTitle: {
      textAlign: 'center',
      fontSize: '22px',
      fontWeight: 600,
      color: '#2b55fb',
      marginBottom: '30px',
    },
    list: {
      listStyleType: 'disc',
      paddingLeft: '40px',
      fontSize: '18px',
      color: '#555',
      lineHeight: 2,
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Atlassian Implementation Services</h1>
      </div>

      {/* Content Sections */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>
          Revolutionizing Digital Operations with Seamless Integration
        </h2>
        <p style={styles.paragraph}>
          Challenges like inconsistent data, delayed updates, security vulnerabilities, and inefficient workflows due to poor tool integration
          are all too common for business leaders and decision-makers. These issues often lead to miscommunication, reduced productivity,
          and missed opportunities, ultimately impacting competitiveness. AionNimbus offers integration services designed to empower leaders
          to overcome these obstacles and drive success.
        </p>

        <h2 style={styles.sectionHeading}>AionNimbus Integration Architecture Services</h2>
        <p style={styles.paragraph}>
          We provide comprehensive integration services for the full range of Atlassian products, including Jira Software, Jira Service Management,
          Confluence, Bitbucket, and Trello. Our team ensures seamless interoperability between these tools, creating a unified platform that
          aligns with your business processes and objectives.
        </p>

        <h2 style={styles.sectionHeading}>Atlassian Integrations with CRM, ERP, and DevOps Tools</h2>
        <p style={styles.paragraph}>
          In addition to Atlassian’s suite, we specialize in integrating Atlassian products with a variety of third-party applications,
          such as CRM systems, ERP platforms, and other enterprise software. AionNimbus ensures all your tools function together smoothly,
          delivering a cohesive ecosystem.
        </p>

        <h2 style={styles.sectionHeading}>DevOps Integration Solutions</h2>
        <p style={styles.paragraph}>
          We help integrate Jira with your CI/CD pipelines, monitoring tools, and other DevOps solutions to create an efficient and streamlined
          development environment.
        </p>
      </section>

      {/* Benefits List */}
      <section style={styles.listSection}>
        <h2 style={styles.listTitle}>Key Benefits for Business Leaders and Decision-Makers</h2>
        <ul style={styles.list}>
          <li>Enhanced Efficiency</li>
          <li>Improved Collaboration</li>
          <li>Greater Visibility</li>
          <li>Scalability & Flexibility</li>
          <li>Data-Driven Insights</li>
          <li>Security & Compliance</li>
        </ul>
      </section>
    </div>
  );
};

export default AtlassianImplementationServices;
