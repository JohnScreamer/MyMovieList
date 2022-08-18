import "./App.scss";
import {
    selectActiveSlide,
    selectIsSlideActive,
    selectorTheme,
} from "./selectors/GlobalOptions";
import { MEDIUM_BACKGROUND_URL } from "./static/constants/URL";
import { useAppSelector } from "./static/hooks/hooks";
import { Container } from "./components/Container/Container";
import Wrapper from "./components/Wrapper/Wrapper";
import Content from "./components/Content/Content";

function App() {
    const currentTheme = useAppSelector(selectorTheme);
    const activeSlide = useAppSelector(selectActiveSlide);
    const isSlideActive = useAppSelector(selectIsSlideActive);
    let bg = "";
    if (isSlideActive) {
        //@ts-ignore
        bg = activeSlide?.backdrop_path?.startsWith("/static/")
            ? //@ts-ignore
              activeSlide?.backdrop_path
            : MEDIUM_BACKGROUND_URL + activeSlide?.backdrop_path;
    }

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
