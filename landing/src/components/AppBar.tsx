import { Link } from 'react-router-dom';
import '../styles.css';
interface AppBarLabelParams {
    to: string;
    name: string;
}

export function AppBar() {

    const labelParams: AppBarLabelParams[] = [
        {
            to: "/abous-us",
            name: "Abous Us"
        },
        {
            to: "/our-services",
            name: "Our services"
        },
        {
            to: "/libraries",
            name: "Libraries"
        }
    ]

    return (
        <>
            <header id='app-bar-header' style={{ ...styles.appBar, ...styles.appBarHeight }}>
                <div id='app-bar-content' style={styles.content}>
                    <h2 id='app-bar-logo-name' style={styles.logoText} className='font-montserrat'>LITERARI</h2>
                    <ul id='app-bar-navigation-lables' style={styles.navigationLable}>
                        {labelParams.map(label => (
                            <Link key={label.name.toLocaleLowerCase()} to={label.to} style={{ textDecoration: 'none' }} >
                                <h4 id={`${label.name.toLocaleLowerCase()}-navigation`} style={styles.navigationTag} className='font-montserrat'>{label.name}</h4>
                            </Link>
                        ))}
                        <button id='quote-button' style={styles.quoteButton} className='font-montserrat'>Get a quote</button>
                    </ul>
                </div>
            </header>
            <div id='hidden-block' style={{ height: '90px' }}></div>
        </>
    )
}

const styles = {
    appBarHeight: {
        height: '90px',
    },
    appBar: {
        background: '#FFFFFF',
        display: 'flex',
        position: 'fixed',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.06)',
        width: '100%'
    },
    content: {
        padding: '0 40px 0 40px',
        justifyContent: 'space-between',
        display: 'flex',
        width: 'inherit',
        alignItems: 'center'
    },
    logoText: {
        color: '#666E61',
        fontWeight: 800,
        fontSize: '32px',
        lineHeight: '39px',
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
        fontSize: '18px',
        lineHeight: '27px',
        margin: '0 25px 0 0',
    },
    quoteButton: {
        background: '#666E61',
        borderRadius: '50px',

        color: '#F9F6F2',
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '24px',
        padding: '6px 32px'
    }
} as const;
