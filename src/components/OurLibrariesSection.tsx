import '../styles.css';
import { PurcariLibraryImage1, PurcariLibraryImage2, PurcariLibraryImage3 } from '../assets';

export function OurLibrariesSection() {
    return (
        <section id='our-libraries-section-background' style={styles.sectionBackground}>
            <div id='our-libraries-section' style={styles.section}>
                <p id='our-libraries-text' style={styles.headerText} className='font-montserrat'>OUR LIBRARIES</p>
                <div id='our-libraries-image-container' style={styles.imageContainer}>
                    <img id='our-libraries-librabry-image-1' style={styles.sideImage} src={PurcariLibraryImage1.default} alt='' />
                    <img id='our-libraries-librabry-image-3' style={styles.image} src={PurcariLibraryImage3.default} alt='' />
                    <img id='our-libraries-librabry-image-2' style={styles.sideImage} src={PurcariLibraryImage2.default} alt='' />
                </div>
            </div>
        </section>
    )
}

const styles = {
    sectionBackground: {
        height: '779px',
        background: '#FFFFFF',
        display: 'flex',
        position: 'relative'
    },
    section: {
        display: 'flex',
        flexFlow: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 80px 0 80px'
    },
    headerText: {
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '54px',
        color: '#666E61'
    },
    imageContainer: {
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: 'auto auto auto',
        width: '100%',
    },
    sideImage: {
        width: '430px',
        height: '430px'
    },
    image: {
        width: '385px',
        height: '530px'
    }
} as const;
