import '../styles.css';
import { SettingsIcon } from './CustomIcons';

export function ContactInfoSection() {
    return (
        <section id='info-section-background' style={styles.sectionBackground}>
            <div id='info-section' style={styles.section}>
                <h4 id='info-section-logo' style={styles.logoText} className='font-montserrat'>LITERARI</h4>
                <div id='info-section-contacts-card'>
                    <h4 id='info-section-contacts-text' style={styles.headerText} className='font-montserrat'>SAY HELLO</h4>
                    <h6 id='info-section-email' style={styles.contacts} className='font-inter'>contact@literari.md</h6>
                    <h6 id='info-section-phone' style={styles.contacts} className='font-inter'>+373 603 91 882</h6>
                </div>
                <div id='info-section-social-media-card'>
                    <h4 id='info-section-social-media' style={styles.headerText} className='font-montserrat'>FIND US HERE</h4>
                    <a id='info-section-facebook-link' href='https://www.facebook.com/literari.md' target='_blank' style={styles.socialMediaComponent}>
                        <SettingsIcon id='info-section-facebook-icon' />
                        <h6 id='info-section-facebook-name' style={styles.contacts} className='font-inter'>Facebook</h6>
                    </a>
                    <a id='info-section-instagram-link' href='https://www.instagram.com/literari.md/' target='_blank' style={styles.socialMediaComponent}>
                        <SettingsIcon id='info-section-instagram-icon' />
                        <h6 id='info-section-instagram-name' style={styles.contacts} className='font-inter'>Instagram</h6>
                    </a>
                    <a id='info-section-linkedin-link' href='https://www.linkedin.com/company/literari/' target='_blank' style={styles.socialMediaComponent}>
                        <SettingsIcon id='info-section-linkedin-logo' />
                        <h6 id='info-section-linkedin-name' style={styles.contacts} className='font-inter'>LinkedIn</h6>
                    </a>
                </div>
            </div>
        </section>
    )
}

const styles = {
    sectionBackground: {
        height: '295px',
        background: '#666E61',
        display: 'flex'
    },
    section: {
        gap: '80px',
        display: 'flex',
        paddingTop: '80px'
    },
    logoText: {
        fontWeight: 800,
        fontSize: '32px',
        lineHeight: '39px',
        color: '#FFFFFF',
        margin: '0 0 0 80px'
    },
    headerText: {
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '27px',
        color: '#FFFFFF',
        margin: '0 0 10px 0'
    },
    contacts: {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '19px',
        color: '#FFFFFF',
        margin: '7px 0 7px 0'
    },
    socialMediaComponent: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none'
    }
} as const;
