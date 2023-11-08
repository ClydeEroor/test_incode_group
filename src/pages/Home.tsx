import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_All_CHARACTERS } from '../graphql/Query/schema';
import Layout from '../components/Layout';
import Filters from '../components/Filters';
import ContentContainer from '../components/ContentContainer';
import HeroCard from '../components/HeroCard';

const Home = () => {
  const [charactersCard, setCharactersCard] = useState([]);
  const { data, loading, error } = useQuery(GET_All_CHARACTERS);

  useEffect(() => {
    setCharactersCard(data?.characters?.results);
  }, [data]);
  return (
    <Layout>
      <ContentContainer>
        <Filters />
        <div className={'w-full min-h-full mt-5 flex flex-wrap gap-4'}>
          {charactersCard &&
            charactersCard.map((elem, idx) => {
              return (
                <HeroCard
                  key={`character-card-item-${idx}`}
                  characters={elem}
                />
              );
            })}
        </div>
      </ContentContainer>
    </Layout>
  );
};

export default Home;
