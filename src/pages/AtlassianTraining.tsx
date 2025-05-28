import React from 'react';

const AtlassianTraining: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    page: {
      fontFamily: 'Segoe UI, sans-serif',
      color: '#111827',
    },
    hero: {
         backgroundColor: '#1e3a8a',
      textAlign: 'center',
      padding: '120px 20px 60px',
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: 700,
      color: '#ffffff',
      maxWidth: '1100px',
      margin: '0 auto',
      lineHeight: 1.3,
    },
    ctaSection: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      backgroundColor: '#fff',
      padding: '50px 20px 30px',
      textAlign: 'center',
    },
    ctaText: {
      fontSize: '24px',
      fontWeight: 700,
      color: '#0f172a',
    },
    ctaButton: {
      backgroundColor: '#0f62fe',
      color: '#fff',
      border: 'none',
      padding: '14px 28px',
      fontSize: '16px',
      fontWeight: 600,
      borderRadius: '8px',
      cursor: 'pointer',
    },
    section: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '40px 20px 80px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '28px',
      fontWeight: 700,
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '18px',
      color: '#555',
      lineHeight: 1.7,
      maxWidth: '900px',
      margin: '0 auto 30px',
    },
    icon: {
      width: '80px',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Tailored Training, Workshops, and <br /> Coaching Solutions
        </h1>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaText}>
          Get in touch with us to discuss your specific training needs:
        </div>
        <a href="/contact" style={{ textDecoration: 'none' }}>
        <button style={styles.ctaButton}>Contact Us</button></a>
      </section>

      {/* Body */}
      <section style={styles.section}>
        <h2 style={styles.heading}>
          Your Go-To Partner for Atlassian Training and Development
        </h2>
        <p style={styles.paragraph}>
          As a trusted provider of Atlassian training, AionNimbus has helped numerous organizations onboard new users,
          enhance role-based skills, support change initiatives, and optimize resources. We work closely with your team
          to achieve both immediate and long-term objectives through customized Atlassian training programs.
        </p>
      
      </section>
    </div>
  );
};

export default AtlassianTraining;
