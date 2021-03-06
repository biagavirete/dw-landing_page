import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: 6.2rem;
  height: 25.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  h5 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 3rem;
    margin-top: 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #212353;
  }

  li {
    margin-bottom: 1rem;
  }
`;

export const LogoArea = styled.div`
  .top {
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;

    img {
      width: 3rem;
      height: 2rem;
      margin-right: 1.25rem;
    }

    strong {
      font-size: 1.25rem;
      font-weight: 900;
      color: #212353;
    }
  }

  .center {
    display: flex;
    flex-direction: column;

    strong {
      font-weight: bold;
      line-height: 2rem;
    }

    p {
      line-height: 2rem;
    }
  }

  .bottom {
    margin-top: 7rem;
    display: flex;
    flex-direction: column;

    p {
      font-size: 0.75rem;
    }
  }
`;

export const AboutArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const HelpArea = styled.div`

`;

export const SocialArea = styled.div`

`;

