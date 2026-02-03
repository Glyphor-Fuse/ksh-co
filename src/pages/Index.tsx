import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import SignatureMenu from "@/components/SignatureMenu";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-stone-900 selection:text-white">
      <Hero />
      <Philosophy />
      <SignatureMenu />
      <Footer />
    </main>
  );
}