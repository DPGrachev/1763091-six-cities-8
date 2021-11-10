import {render, screen} from '@testing-library/react';
import { comments } from '../../utils/mocks';
import ReviewsList from './reviews-list';

describe('Component: ReviewsList', () => {
  it('should render correctly', () => {
    const {container} = render(<ReviewsList reviews={comments}/>);

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(container.querySelector('.reviews__list')).toBeInTheDocument();
  });
});
