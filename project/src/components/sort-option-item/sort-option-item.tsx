import { MouseEvent } from 'react';

type SortOptionItemProps = {
  sortOptionName: string,
  currentSortOption: string,
  onSortOptionClick: (evt: MouseEvent<HTMLLIElement>, currentSortOption: string) => void,
}

function SortOptionItem ({sortOptionName , currentSortOption, onSortOptionClick}: SortOptionItemProps): JSX.Element {
  return (
    <li
      className={`places__option ${sortOptionName === currentSortOption? 'places__option--active':''}`}
      tabIndex={0}
      data-name={sortOptionName}
      onClick={(evt) => onSortOptionClick(evt, currentSortOption)}
    >
      {sortOptionName}
    </li>
  );
}

export default SortOptionItem;
