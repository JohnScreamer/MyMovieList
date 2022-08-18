import styled, { keyframes } from "styled-components";

type MainWrapperType = {
    bg: string;
};
const rotate = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
export const MainWrapper = styled.main`
    background: linear-gradient(
            360deg,
            var(--color-background) 0%,
            rgba(255, 255, 255, 0) 100%
        ),
        linear-gradient(
            280deg,
            var(--color-background) 0%,
            rgba(255, 255, 255, 0) 50%
        ),
        linear-gradient(
            90deg,
            var(--color-background) 5%,
            var(--color-background) 5%,
            var(--color-gradient-prime) 70%
        ),
        url(${(props: MainWrapperType) => props.bg}) 0 0 / cover no-repeat fixed;
`;
