import '../styles.css';
import { BookIlustration, CalendarIlustration, Handslustration, InfiniteIlustration, PlanetIlustration, StarIlustration } from '../assets';

export function WhatsIncludedSection() {
    const component_data = [
        {
            ilustration: BookIlustration,
            title: 'Physical books',
            description: 'That’s it! With love for you, our “old school” bookworm'
        },
        {
            ilustration: InfiniteIlustration,
            title: 'Limitless genres',
            description: 'The art of persuasion, Stephen King or even the Effective C# book – we’ve got you covered'
        },
        {
            ilustration: PlanetIlustration,
            title: 'Language flexibility',
            description: 'Pick the language you want your books to be in and say no more'
        },
        {
            ilustration: CalendarIlustration,
            title: 'Up to date titles',
            description: 'No old titles, we’ll update them systematically for you'
        },
        {
            ilustration: StarIlustration,
            title: 'Your wish is our law',
            description: 'No delivery until you are happy with the books list, so start taking notes'
        },
        {
            ilustration: Handslustration,
            title: 'Real deal',
            description: 'The more books you have + the longer rent period = best deal ever'
        },
    ]

    return (
        <section id='whats-included-section-background' style={styles.sectionBackground}>
            <div id='whats-included-section' style={styles.section}>
                <p id='whats-included-text' style={styles.headerText} className='font-montserrat'>WHAT’S INCLUDED</p>
                <div id='whats-included-grid' style={styles.grid}>
                    {component_data?.map(component => (
                        <div style={styles.grid_component}>
                            <img id='our-libraries-librabry-image-2' style={styles.ilustration} src={component.ilustration.default} alt='' />
                            <p id={`whats-included-${component.title.toLowerCase()}-title`} style={styles.ilustration_title} className='font-montserrat'>{component.title}</p>
                            <p id={`whats-included-${component.title.toLowerCase()}-description`} style={styles.ilustration_description} className='font-inter'>{component.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const styles = {
    sectionBackground: {
        height: '770px',
        background: '#F9F6F2',
        display: 'flex',
        position: 'relative'
    },
    section: {
        display: 'flex',
        flexFlow: 'column',
        width: '100%',
        textAlign: 'center',
        padding: '0 80px 0 80px'
    },
    headerText: {
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '54px',
        color: '#666E61'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gap: '90px 250px',
        justifyContent: 'center',
        alignContent: 'center',
        flex: '1 1 auto',
        padding: '0 60px 0 60px'
    },
    grid_component: {
        textAlign: 'center',
    },
    ilustration: {
        width: '140px',
        height: '140px'
    },
    ilustration_title: {
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#1E2029',
    },
    ilustration_description: {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#454545',
    }
} as const;
