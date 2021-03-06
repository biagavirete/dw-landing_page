import styled from 'styled-components';

export const Container = styled.header`
  height: 3.75rem;
  width: 70rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  .logo {
    width: 3rem;
    height: 2rem;
    margin: 0 1rem;
    position: absolute;
    left: 0;
  }

  nav {
    display: flex;
    flex-direction: row;
    margin-left: 8rem;

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;

      li {
        padding: 0 2.5rem 0 0;

        a {
          text-decoration: none;
          transition: all 0.2s;
          color: #4B5D68;

          :hover {
            font-weight: 800;
            color: #212353;
          }
        }
      }
    }
  }

  button {
    position: absolute;
    right: 0;
  }
`;