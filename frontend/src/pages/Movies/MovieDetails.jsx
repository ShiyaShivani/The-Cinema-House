import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetSpecificMovieQuery,
  useAddMovieReviewMutation,
} from "../../redux/api/movies";
import MovieTabs from "./MovieTabs";

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { data: movie, refetch } = useGetSpecificMovieQuery(movieId);
  const { userInfo } = useSelector((state) => state.auth);
  const [createReview, { isLoading: loadingMovieReview }] =
    useAddMovieReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        id: movieId,
        rating,
        comment,
      }).unwrap();

      refetch();

      toast.success("Review created successfully");
    } catch (error) {
      toast.error(error.data || error.message);
    }
  };

  return (
    <>
      <div className="container mx-auto mt-8">
        <Link
          to="/"
          className="bg-teal-500 text-white px-4 py-2 rounded cursor-pointer mt-4 w-full ml-20"
        >
          Go Back
        </Link>

        <div className="mt-8 flex flex-col lg:flex-row">
          <div className="flex justify-center items-center lg:w-1/2">
            <img
              src={movie?.image}
              alt={movie?.name}
              className="w-[80%] rounded-lg shadow-lg"
            />
          </div>
          
          <div className="lg:w-1/2 lg:ml-12 mt-8 lg:mt-0">
            <h2 className="text-4xl font-bold text-white mb-4">{movie?.name}</h2>
            <p className="text-gray-400 mb-8">{movie?.detail}</p>
            <p className="text-2xl text-white font-semibold mb-4">
              Releasing Date: {movie?.year}
            </p>
            <div>
              <h3 className="text-xl text-white font-semibold mb-2">Cast:</h3>
              {movie?.cast.map((c) => (
                <ul key={c._id} className="list-disc ml-6 text-gray-300">
                  <li className="mt-1">{c}</li>
                </ul>
              ))}
            </div>

            <div className="mt-12">
          <MovieTabs
            loadingMovieReview={loadingMovieReview}
            userInfo={userInfo}
            submitHandler={submitHandler}
            rating={rating}
            setRating={setRating}
            comment={comment}
            setComment={setComment}
            movie={movie}
          />
        </div>
          </div>
          
        </div>

        
      </div>
    </>
  );
};

export default MovieDetails;
