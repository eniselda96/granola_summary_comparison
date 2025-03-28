// pages/_app.tsx
import type { AppProps } from "next/app";
import Layout from "./layout";

export default function App({ Component, pageProps }: AppProps) {
  console.log("pageProps", pageProps, 'component', Component);

  if(Component) {
    return (
        <Component {...pageProps} />
    );
  } else {
    return (
        <div>Please select the meeting to evaluate the Summaries</div>
    );
  }

  
}
