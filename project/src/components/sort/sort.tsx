import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import { SortOption } from '../../const';
import { setSortOption } from '../../store/action';
import {Dispatch} from 'redux';
import { Actions } from '../../types/action';
import SortOptionItem from '../sort-option-item/sort-option-item';
import { MouseEvent } from 'react';

const handleSortListClick = () => {
  const sortOptionsElement = document.querySelector('.places__options--custom');

  if(sortOptionsElement){
    sortOptionsElement.classList.toggle('places__options--opened');
    sortOptionsElement.classList.toggle('places__options--closed');
  }
};

const mapStateToProps = ({currentSortOption}:State) => ({
  currentSortOption,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  handleSortOptionChange(evt : MouseEvent<HTMLLIElement>, currentSortOption: string) {
    if(evt.currentTarget.dataset.name && evt.currentTarget.dataset.name !== currentSortOption){
      handleSortListClick();
      dispatch(setSortOption(evt.currentTarget.dataset.name));
    }
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Sort ({currentSortOption, handleSortOptionChange}:PropsFromRedux): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortListClick}>
        {currentSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--closed">
        {
          Object
            .values(SortOption)
            .map((sortOption) => <SortOptionItem key={sortOption} sortOptionName={sortOption} currentSortOption={currentSortOption} onSortOptionClick={handleSortOptionChange}/>)
        }
      </ul>
    </form>
  );
}

export default connector(Sort);
export {Sort};
