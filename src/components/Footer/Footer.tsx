import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import facebook from '../../assets/facebook.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://vinayaksingh.in" className="logo">
        <span>JOOBEUR_</span>
        <span>NADA</span>
      </a>
      <div>
        <p>
          This Website was made with
           <span>❤️</span> 
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/nada-joobeur-704461241/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/NadaJoobeur"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="hthttps://api.whatsapp.com/send?phone=21629884210&text=Bonjour%2C%20j%E2%80%99ai%20trouv%C3%A9%20votre%20contact%20via%20mon%20site%20portfolio."
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
      <a
            href="https://www.facebook.com/jbr.nada.2025"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
      </div>
    </Container>
  )
}
