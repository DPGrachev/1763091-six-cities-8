import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ReviewItem from './review-item';
import { comments } from '../../utils/mocks';
import dayjs from 'dayjs';

const fakeComment = comments[0];
describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <ReviewItem review={fakeComment}/>
      </Router>,
    );
    expect(screen.getByAltText(/Reviews avatar/i)).toBeInTheDocument();
    expect(screen.getByText(fakeComment.user.name)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
    expect(screen.getByText(fakeComment.comment)).toBeInTheDocument();
    expect(screen.getByText(dayjs(fakeComment.date).format('MMMM YYYY'))).toBeInTheDocument();

  });
});
