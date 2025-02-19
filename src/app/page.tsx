import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Salman's Portfolio</title>
      </Head>
      <Header />
      <main className="p-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
