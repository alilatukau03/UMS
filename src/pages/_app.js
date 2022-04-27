import { AppContainer } from "@components/templates";
import "@styles/modules/globals.scss";

function MyApp({ Component, pageProps }) {
  return <AppContainer {...pageProps} />;
}

export default MyApp;
