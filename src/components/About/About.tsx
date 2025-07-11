import { Container } from "./styles";
import nada from "../../assets/nadou.png";
import ScrollAnimation from "react-animate-on-scroll";

// ✅ Web & App Dev
import reactIcon from "../../assets/icons8-react-native.svg";
import viteIcon from "../../assets/icons8-vite.svg";
import nodejsIcon from "../../assets/icons8-nodejs.svg";



import flaskIcon from "../../assets/icons8-flask.svg";

import jsIcon from "../../assets/js-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";

import mysqlIcon from "../../assets/mysql-icon.svg";
import postgresqlIcon from "../../assets/icons8-postgresql.svg";



// ✅ Programming Languages
import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import cplusplus from "../../assets/cplusplus.svg";
import c from "../../assets/c.svg";


// ✅ DevOps & Cloud
import gitIcon from "../../assets/icons8-git.svg";
import gitlabIcon from "../../assets/icons8-gitlab.svg";


import docker from "../../assets/icons8-docker.svg";
import kubernetesIcon from "../../assets/icons8-kubernetes.svg";
import jenkins from "../../assets/icons8-jenkins.svg";
import terraformIcon from "../../assets/icons8-terraform.svg";
import aws from "../../assets/aws.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          <h2>About Me</h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce>
          <p>
            A Full Stack Web Developer experienced in building modern, responsive web apps and integrating smart features.
          </p>
          <p>
            I craft clean front-end interfaces, develop robust back-end services, and deliver scalable web solutions.
          </p>
          <p>
            Open to freelance projects to build modern, efficient, and impactful applications.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={100} animateOnce>
          <div className="education">
            <h3>Education</h3>
            <h4>Higher Institute of Computer Science and Mathematics of Monastir (ISIMM)</h4>
            <p>Monastir, Tunisia</p>
            <p>Engineering Cycle – Software Engineering | Currently in 2nd year (2023 – Present)</p>
            <p>Integrated Preparatory Cycle – Mathematics and Computer Science | 2021 – 2023</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={150} animateOnce>
          <h3>Skills</h3>
          <div className="hard-skills">

            {/* 👉 Web & App Development */}
            <h4>Web & App Development</h4>
            {[
              reactIcon, viteIcon, nodejsIcon,
              flaskIcon,
              jsIcon, htmlIcon, cssIcon, mysqlIcon, postgresqlIcon
            ].map((icon, idx) => (
              <ScrollAnimation key={`web-${idx}`} animateIn="fadeInUp" delay={700 + idx * 100} animateOnce>
                <div className="hability">
                  <img src={icon} alt="web-skill-icon" />
                </div>
              </ScrollAnimation>
            ))}
            
            {/* 👉 Programming Languages */}
            <h4>Programming Languages</h4>
            {[python, java, cplusplus, c].map((icon, idx) => (
              <ScrollAnimation key={`lang-${idx}`} animateIn="fadeInUp" delay={2000 + idx * 100} animateOnce>
                <div className="hability">
                  <img src={icon} alt="lang-icon" />
                </div>
              </ScrollAnimation>
            ))}
            
            

            {/* 👉 DevOps & Cloud */}
            <h4>DevOps & Cloud</h4>
            {[
              gitIcon, gitlabIcon,
              docker, kubernetesIcon, jenkins, terraformIcon, aws
            ].map((icon, idx) => (
              <ScrollAnimation key={`devops-${idx}`} animateIn="fadeInUp" delay={3000 + idx * 100} animateOnce>
                <div className="hability">
                  <img src={icon} alt="devops-icon" />
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
  );
}
