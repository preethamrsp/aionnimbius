import React from 'react';

const TalentAcademyPage: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    header: {
      backgroundColor: '#1e3a8a',
      height: '120px',
    },
    titleWrapper: {
  backgroundColor: '#1e3a8a',
      textAlign: 'center',
      padding: '40px 20px 60px',
    },
    heroTitle: {
      color: '#ffffff',
      fontSize: '2.8rem',
      fontWeight: 700,
      margin: 0,
    },
    container: {
      padding: '40px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    section: {
      marginBottom: '50px',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      marginBottom: '10px',
      color: '#0b1c39',
    },
    subTitle: {
      fontSize: '1.3rem',
      fontWeight: 600,
      marginTop: '30px',
      color: '#0b1c39',
    },
    paragraph: {
      fontSize: '1rem',
      color: '#333',
      lineHeight: 1.7,
      marginBottom: '10px',
    },
    list: {
      paddingLeft: '20px',
      marginBottom: '20px',
      color: '#555',
    },
    listItem: {
      marginBottom: '10px',
    },
    buttonContainer: {
      marginTop: '30px',
      textAlign: 'center',
    },
    blueButton: {
      backgroundColor: '#4d7efb',
      color: '#ffffff',
      padding: '14px 30px',
      fontSize: '1rem',
      borderRadius: '6px',
      border: 'none',
      textDecoration: 'none',
      cursor: 'pointer',
      display: 'inline-block',
    },
  };

  return (
    <>
      {/* Top header strip */}
      <div style={styles.header}></div>

      {/* Title area */}
      <div style={styles.titleWrapper}>
        <h1 style={styles.heroTitle}>Talent Academy</h1>
      </div>

      {/* Page content */}
      <main style={styles.container}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Talent Academy: Empowering Tomorrow’s Cloud and DevOps Experts
          </h2>
          <p style={styles.paragraph}>
            At AionNimbus Talent Academy, we bridge the gap between education and real-world application,
            training individuals to be ready for mission-critical roles in cloud, infrastructure, SRE, DevOps,
            and beyond. Our unique approach combines technical skill development with a deep understanding of
            business processes, KPIs, SLAs, and client interaction to ensure success in today’s fast-paced
            digital landscape.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Tailored Training for Every Experience Level</h2>
          <p style={styles.paragraph}>
            We offer specialized training programs based on experience levels to ensure that every learner,
            whether fresh out of school or seasoned in the field, gains the knowledge and skills necessary to
            excel in their role.
          </p>
          <h3 style={styles.subTitle}>Freshman Program: Building the Foundations</h3>
          <p style={styles.paragraph}>
            Our Freshman program is designed for individuals who are new to the world of technology and cloud
            computing. This program focuses on the fundamentals of cloud infrastructure, DevOps tools, and basic
            business processes, preparing participants to step confidently into entry-level roles.
          </p>
          <h3 style={styles.subTitle}>Key Focus Areas</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Introduction to Cloud Platforms (AWS, Azure, Google Cloud)</li>
            <li style={styles.listItem}>Fundamentals of SRE, DevOps, and Infrastructure Management</li>
            <li style={styles.listItem}>Basics of Automation, CI/CD Pipelines, and Monitoring Tools</li>
            <li style={styles.listItem}>Understanding Business Processes, KPIs, and SLAs</li>
            <li style={styles.listItem}>Hands-on Labs with Real-World Use Cases</li>
            <li style={styles.listItem}>
              Soft Skills Development: Client Interaction, Communication, and Team Collaboration
            </li>
          </ul>
          <p style={styles.paragraph}>
            By the end of this program, participants will be ready to take on junior roles in the industry, with
            a strong foundation in both technical and business skills.
          </p>
        </section>

        <section style={styles.section}>
          <h3 style={styles.subTitle}>Intermediate Program: Expanding Skills and Knowledge</h3>
          <p style={styles.paragraph}>
            For those with some experience in technology, our Intermediate program builds on foundational
            knowledge and dives deeper into specialized tools and processes.
          </p>
          <h3 style={styles.subTitle}>Key Focus Areas</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Advanced Cloud Architecture and Infrastructure Design</li>
            <li style={styles.listItem}>
              DevOps Automation: IaC, Continuous Integration/Delivery (CI/CD)
            </li>
            <li style={styles.listItem}>In-depth Training on Monitoring, Logging, and Observability Tools</li>
            <li style={styles.listItem}>
              Client Engagement: Managing KPIs, SLAs, and Client Expectations
            </li>
            <li style={styles.listItem}>Real-World Projects with Industry-Relevant Use Cases</li>
            <li style={styles.listItem}>
              Problem-Solving in High-Pressure, Mission-Critical Environments
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h3 style={styles.subTitle}>Experienced Program: Mastery for Industry Leaders</h3>
          <p style={styles.paragraph}>
            Our Experienced program is aimed at seasoned professionals looking to sharpen their skills and take
            on leadership roles in cloud and infrastructure operations.
          </p>
          <h3 style={styles.subTitle}>Key Focus Areas</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Architecting and Scaling Cloud Infrastructure for Large Enterprises
            </li>
            <li style={styles.listItem}>
              DevOps Leadership: Managing Teams, Workflows, and Automation at Scale
            </li>
            <li style={styles.listItem}>
              Advanced Observability, Incident Management, and SRE Best Practices
            </li>
            <li style={styles.listItem}>
              Driving Business Value through KPIs, SLAs, and Strategic Cloud Adoption
            </li>
            <li style={styles.listItem}>
              Client Relationship Management: KPIs, Negotiation, and Outcome-Driven Approaches
            </li>
            <li style={styles.listItem}>
              Masterclass in Cloud Security, Cost Optimization, and Compliance
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Real-World Readiness</h2>
          <p style={styles.paragraph}>
            At AionNimbus Talent Academy, we don’t just focus on technical training. Our programs are designed
            to prepare individuals for real-world business environments. Each course integrates hands-on labs,
            real-world use cases, and business process training to ensure that participants are not only
            technically proficient but also understand how to deliver value to clients and businesses.
          </p>
          <p style={styles.paragraph}>
            Whether you’re just starting out, looking to expand your skills, or ready to take on a leadership
            role, AionNimbus Talent Academy offers the training and support you need to succeed in today’s
            rapidly evolving cloud and infrastructure landscape.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Mentoring Sessions by AionNimbus</h2>
          <p style={styles.paragraph}>
            After engaging with numerous tech professionals, we discovered that many are eager to transition
            their careers to cloud-native technologies but need proper guidance. This inspired us to launch the{' '}
            <strong>Mentoring Sessions</strong> initiative, where seasoned cloud and DevOps experts from
            AionNimbus provide personalized coaching to help developers make the leap.
          </p>
          <p style={styles.paragraph}>
            Ready to take the next step in your career? <strong>Talk to Us today!</strong>
          </p>
          <div style={styles.buttonContainer}>
            <a href="#" style={styles.blueButton}>
              Explore Programs
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default TalentAcademyPage;
