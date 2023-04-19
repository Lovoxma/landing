
import { AppBar, ContactInfoBar } from "../../components";

function HomePage() {
    return (
        <>
            <ContactInfoBar />
            <AppBar />
            <div style={styles.block}>
                AMENOsdas
                dsad
                dsa
                d
            </div>
        </>
    )
}

const styles = {
    block: {
        background: 'red',
        height: "1900px"
    }
} as const;


export default HomePage;
