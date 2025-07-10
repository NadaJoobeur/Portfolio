import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){
return (
  <Container id="contact">
    <header>
      <h2>Contact</h2>
      <p>Looking for an intern or a freelance developer?</p>
      <p>Feel free to reach out — I'd love to collaborate!</p>
    </header>
    <div className="contacts">
      <div>
        <a href="mailto:nadajbr725@gmail.com">
          <img src={emailIcon} alt="Email" />
        </a>
        <a href="mailto:nadajbr725@gmail.com">nadajbr725@gmail.com</a>
      </div>
      <div>
        <a href="tel:+21629884210">
          <img src={phoneIcon} alt="Phone" />
        </a>
        <a href="tel:+21629884210">(+216) 29 884 210</a>
      </div>
    </div>
  </Container>
)

}