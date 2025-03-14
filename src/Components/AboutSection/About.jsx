import Button from "../reusable/Button";
import Title from "../reusable/Title";
import Education from "./Education";
import Experience from "./Experience";

function About() {
  return (
    <section
      id="about"
      className=" relative z-[999] min-h-screen py-20 px-6 sm:px-8 lg:px-12 xl:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <Title label="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <Experience />
          <Education />
        </div>

        <a href="/resume.pdf" download className="mt-20 flex justify-center">
          <Button>Download Resume</Button>
        </a>
      </div>
    </section>
  );
}

export default About;
