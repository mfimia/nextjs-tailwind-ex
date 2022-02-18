import "../styles/global.css";

// add css that is loaded by every page
const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
