import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Benefits from "@/components/benefits";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Header />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
