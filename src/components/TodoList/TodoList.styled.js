import styled from "styled-components";

export const TodoListCon = styled.div`
  display: grid;
  justify-items: center;
  min-width: 220px;
  min-height: 220px;
  gap: 1rem;
  padding: 1.5rem;
  background: rgb(0, 0, 0, 0.1);
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadows.mainBoxShadow};

  .no-items {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    font-size: 1.2rem;
    text-transform: capitalize;
  }
`;
