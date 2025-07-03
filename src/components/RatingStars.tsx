'use client';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface RatingStarsProps {
    rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} />
            ))}
            {hasHalfStar && <FaStarHalfAlt />}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} />
            ))}
            <span className="text-gray-600 ml-1 text-xs">({rating.toFixed(1)})</span>
        </div>
    );
}
