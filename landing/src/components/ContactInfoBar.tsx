export function ContactInfoBar() {
    return (
        <>
            <header id='info-bar-header' style={{ ...styles.infoBar, ...styles.infoBarHeight }}>
                <div id='info-bar-content' style={styles.content} className='content-padding'></div>
            </header>
            <div id='hidden-block-info-bar' style={styles.infoBarHeight}></div>
        </>
    )
}

const styles = {
    infoBarHeight: {
        height: '3.125em',
    },
    infoBar: {
        background: '#666E61',
        display: 'flex',
        position: 'fixed',
        boxShadow: '0 0.125em 0.625em rgba(0, 0, 0, 0.06)',
        width: '100%'
    },
    content: {
        justifyContent: 'space-between',
        display: 'flex',
        width: 'inherit',
        alignItems: 'center'
    },
} as const;
