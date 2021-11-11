import {ChangeEvent, FormEvent, useState} from 'react';
import { RatingToValues } from '../../const';
import { ThunkActionResult } from '../../types/action';
import { CommentPost } from '../../types/review';
import { disableNewCommentForm } from '../../utils/utils';
import ReviewRatingItem from '../review-rating-item/review-rating-item';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

type NewCommentFormProps = {
  onSubmit: ({comment, rating}: CommentPost) => ThunkActionResult,
}

function NewCommentForm({onSubmit} : NewCommentFormProps): JSX.Element {

  const INITIAL_FORM_STATE = {
    'comment': '',
    'rating' : 0,
  };

  const [commentPost, setCommentPost] = useState(INITIAL_FORM_STATE);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setCommentPost({...commentPost ,[name]: Number(value)});
  };

  const handleTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setCommentPost({...commentPost ,[name]: value});
  };

  const handleSubmit = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if(commentPost.rating && commentPost.comment.length >= MIN_COMMENT_LENGTH){
      disableNewCommentForm();
      onSubmit(commentPost);
      setCommentPost(INITIAL_FORM_STATE);
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="comment">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingToValues).map(([name, value]) =>(
          <ReviewRatingItem
            key={name}
            name={name}
            value={value}
            currentRating={commentPost.rating}
            onRatingChange={handleRatingChange}
          />))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="comment" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" value={commentPost.comment} onChange={handleTextChange} required minLength={MIN_COMMENT_LENGTH} maxLength={MAX_COMMENT_LENGTH}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          onClick={handleSubmit}
          disabled = {!(commentPost.comment.length >= MIN_COMMENT_LENGTH && commentPost.rating)}
        >Submit
        </button>
      </div>
    </form>);
}

export default NewCommentForm;
