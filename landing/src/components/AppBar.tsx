import '../styles.css';

interface AppBarLabelParams {
    to: string;
    name: string;
    sectionId: string;
}

export function AppBar() {

    const labelParams: AppBarLabelParams[] = [
        {
            to: "/abous-us",
            name: "Abous Us",
            sectionId: '#about-us-section-background'
        },
        {
            to: "/our-services",
            name: "Our services",
            sectionId: '#whats-included-section-background'
        },
        {
            to: "/libraries",
            name: "Libraries",
            sectionId: '#our-libraries-section-background'
        }
    ]

    const handleClickScrollToSection = (sectionId: string) => {
        const anchor = document.querySelector(sectionId)
        anchor?.scrollIntoView({ behavior: 'smooth', block: 'center'})
    }
    return (
        <>
            <header id='app-bar-header' style={{ ...styles.appBar, ...styles.appBarHeight }}>
                <div id='app-bar-content' style={styles.content} className='content-padding'>
                    <h2 id='app-bar-logo-name' style={styles.logoText} className='font-montserrat'>LITERARI</h2>
                    <ul id='app-bar-navigation-lables' style={styles.navigationLable}>
                        {labelParams.map(label => (
                            <p id={`${label.name.toLocaleLowerCase()}-navigation`} onClick={() => handleClickScrollToSection(label.sectionId)} style={styles.navigationTag} className='font-montserrat'>{label.name}</p>
                        ))}
                        <button id='quote-button' style={styles.quoteButton} className='font-montserrat' onClick={() => handleClickScrollToSection('#get-a-quote-section-background')} >Get a quote</button>
                    </ul>
                </div>
            </header>
            <div id='hidden-block-app-bar' style={styles.appBarHeight}></div>
        </>
    )
}

const styles = {
    appBarHeight: {
        height: '5.625em',
    },
    appBar: {
        background: '#FFFFFF',
        display: 'flex',
        position: 'fixed',
        boxShadow: '0 0.125em 0.625em rgba(0, 0, 0, 0.06)',
        width: '100%',
        zIndex: 100
    },
    content: {
        justifyContent: 'space-between',
        display: 'flex',
        width: 'inherit',
        alignItems: 'center'
    },
    logoText: {
        color: '#666E61',
        fontWeight: 800,
        fontSize: '2em',
        lineHeight: '2.4375em',
        margin: 0
    },
    navigationLable: {
        display: 'flex',
        margin: 0,
        alignItems: 'center'
    },
    navigationTag: {
        color: '#666E61',
        fontWeight: 600,
        fontSize: '1.125em',
        lineHeight: '1.6875em',
        margin: '0 1.5625em 0 0',
        cursor: 'pointer'
    },
    quoteButton: {
        background: '#666E61',
        borderRadius: '50px',

        color: '#F9F6F2',
        fontWeight: 600,
        fontSize: '1em',
        lineHeight: '1.5em',
        padding: '0.375em 2em',
        border: 0
    }
} as const;
