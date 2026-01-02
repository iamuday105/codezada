import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-richblack-900 px-4">
      <div className="text-center max-w-md">
        
        {/* Big 404 */}
        <h1 className="text-[120px] font-extrabold text-yellow-50 leading-none">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="mt-4 text-2xl font-semibold text-richblack-5">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-2 text-richblack-300">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Action Button */}
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block rounded-md bg-yellow-50 px-6 py-3 text-richblack-900 font-medium hover:bg-yellow-25 transition-all duration-200"
          >
            Go back home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Error;
