import { useDispatch, useSelector } from 'react-redux';

import { VehicleTypeItem } from '../VehicleTypeItem/VehicleTypeItem';

import { AlcoveIcon } from '../VehicleTypeIcons/AlcoveIcon';
import { FullyInegratedVanIcon } from '../VehicleTypeIcons/FullyInegratedVanIcon';
import { VanIcon } from '../VehicleTypeIcons/VanIcon';

import { addFilter } from '../../store/campersData/actionFile'

import styles from './VehicleType.module.css';
import { selectFilterData } from '../../store/selectors';

export const VehicleType = () => {
  const dispatch = useDispatch()
  const filterData = useSelector(selectFilterData)

  const itemHundler = (event) => {
    dispatch(addFilter({ form: event.target.value.toLowerCase() }))
  }

  return (
    <div className={styles.radioWrapper}>
      <VehicleTypeItem checked={filterData?.form === "van"} onChange={itemHundler} iconType={<VanIcon />} type="Van" />
      <VehicleTypeItem checked={filterData?.form === "fully integrated"} onChange={itemHundler} iconType={<FullyInegratedVanIcon />} type="Fully Integrated" />
      <VehicleTypeItem checked={filterData?.form === "alcove"} onChange={itemHundler} iconType={<AlcoveIcon />} type="Alcove" />
    </div>
  );
};
