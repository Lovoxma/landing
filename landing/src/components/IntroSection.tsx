import '../styles.css';
import libraryImage from '../assets/test-image.jpg';

export function IntroSection() {
    return (
        <section style={styles.sectionBackground}>
            
            <img style={styles.image} src={libraryImage} alt='' />
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
    image: {
        width: '850px',
        height: '500px',
        position: 'absolute',
        right: '80px',
        top: '130px'
    }
} as const;
