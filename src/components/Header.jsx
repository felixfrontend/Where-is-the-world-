import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { Link } from "react-router-dom";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--color-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-text);
  font-size: var(-fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

export const Header = () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  React.useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMoon size="14px" />
            ) : (
              <IoMoonOutline size="14px" />
            )}
            <span style={{ marginLeft: "0.75rem" }}> {theme} theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
