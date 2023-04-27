import '../styles.css';
import { useState } from 'react';

type ContactInfo = {
    email: string,
    contactNumber: string
}
export function GetAQuoteSection() {
    const [contactInfo, setContactInfo] = useState<ContactInfo>({ email: '', contactNumber: '' });

    // console.log(contactInfo)
    function SendEmail() {
        // window.emai
    }

    return (
        <section id='get-a-quote-section-background' style={styles.sectionBackground}>
            <div id='get-a-quote-section' style={styles.section}>
                <p id='get-a-quote-text' style={styles.headerText} className='font-montserrat'>GET A QUOTE</p>
                <p id='get-a-quote-description' style={styles.description} className='font-inter'>Fill in your contact details and we’ll get back to you to discuss the best offer you can get!</p>
                <div>
                    <input
                        id='get-a-quote-email-input'
                        style={styles.inputField}
                        className='font-montserrat'
                        placeholder='E-mail'
                        onChange={event => setContactInfo({ ...contactInfo, email: event.target.value })}
                    />
                    <input
                        id='get-a-quote-contact-number-input'
                        style={styles.inputField}
                        className='font-montserrat'
                        placeholder='Contact number'
                        onChange={event => setContactInfo({ ...contactInfo, contactNumber: event.target.value })}
                    />
                    <button id='get-a-quote-buton' style={styles.button} className='font-montserrat'>Get the offer</button>
                </div>
            </div>
        </section>
    )
}


const styles = {
    sectionBackground: {
        height: '391px',
        background: '#F9F6F2',
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
    description: {
        fontWeight: 400,
        fontSize: '24px',
        lineHeight: '27px',
        color: '#1E2029'
    },
    inputField: {
        width: '300px',
        height: '48px',
        background: '#F9F6F2',
        border: '1px solid #A2A2A2',
        borderRadius: '8px',
        outline: 'none',
        boxSizing: 'border-box',
        padding: '15px',

        color: '#1E2029',
        fontStyle: 'italic',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '21px',

        marginRight: '25px'
    },
    button: {
        width: '201px',
        height: '48px',
                
        background: '#666E61',
        borderRadius: '50px',
        border: 0,

        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#F9F6F2'
    }

} as const;
