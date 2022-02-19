import { AppProps } from "next/app";
import "../styles/globals.css";

// add css that is loaded by every page
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
