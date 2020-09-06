import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { createGlobalStyles, ThemeProvider, myVibe } from "waskode";

const GlobalStyleTag = createGlobalStyles(myVibe);

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <GlobalStyleTag />
      <ThemeProvider theme={myVibe}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}
