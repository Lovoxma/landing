import '../styles.css';
import { BannerImage } from '../assets';

export function IntroSection() {
    return (
        <section id='intro-section' style={styles.sectionBackground}>
            <div id='intro-card' style={styles.card}>
                <div id='intro-card-content' style={styles.content}>
                    <p id='intro-greetings-text' style={styles.greetingsText} className='font-montserrat'>Time to meet your</p>
                    <p id='intro-office-text' style={styles.officeText} className='font-montserrat'>CUSTOM OFFICE LIBRARY</p>
                    <p id='intro-description-text' style={styles.descriptionText} className='font-inter'>Flexible and fully customed – the best library
                        <br />your office can have!</p>
                    <button id='intro-button' style={styles.button} className='font-montserrat'>Contact us</button>
                </div>
            </div>
            <img id='intro-librabry-image' style={styles.image} src={BannerImage.default} alt='' />
        </section>
    )
}

const styles = {
    sectionBackground: {
        height: '678px',
        background: '#F9F6F2',
        display: 'flex',
        position: 'relative'
    },
    card: {
        zIndex: 2,
        background: '#FFFFFF',
        width: '710px',
        height: '400px',
        position: 'absolute',
        left: '80px',
        top: '64px'
    },
    content: {
        padding: '40px',
        height: 'calc(100% - 80px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    greetingsText: {
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '48px',
        color: '#1E2029',
        margin: '0 0 0 0'
    },
    officeText: {
        fontWeight: 600,
        fontSize: '56px',
        lineHeight: '72px',
        color: '#1E2029',
        margin: '0 0 0 0'
    },
    descriptionText: {
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '27px',
        color: '#1E2029',
        margin: '0 0 0 0'
    },
    button: {
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#F9F6F2',

        width: '280px',
        height: '50px',
        background: '#666E61',
        borderRadius: '50px',
        border: 0
    },
    image: {
        zIndex: 1,
        width: '850px',
        height: '500px',
        position: 'absolute',
        right: '80px',
        top: '130px'
    }
} as const;
