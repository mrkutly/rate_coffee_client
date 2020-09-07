import { gql, useQuery } from "@apollo/client";
import { initializeApollo } from "../../lib/apolloClient";
import CoffeeShowPage from "../../components/CoffeeShowPage";
import Layout from "../../components/Layout";

const COFFEE_PATHS_QUERY = gql`
  {
    coffees {
      id
    }
  }
`;

const COFFEE_QUERY = gql`
  query CoffeeQuery($id: ID!) {
    coffee(id: $id) {
      name
      id
      region {
        id
        name
        country
      }
      reviews {
        content
        rating
        user {
          username
          thumbnail
        }
      }
      roaster {
        name
        id
        city
        country
        state
      }
    }
  }
`;

interface CoffeeShowProps {
  id: string;
}
const CoffeeShow = ({ id }: CoffeeShowProps) => {
  const { data } = useQuery(COFFEE_QUERY, { variables: { id } });
  return (
    <Layout>
      <CoffeeShowPage coffee={data?.coffee} />
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: COFFEE_QUERY,
    variables: { id: params.id },
  });

  return {
    props: {
      id: params.id,
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: COFFEE_PATHS_QUERY,
  });

  return {
    paths: data.coffees.map(({ id }) => ({ params: { id } })),
    fallback: true,
  };
}
export default CoffeeShow;
