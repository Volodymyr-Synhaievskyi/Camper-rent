import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../Button';
import { SearchField } from '../SearchField';
import { VehicleEquipment } from '../VehicleEquipment';
import { VehicleType } from '../VehicleType/VehicleType';

import { selectFilterData } from '../../store/selectors';
import { getCamperDataThunk } from '../../store/campersData/thunk';

import MapPin from '../../img/Map-pin';

import styles from './SearchForm.module.css';
import { addFilter, clearFilter, changeCurrentPage } from '../../store/campersData/actionFile';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const filterData = useSelector(selectFilterData);

  const searchBtnHandler = (e) => {
    e.preventDefault();

    dispatch(getCamperDataThunk(filterData));
  };

  const handleSearchInput = (event) => {
    if (event.target.value.length === 0) {
      dispatch(clearFilter());
    }

    dispatch(addFilter({ location: event.target.value }));
  };

  return (
    <form className={styles.searchForm} onSubmit={searchBtnHandler}>
      <SearchField
        value={filterData?.location}
        onChange={handleSearchInput}
        lable="Location"
        placeholder="City"
        icon={<MapPin styleValue="inputProp" />}
      />
      <p className={styles.filtersLabel}>Filters</p>
      <h2 className={styles.searchHeader}>Vehicle equipment</h2>
      <VehicleEquipment />

      <h2 className={styles.searchHeader}>Vehicle type</h2>
      <VehicleType />
      <Button type="submit">Search</Button>
      <Button
        onClick={(e) => {
          e.preventDefault();
          dispatch(clearFilter());
          dispatch(changeCurrentPage(1));
          dispatch(getCamperDataThunk({ page: 1, limit: 4 }));
        }}>
        Clear
      </Button>
    </form>
  );
};
