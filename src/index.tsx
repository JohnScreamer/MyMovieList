import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import "./features/i18n";
import Spiner from "./components/UI/Spiner/Spiner";
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Suspense
                fallback={
                    <div className="loading">
                        <Spiner />
                    </div>
                }
            >
                <App />
            </Suspense>
        </Provider>
    </BrowserRouter>
);
