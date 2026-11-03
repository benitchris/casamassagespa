import { useCallback, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero, { Marquee } from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import MenuSection from "./components/MenuSection.jsx";
import Experience from "./components/Experience.jsx";
import MobileMassage from "./components/MobileMassage.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BookingModal from "./components/BookingModal.jsx";
import FloatingBooking from "./components/FloatingBooking.jsx";
import { useActiveSection, useReveal } from "./hooks/useSiteEffects.js";

const SECTION_IDS = ["top", "about", "services", "experience", "gallery", "contact"];

export default function App() {
  const [booking, setBooking] = useState(null);

  useReveal();
  useActiveSection(SECTION_IDS);

  const openBooking = useCallback((preset = null) => {
    setBooking({ preset: preset || null, id: Date.now() });
  }, []);

  const closeBooking = useCallback(() => setBooking(null), []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar onBook={openBooking} />

      <main id="main">
        <Hero onBook={openBooking} />
        <Marquee />
        <About onBook={openBooking} />
        <Services onBook={openBooking} />
        <MenuSection onBook={openBooking} />
        <Experience onBook={openBooking} />
        <MobileMassage onBook={openBooking} />
        <Gallery />
        <Contact onBook={openBooking} />
      </main>

      <Footer onBook={openBooking} />

      {!booking && <FloatingBooking onBook={openBooking} />}

      {booking && (
        <BookingModal
          key={booking.id}
          preset={booking.preset}
          onClose={closeBooking}
        />
      )}
    </>
  );
}
