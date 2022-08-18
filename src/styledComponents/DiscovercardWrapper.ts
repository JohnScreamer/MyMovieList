import styled from "styled-components";

type WrapperType = {
    bg: string;
};
export const CardWrapper = styled.div`
    width: 100%;
    height: 50vh;

    padding: 35px;
    transition: all 0.5s ease 0s;
    &:hover {
        height: 70vh;
        background: linear-gradient(
                100deg,
                var(--color-background) 10%,
                rgba(253, 187, 45, 0) 71%
            ),
            url(${(props: WrapperType) => props.bg}) 0 0 / cover no-repeat;
    }
    background: linear-gradient(
            100deg,
            var(--color-background) 20%,
            rgba(253, 187, 45, 0) 91%
        ),
        url(${(props: WrapperType) => props.bg}) 0 0 / cover no-repeat;
`;
