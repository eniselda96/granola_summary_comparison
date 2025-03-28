// pages/_app.tsx
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  console.log("pageProps", pageProps, 'component', Component);

  if(Component) {
    return (
        <Component {...pageProps} />
    );
  } else {
    return (
      <div className="flex justify-center items-center h-screen">
         <span className="font-semibold">Please select the meeting to evaluate the Summaries</span>
      </div>
    );
  }

  
}
