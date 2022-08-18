import styled from "styled-components";

type WrapperType = {
    bg: string;
};
export const CardWrapper = styled.div`
    width: 200px;
    height: 300px;

    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 10px;
    transition: all 0.5s ease 0s;

    background: linear-gradient(
            0deg,
            var(--color-background) 6%,
            rgba(253, 187, 45, 0) 31%
        ),
        url(${(props: WrapperType) => props.bg}) 0 0 / cover no-repeat;

    &: hover {
        cursor: pointer;
        transition: all 0.5s ease 0s;
        padding-bottom: 30px;
        animation: bgAnimation 8s ease 0s 1 normal forwards;
        background: linear-gradient(
                0deg,
                var(--color-background) 15%,
                rgba(253, 187, 45, 0) 91%
            ),
            url(${(props: WrapperType) => props.bg}) 0 0 / cover no-repeat;

        h3 {
            display: block;
        }
    }
`;
