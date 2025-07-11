import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="EEG signal processing" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>EpilepTrack</h3>
              <p>
               A platform for AI-based EEG analysis and remote neurophysiology consultation to help reduce diagnostic delays in epilepsy care.    
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Flask</li>
                <li>EEG signal processing</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/NadaJoobeur/Medical-Research-Automation-Platform" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                {/* <a href="https://vote.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>  */}
                </div>
            </header>
            <div className="body">
              <h3> MedVision</h3>
              <p> MedVision is a web platform with AI tools for medical researchers. It combines tabular data and medical image analysis in one place. It automates preprocessing, model training (like 3D U-Net), and experiment tracking to speed up research and ensure reproducibility. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Flask</li> <li>MySQL</li> <li>React</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/NadaJoobeur/pharmaco-dose-predictor" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
              
              </div>
            </header>
            <div className="body">
              <h3>PharmacoDose Predictor</h3>
              <p>
                This platform is designed for clinical pharmacologists, particularly those working on diseases such as tuberculosis, where precise dosage is critical to achieving a therapeutic drug concentration.
               </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li> Electron.js</li>
                <li>Python</li>
                <li>Random Forest </li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
          
              </div>
            </header>
            <div className="body">
              <h3> Occupational Risk Analysis for Female Agricultural Workers</h3>
              <p>Machine learning project predicting occupational accidents among female agricultural workers, comparing Random Forest and optimized XGBoost models.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>SMOTE</li>
                <li>RandomOverSampler</li>
                <li>Optuna</li>
                <li>SHAP</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/NadaJoobeur/arabic-quotes-classification" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
           
              </div>
            </header>
            <div className="body">
              <h3>Arabic quotes classification</h3>
              <p>This project focuses on the automatic classification of Arabic quotes into predefined thematic categories using Natural Language Processing (NLP) techniques. Given the linguistic richness and complexity of the Arabic language, our work aims to address its specific challenges through a complete pipeline of data collection, preprocessing, and classification..</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Tashaphyne</li>
                <li>scikit-learn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/NadaJoobeur/CoreAssure" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
          
              </div>
            </header>
            <div className="body">
              <h3>Insurance Management</h3>
              <p>This application is designed for insurance management, covering quotes, guarantees, contracts, payments, and claims.  
                It offers a user-friendly and responsive interface to simplify insurance workflows and improve efficiency.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Vite</li>
                <li>Rest API</li>
                <li>Node.JS</li>
                <li>PostgreSQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


          </div>
    </Container>
  );
}