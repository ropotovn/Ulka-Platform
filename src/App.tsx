import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Report from "./components/Report";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Report />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
