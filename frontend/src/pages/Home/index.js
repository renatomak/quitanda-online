import React from 'react';
import Cards from '../components/Cards';
import Carousel from '../components/Carousel';
import Order from '../components/Order';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <>
      <Carousel />
      <main className="flex-fill">
        <div className="container">
          <SearchBar />
          <hr mt-3 />
          <Cards />
          <hr mt-3 />
          <Order />
        </div>
      </main>
    </>
  );
};

export default Home;
