import "./About.css";

import AboutHero from "../../components/abouthero/AboutHero";
import Values from "../../components/values/Values";
import Timeline from "../../components/timeline/Timeline";
import Team from "../../components/team/Team";
import Belong from "../../components/belong/Belong";

const About = () => {
  return (
  <>
  <AboutHero />
  <Values />
  <section className="story-and-team">
    <div className="container story-team-inner">
        <Timeline />
        <Team />
        </div>
        </section>
        <Belong />
        </>
        );
    };

export default About;