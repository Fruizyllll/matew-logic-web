import IntroScreen from "@/presentation/components/intro-screen";
import BackgroundFX from "@/presentation/components/background-fx";
import Navbar from "@/presentation/components/navbar";
import ScrollProgress from "@/presentation/components/scroll-progress";
import Hero from "@/presentation/components/hero";
import Services from "@/presentation/components/services";
import WhyUs from "@/presentation/components/why-us";
import Process from "@/presentation/components/process";
import Contact from "@/presentation/components/contact";
import Footer from "@/presentation/components/footer";
import CookieConsent from "@/presentation/components/cookie-consent";

export default function Home() {
  return (
    <>
      <IntroScreen />
      <BackgroundFX />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
