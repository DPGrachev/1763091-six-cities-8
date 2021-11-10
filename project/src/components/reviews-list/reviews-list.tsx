import {Review} from '../../types/review';
import { sortDateDown } from '../../utils/utils';
import ReviewItem from '../review-item/review-item';

type ReviewsListProps = {
  reviews: Review[],
}

function ReviewsList ({reviews}:ReviewsListProps): JSX.Element {
  const MAX_REVIEWS_COUNT = 10;
  const comments = reviews.length > MAX_REVIEWS_COUNT
    ? [...reviews].sort(sortDateDown).slice(0,MAX_REVIEWS_COUNT)
    : [...reviews].sort(sortDateDown);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((review) => <ReviewItem key={review.id} review={review}/>)}
      </ul>
    </>);
}

export default ReviewsList;
