import React from "react";
import Carousel from "../components/Carousel";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <>
      <Carousel />
      <main class="flex-fill">
        <div class="container">
          <SearchBar />
        </div>
      </main>
    </>
  );
};

export default Home;
