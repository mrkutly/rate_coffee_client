import { gql, useQuery } from "@apollo/client";
import Layout from "../components/Layout";
import { initializeApollo } from "../lib/apolloClient";

const COFFEES_QUERY = gql`
  {
    coffees {
      name
      id
      image
    }
  }
`;

const IndexPage = ({}) => {
  const { data } = useQuery(COFFEES_QUERY);
  return <Layout>hi</Layout>;
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: COFFEES_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default IndexPage;
