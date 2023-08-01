import * as React from "react";

import { NotesPage } from "./pages/NotesPage";
import { GlobalStyle } from "./styles/globalStyles";
import styled from "styled-components";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Title>Notes App</Title>
      <NotesPage />
    </>
  );
};

const Title = styled.h1`
  text-align: center;
  margin: 1rem 0;
`;
