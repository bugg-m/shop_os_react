import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-gray-700">404</h1>
      <p className="mb-4 text-2xl text-gray-500">
        Oops! The page you are looking for doesn't exist.
      </p>
      <p className="mb-6 text-xl text-gray-400">
        It might have been moved, or perhaps it never existed.
      </p>
      <Link
        to="/"
        className="rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
