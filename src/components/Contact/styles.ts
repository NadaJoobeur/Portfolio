import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem; /* un peu moins d’espace entre les blocs */
  margin-top: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    max-width: 20rem; /* réduit la largeur max */
    gap: 1rem; /* réduit l’espace entre icône et texte */
    background-color: var(--green);
    border-radius: 1.4rem;
    padding: 1rem 1.8rem; /* padding réduit */
    transition: background-color 0.25s;

    img {
      width: 2.8rem; /* icône plus petite */
      height: auto;
    }

    a {
      color: var(--black);
      font-weight: 500;
      font-size: 1.4rem; /* taille de police un peu réduite */
      text-decoration: none;
    }

    &:hover {
      background-color: var(--pink);

      a {
        color: #FFF;
      }
    }
  }
}



  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        
      }
    }
  }
  
`
/* old one - 2/1/2023 - 
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/
