import React, { useEffect, useState } from 'react';
import { fetchProductReviews, ProductReview } from '../services/api';

interface ReviewSectionProps {
  productId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ productId }) => {
  const [reviews, setReviews] = useState<ProductReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchProductReviews(productId)
      .then(setReviews)
      .catch(() => setError('No se pudieron cargar las reseñas.'))
      .finally(() => setLoading(false));
  }, [productId]);

  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : null;

  return (
    <div className="mt-10 bg-gray-50 rounded-xl p-6 border">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Reseñas del producto</h2>
      {loading && <div className="text-gray-500">Cargando reseñas...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {!loading && !error && (
        <>
          {reviews.length === 0 ? (
            <div className="text-gray-500">Este producto aún no tiene reseñas.</div>
          ) : (
            <>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-xl mr-2">{renderStars(Number(avgRating))}</span>
                <span className="font-semibold text-lg mr-2">{avgRating}</span>
                <span className="text-gray-600">({reviews.length} reseña{reviews.length > 1 ? 's' : ''})</span>
              </div>
              <ul className="space-y-4">
                {reviews.map((review, i) => (
                  <li key={i} className="bg-white rounded-lg p-4 shadow-sm border">
                    <div className="flex items-center mb-1">
                      <span className="text-yellow-500 mr-2">{renderStars(review.rating)}</span>
                      <span className="font-medium text-gray-800">{review.userName}</span>
                    </div>
                    <div className="text-gray-700">{review.comment}</div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
};

function renderStars(rating: number) {
  return (
    <span>
      {[1,2,3,4,5].map((n) => (
        <span key={n}>{n <= rating ? '★' : '☆'}</span>
      ))}
    </span>
  );
}

export default ReviewSection;
