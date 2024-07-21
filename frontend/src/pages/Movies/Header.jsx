import SliderUtil from "../../component/SliderUtil";
import { useGetNewMoviesQuery } from "../../redux/api/movies";
import { Link } from "react-router-dom";

const Header = () => {
  const { data } = useGetNewMoviesQuery();

  return (
    <div>
    
  <h1 className="text-white text-4xl font-bold py-4 px-6 rounded-lg bg-teal-500 shadow-lg top-0">
    Watch Your Favourites
  </h1>


    <div className="flex flex-col lg:flex-row justify-between items-start mt-8">
      
      <nav className="lg:w-[20%] bg-gray-800 p-4 border-r-2 border-gray-700 flex flex-col space-y-4">
        
        <Link
          to="/"
          className="transition duration-300 ease-in-out hover:bg-teal-500 block p-2 rounded mb-2 text-lg text-white"
        >
          Home
        </Link>
        <Link
          to="/movies"
          className="transition duration-300 ease-in-out hover:bg-teal-500 block p-2 rounded mb-2 text-lg text-white"
        >
          Browse Movies
        </Link>
      </nav>
       
      <div className="w-full lg:w-[79%] bg-gray-900 p-4 rounded-lg shadow-lg">
      <h1 className="mb-5 text-3xl font-bold text-white">All Movie</h1>
        <SliderUtil data={data} />
      </div>
    </div>
    </div>
  );
};

export default Header;
