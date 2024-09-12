import { Header, Statistics, CTA, Footer, ChatButton } from "./components";
import {
  About,
  Blogs,
  Courses,
  Hero,
  Instructors,
  PopularCourses,
} from "./sections";
import Platform from "./sections/Platform";

export default function App() {
  return (
    <>
      <Header />
      {/* <ChatButton /> */}
      <Hero />
      <Statistics />
      <About />
      <PopularCourses />
      {/* <Platform /> */}
      {/* <Courses /> */}
      <Instructors />
      <Blogs />
      <CTA />
      <Footer />
    </>
  );
}
