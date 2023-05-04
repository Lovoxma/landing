import './App.css';

import { AppBar, ContactInfoSection, AboutUsSection, IntroSection, WhatsIncludedSection, OurLibrariesSection, GetAQuoteSection } from "./components";
function App() {
  return (
    <>
      <AppBar />
      <IntroSection />
      <AboutUsSection />
      <WhatsIncludedSection />
      <OurLibrariesSection />
      <GetAQuoteSection />
      <ContactInfoSection />
    </>
  );
}

export default App;
