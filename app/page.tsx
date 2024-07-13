import Benefits from "@/components/benefits";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HowItWorks from "@/components/how-it-works";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen p-0 m-0 box-border">
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
