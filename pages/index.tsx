import { gql, useQuery } from "@apollo/client";
import Layout from "../components/Layout";
import CoffeeCard from "../components/CoffeeCard";
import { initializeApollo } from "../lib/apolloClient";

const COFFEES_QUERY = gql`
  {
    coffees {
      averageRating
      id
      image
      name
      slug
      roaster {
        slug
      }
    }
  }
`;

const IndexPage = () => {
  const { data } = useQuery(COFFEES_QUERY);
  return (
    <Layout>
      <section id="featured">
        <h2>Featured bevs</h2>
        <CoffeeCard coffee={data.coffees[0]} />
      </section>
    </Layout>
  );
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
