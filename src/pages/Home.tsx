import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_All_CHARACTERS } from '../graphql/Query/schema';
import Layout from '../components/Layout';

const Home = () => {
  const { loading, data, error } = useQuery(GET_All_CHARACTERS);

  useEffect(() => {
    console.log(data);
  }, []);

  return <Layout>asdasdas</Layout>;
};

export default Home;
