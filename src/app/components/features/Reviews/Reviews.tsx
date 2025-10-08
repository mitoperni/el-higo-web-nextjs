'use client';
import { useTranslations } from "next-intl";
import ReviewCard from "./ReviewCard";
import StarRating from "./StarRating";
import Icons from "../../ui/Icons";

const Reviews = () => {
  const t = useTranslations();

  const reviews = [
    {
      name: "María S.",
      rating: 5,
      comment: t("reviews.review1"),
      date: "TripAdvisor",
    },
    {
      name: "James P.",
      rating: 5,
      comment: t("reviews.review2"),
      date: "Google Reviews",
    },
    {
      name: "Carmen G.",
      rating: 5,
      comment: t("reviews.review3"),
      date: "TripAdvisor",
    },
  ];

  const averageRating = 5;

  return (
    <section id="reviews" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-text mb-4">
            {t("reviews.title")}
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-6"></div>
          <p className="text-xl text-dark-text font-Bodoni mb-8 max-w-2xl mx-auto font-body">
            {t("reviews.subtitle")}
          </p>

          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="flex items-center">
              <StarRating rating={Math.round(averageRating)} />
              <span className="ml-2 text-2xl font-display font-bold text-dark-text">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <span className="text-dark-text font-body">
              {t("reviews.reviewCount", { count: reviews.length })}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        <div className="text-center mt-16 relative z-10">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
            <div className="mb-6">
              <h3 className="text-3xl font-display font-bold text-dark-text mb-2">
                {t("reviews.shareExperience")}
              </h3>
              <p className="text-dark-text/80 mb-6 font-Bodoni text-lg leading-relaxed">
                {t("reviews.reviewCallToAction")}
              </p>
            </div>
            <a
              href="https://www.tripadvisor.com/UserReviewEdit-g187441-d123456-El_Higo-Granada.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-terracotta hover:bg-green-leaf text-white font-body font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Icons.Plus className="w-5 h-5 mr-3" />
              {t("reviews.writeReview")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
