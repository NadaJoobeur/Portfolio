import { Container } from "./styles";
import nada from "../../assets/nadou.png";
import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import cplusplus from "../../assets/cplusplus.svg";
import c from "../../assets/c.svg";
import tensorflow from "../../assets/tensorflow.svg";
import numpy from "../../assets/numpy.svg";
import db from "../../assets/db.svg";
import hadoop from "../../assets/hadoop.svg";
import github from "../../assets/github.svg";
import jenkins from "../../assets/jenkins.svg";
import docker from "../../assets/docker.svg";
import aws from "../../assets/aws.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    
<Container id="about">
  <div className="about-text">
    <ScrollAnimation animateIn="fadeInLeft" animateOnce>
      <h2>About Me</h2>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeInLeft" delay={100} animateOnce>
      <p>
        Hi! I'm Nada, a passionate Software Engineer specializing in web development, machine learning, and scalable software solutions.
      </p>
      <p>
        I build responsive web applications, fine-tune ML models, and develop robust backend services.
      </p>
      <p>
        I’m especially passionate about Artificial Intelligence and its impact on healthcare, designing data-driven solutions that predict, automate, and optimize critical decisions.
      </p>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeInLeft" delay={350} animateOnce>
      <div className="education">
        <h3>Education</h3>
        <h4>Software Engineerin</h4>
        <p>Higher Institute of Computer Science and Mathematics of Monastir  2023 - Present</p>
      </div>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeInLeft" delay={650} animateOnce>
      <h3>Skills</h3>
<div className="hard-skills">
  {[
    python, java, cplusplus, c, 
    tensorflow, numpy,
    db, hadoop,  github,
    jenkins, docker, aws,
    htmlIcon, cssIcon,
    jsIcon, typescriptIcon, vueIcon
  ].map((icon, idx) => (
    <ScrollAnimation key={idx} animateIn="fadeInUp" delay={700 + idx * 100} animateOnce>
      <div className="hability">
        <img src={icon} alt="skill-icon" />
      </div>
    </ScrollAnimation>
  ))}
</div>
    </ScrollAnimation>
  </div>

  <div className="about-image">
    <ScrollAnimation animateIn="fadeInRight" delay={850} animateOnce>
      <img src={nada} alt="Nada Joobeur" />
    </ScrollAnimation>
  </div>
</Container>

  )
}
