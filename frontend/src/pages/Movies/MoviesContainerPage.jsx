import { useState } from "react";
import {
  useGetNewMoviesQuery,
  useGetTopMoviesQuery,
  useGetRandomMoviesQuery,
} from "../../redux/api/movies";
import { useFetchGenresQuery } from "../../redux/api/genre";
import SliderUtil from "../../component/SliderUtil";

const MoviesContainerPage = () => {
  const { data } = useGetNewMoviesQuery();
  const { data: topMovies } = useGetTopMoviesQuery();
  const { data: genres } = useFetchGenresQuery();
  const { data: randomMovies } = useGetRandomMoviesQuery();

  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
  };

  const filteredMovies = data?.filter(
    (movie) => selectedGenre === null || movie.genre === selectedGenre
  );

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-start">
      <nav className="w-full lg:w-[20%] bg-gray-800 p-4 border-r-2 border-gray-700 h-screen flex flex-col space-y-4">
        <h2 className="text-2xl font-bold text-white mb-4">Genres</h2>
        {genres?.map((g) => (
          <button
            key={g._id}
            className={`transition duration-300 ease-in-out hover:bg-teal-500 text-white block p-2 rounded text-lg ${
              selectedGenre === g._id ? "bg-teal-500" : ""
            }`}
            onClick={() => handleGenreClick(g._id)}
          >
            {g.name}
          </button>
        ))}
      </nav>

      <section className="flex flex-col justify-center items-center w-full lg:w-[80%] space-y-8 p-4">
        <div className="w-full mb-8 bg-gray-900 p-4 rounded-lg shadow-lg">
          <h1 className="mb-5 text-3xl font-bold text-white">Choose For You</h1>
          <SliderUtil data={randomMovies} />
        </div>

        <div className="w-full mb-8 bg-gray-900 p-4 rounded-lg shadow-lg">
          <h1 className="mb-5 text-3xl font-bold text-white">Top Movies</h1>
          <SliderUtil data={topMovies} />
        </div>

        <div className="w-full mb-8 bg-gray-900 p-4 rounded-lg shadow-lg">
          <h1 className="mb-5 text-3xl font-bold text-white">Choose Movie</h1>
          <SliderUtil data={filteredMovies} />
        </div>
      </section>
    </div>
  );
};

export default MoviesContainerPage;
