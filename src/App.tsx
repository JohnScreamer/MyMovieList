import "./App.scss";
import { selectorTheme } from "./selectors/GlobalOptions";
import { useAppSelector } from "./static/hooks/hooks";
import { Container } from "./components/Container/Container";
import Wrapper from "./components/Wrapper/Wrapper";
import Content from "./components/Content/Content";
import { useGetActiveSlide } from "./static/hooks/useGetActiveSlide";

function App() {
    const currentTheme = useAppSelector(selectorTheme);

    const bg = useGetActiveSlide();
    return (
        <div className="App" data-theme={currentTheme}>
            <Wrapper bg={bg}>
                <Container>
                    <Content />
                </Container>
            </Wrapper>
        </div>
    );
}

export default App;
