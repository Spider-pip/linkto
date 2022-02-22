import {
  Features,
  Footer,
  Header,
  Hero,
  MeetLinkto,
  Testimonials,
} from "~/components/landing/index";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <MeetLinkto />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
