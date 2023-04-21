import '../styles.css';

export function AboutUsSection() {
    return (
        <section id='about-us-section' style={styles.sectionBackground}>
            <div style={styles.section}>
                <h4 id='about-us-text' style={styles.aboutUsText} className='font-montserrat'>About us</h4>
                <h2 id='about-us-motto' style={styles.mottoText} className='font-inter'>We create your environment at the office
                    <br />place – smart, comfy and employee
                    <br />growth-oriented.</h2>
                <h4 id='about-us-logo' style={styles.logoText} className='font-inter'>– LITERARI team –</h4>
            </div>
        </section>
    )
}

const styles = {
    sectionBackground: {
        height: '28.8125em',
        background: '#666E61',
        display: 'flex'
    },
    section: {
        display: 'inline-block',
        width: '100%',
        textAlign: 'center'
    },
    aboutUsText: {
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '54px',
        color: '#F9F6F2',
    },
    mottoText: {
        fontWeight: 500,
        fontSize: '48px',
        lineHeight: '58px',
        color: '#F9F6F2',
    },
    logoText: {
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: '22px',
        color: '#F0F0F0'
    }
} as const;
