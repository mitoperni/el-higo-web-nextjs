'use client';
import { useTranslations } from "next-intl";
import Icons from "../../ui/Icons";
import StarRating from "./StarRating";

interface Review {
  name?: string;
  date?: string;
  rating: number;
  comment: string;
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const t = useTranslations();
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-lg">
          {review.name ? review.name.charAt(0) : "A"}
        </div>
        <div className="ml-4">
          <h3 className="font-display font-semibold text-dark-text">
            {review.name || t("reviews.anonymous")}
          </h3>
          <p className="text-sm text-dark-text opacity-80 font-body">
            {review.date || t("reviews.recent")}
          </p>
        </div>
      </div>

      <StarRating rating={review.rating} />

      <p className="text-dark-text leading-relaxed font-body">
        {review.comment}
      </p>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center text-sm text-dark-text opacity-80 font-body">
          <Icons.CheckCircle className="w-4 h-4 mr-1" />
          {t("reviews.reviewSource")}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
