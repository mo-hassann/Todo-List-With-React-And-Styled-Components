import styled from "styled-components";

export const OverlayCon = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(0 0 0 / 38%);
  backdrop-filter: blur(6px);
  transition: all ${({ theme }) => theme.transitions.mainTransition};
`;

export const TodoItemCard = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  color: #333;
  border-radius: 7px;
  box-shadow: ${({ theme }) => theme.boxShadows.mainBoxShadow};
  overflow: hidden;
  animation: opacity ${({ theme }) => theme.transitions.mainTransition};

  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .container {
    min-width: 500px;
    max-width: 90vw;
    padding: 1rem;
    animation: scale ${({ theme }) => theme.transitions.mainTransition};

    @keyframes scale {
      0% {
        opacity: 0;
        transform: scale(0.5);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    input,
    textarea {
      background: ${({ theme }) => theme.colors.firstColor}21;
      border: none;
      border-radius: 7px;
      width: 80%;
      height: 50px;
      padding: 5px;
      font-size: 1.4rem;
      outline-color: ${({ theme }) => theme.colors.firstColor};

      &::placeholder {
        color: #444;
        text-transform: capitalize;
      }
    }

    textarea {
      min-height: 200px;
      font-size: 1.1rem;
    }
  }
`;
