import styled from "styled-components";

interface IContainer {
  children: React.ReactNode;
}
export const Container: React.FC<IContainer> = ({ children }) => {
  return <ContainerWrap>{children}</ContainerWrap>;
};

const ContainerWrap = styled.div`
  width: 85%;
  margin: 0 auto;
`;
