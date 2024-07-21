import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed h-screen w-64 border-r-2 border-gray-1000 bg-gray-1000">
      <aside className="text-white flex flex-col justify-between h-full">
        <ul className="py-4 space-y-4">
          <li className="text-lg">
            <div className="bg-gradient-to-r from-green-500 to-lime-400 rounded-lg p-3 text-center mb-4">
              Menu
            </div>
          </li>
          <li className="hover:bg-gradient-to-r from-green-500 to-lime-400 rounded-lg">
            <Link to="/admin/movies/dashboard" className="block p-3 text-center">
              Dashboard
            </Link>
          </li>
          <li className="hover:bg-gradient-to-r from-green-500 to-lime-400 rounded-lg">
            <Link to="/admin/movies/create" className="block p-3 text-center">
              Create Movie
            </Link>
          </li>
          <li className="hover:bg-gradient-to-r from-green-500 to-lime-400 rounded-lg">
            <Link to="/admin/movies/genre" className="block p-3 text-center">
              Create Genre
            </Link>
          </li>
          <li className="hover:bg-gradient-to-r from-green-500 to-lime-400 rounded-lg">
            <Link to="/admin/movies-list" className="block p-3 text-center">
              Update Movie
            </Link>
          </li>
          <li className="hover:bg-gradient-to-r from-green-500 to-lime-400 rounded-lg">
            <Link to="/admin/movies/comments" className="block p-3 text-center">
              Comments
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
