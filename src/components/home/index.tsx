import About from "./about";
import Banner from "./banner";
import Experience from "./experience-card";
import Projects from "./projects";

export default function Index() {
    return (
        <div>
            <Banner />
            <About />
            <Experience />
            <Projects />
        </div>
    )
}
