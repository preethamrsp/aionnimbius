import React from 'react';

const CloudTrainingEnablement: React.FC = () => {
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
    paragraph: {
      fontSize: '18px',
      textAlign: 'justify',
      color: '#555',
      marginBottom: '30px',
    },
    heading: {
      fontSize: '30px',
      fontWeight: 700,
      marginBottom: '20px',
      color: '#002b7f',
    },
    flexRow: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '40px',
      justifyContent: 'space-between',
      marginBottom: '60px',
    },
    flexImage: {
      flex: 1,
      minWidth: '280px',
      textAlign: 'center',
    },
    flexContent: {
      flex: 2,
      minWidth: '300px',
    },
    ul: {
      paddingLeft: '20px',
      fontSize: '16px',
      color: '#555',
    },
    li: {
      marginBottom: '10px',
    },
    bold: {
      fontWeight: 600,
    },
    subHeading: {
      fontSize: '22px',
      fontWeight: 700,
      marginTop: '40px',
      marginBottom: '10px',
      color: '#002b7f',
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Cloud training and enablement</h1>
      </div>

      {/* Section 1 */}
      <section style={styles.section}>
        <p style={styles.paragraph}>
          Empower your teams with the skills and knowledge they need to excel in today’s dynamic cloud environments.
          At AionNimbus, our Cloud Training and Enablement services are designed to help organizations of all sizes
          effectively leverage cloud technologies, driving innovation, efficiency, and business growth.
        </p>

        <h2 style={styles.heading}>Tailored Cloud Training Programs</h2>
        <p style={styles.paragraph}>
          We offer customized training programs that are built around your organization’s specific needs and cloud infrastructure.
          Whether you’re using AWS, Azure, Google Cloud, or a hybrid setup, our certified instructors provide in-depth,
          hands-on learning experiences that cover everything from cloud basics to advanced deployment and management strategies.
        </p>
      </section>

      {/* Section 2 */}
      <section style={styles.section}>
        <div style={styles.flexRow}>
          <div style={styles.flexImage}>
            <img
              src="/images/cloud-training-1.png"
              alt="Training Illustration"
              style={{ width: '100%', maxWidth: '300px' }}
            />
          </div>
          <div style={styles.flexContent}>
            <h2 style={styles.heading}>Key Training Areas</h2>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <span style={styles.bold}>Cloud Fundamentals:</span> Build a solid foundation by understanding core cloud concepts, services, and best practices.
              </li>
              <li style={styles.li}>
                <span style={styles.bold}>Cloud Architecture & Design:</span> Design scalable, reliable, and secure cloud architectures aligned with business objectives.
              </li>
              <li style={styles.li}>
                <span style={styles.bold}>DevOps & Automation:</span> Master workflows, CI/CD pipelines, and infrastructure as code for efficient cloud operations.
              </li>
              <li style={styles.li}>
                <span style={styles.bold}>Security & Compliance:</span> Implement security measures, manage compliance, and protect your data effectively.
              </li>
              <li style={styles.li}>
                <span style={styles.bold}>Cost Optimization:</span> Maximize performance while minimizing spend through efficient resource management.
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.flexRow}>
          <div style={styles.flexContent}>
            <h2 style={styles.heading}>Hands-On Cloud Enablement Workshops</h2>
            <p style={styles.paragraph}>
              Our interactive workshops focus on real-world cloud challenges and solutions. Participants gain hands-on experience with
              cloud platforms, tools, and techniques, allowing them to apply their newfound knowledge directly to their work.
            </p>
          </div>
          <div style={styles.flexImage}>
            <img
              src="/images/cloud-training-2.png"
              alt="Hands-on Workshop"
              style={{ width: '100%', maxWidth: '300px' }}
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={styles.section}>
        <div style={styles.flexRow}>
          <div style={styles.flexImage}>
            <img
              src="/images/cloud-training-3.png"
              alt="Certifications"
              style={{ width: '100%', maxWidth: '260px' }}
            />
          </div>
          <div style={styles.flexContent}>
            <h2 style={styles.heading}>Certifications & Continuous Learning</h2>
            <p style={styles.paragraph}>
              We support your team’s growth by offering certification programs for popular cloud platforms like AWS, Azure, and
              Google Cloud. Our ongoing learning resources ensure your team stays up to date with the latest best practices and innovations.
            </p>
          </div>
        </div>

        <div style={styles.flexRow}>
          <div style={styles.flexContent}>
            <h2 style={styles.heading}>Benefits of Cloud Training & Enablement</h2>
            <ul style={styles.ul}>
              <li style={styles.li}>Increased team productivity and efficiency</li>
              <li style={styles.li}>Accelerated cloud adoption and transformation</li>
              <li style={styles.li}>Enhanced security and compliance expertise</li>
              <li style={styles.li}>Improved decision-making and problem-solving</li>
              <li style={styles.li}>Faster time-to-market for cloud initiatives</li>
            </ul>
          </div>
          <div style={styles.flexImage}>
            <img
              src="/images/cloud-training-4.png"
              alt="Enablement Benefits"
              style={{ width: '100%', maxWidth: '260px' }}
            />
          </div>
        </div>

        <h3 style={styles.subHeading}>Why Choose AionNimbus for Cloud Training?</h3>
        <p style={styles.paragraph}>
          Our training programs are delivered by experienced cloud professionals who understand the intricacies of modern cloud
          environments. We focus on practical, actionable knowledge that your teams can implement immediately, driving results from day one.
        </p>

        <h3 style={styles.subHeading}>Ready to Elevate Your Team’s Cloud Expertise?</h3>
        <p style={styles.paragraph}>
          Partner with AionNimbus to develop a high-performing, cloud-savvy team capable of driving innovation and delivering exceptional results.
        </p>
      </section>
    </div>
  );
};

export default CloudTrainingEnablement;
