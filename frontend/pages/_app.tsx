import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from "../src/app/store";
import {ThemeProvider} from "next-themes";

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider forcedTheme={Component.theme || undefined}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}
