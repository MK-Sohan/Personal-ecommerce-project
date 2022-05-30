import React, { useEffect, useState } from "react";
import SingleReviews from "./SingleReviews";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-2xl leading-6 text-gray-800 text-center px-4">
          Testimonials
        </h2>
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">
          What our client says
        </h1>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20 px-10 py-20 gap-6">
          {reviews?.map((review) => (
            <SingleReviews review={review}></SingleReviews>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
