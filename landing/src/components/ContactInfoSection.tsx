import '../styles.css';

export function ContactInfoSection() {
    const social_media_data = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/literari.md',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/literari.md/',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/company/literari/',
        }
    ]
    return (
        <section id='info-section-background' style={styles.sectionBackground}>
            <div id='info-section' style={styles.section}>
                <p id='info-section-logo' style={styles.logoText} className='font-montserrat'>LITERARI</p>
                <div id='info-section-contacts-card'>
                    <p id='info-section-contacts-text' style={styles.headerText} className='font-montserrat'>SAY HELLO</p>
                    <p id='info-section-email' style={styles.contacts} className='font-inter'>contact@literari.md</p>
                    <p id='info-section-phone' style={styles.contacts} className='font-inter'>+373 603 91 882</p>
                </div>
                <div id='info-section-social-media-card'>
                    <p id='info-section-social-media' style={styles.headerText} className='font-montserrat'>FIND US HERE</p>
                    {social_media_data?.map(data => (
                        <a id={`info-section-${data.name.toLowerCase()}-link`} href={data.url} target='_blank' style={styles.socialMediaComponent}>
                            <p id={`info-section-${data.name.toLowerCase()}-name`} style={styles.contacts} className='font-inter'>{data.name}</p>
                        </a>
                    ))}
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
