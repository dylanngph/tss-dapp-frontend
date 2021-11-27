import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "components/display/Header";
import Footer from "components/display/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
