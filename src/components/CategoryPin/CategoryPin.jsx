import AC from '../../assets/svg/ac.svg';
import Beds from '../../assets/svg/beds.svg';
import CD from '../../assets/svg/cd.svg';
import Freezer from '../../assets/svg/freezer.svg';
import Gas from '../../assets/svg/gas.svg';
import Hob from '../../assets/svg/hob.svg';
import Kitchen from '../../assets/svg/kitchen.svg';
import Microwave from '../../assets/svg/microwave.svg';
import Petrol from '../../assets/svg/petrol.svg';
import Radio from '../../assets/svg/radio.svg';
import Shower from '../../assets/svg/shower.svg';
import Toilet from '../../assets/svg/toilet.svg';
import TV from '../../assets/svg/tv.svg';
import Water from '../../assets/svg/water.svg';

import styles from './CategoryPin.module.css';

const dataPin = {
  airConditioner: { name: 'AC', component: <AC /> },
  kitchen: { name: 'Kitchen', component: <Kitchen /> },
  beds: { name: 'Beds', component: <Beds /> },
  TV: { name: 'TV', component: <TV /> },
  CD: { name: 'CD', component: <CD /> },
  radio: { name: 'Radio', component: <Radio /> },
  shower: { name: 'Shower', component: <Shower /> },
  toilet: { name: 'Toilet', component: <Toilet /> },
  freezer: { name: 'Freezer', component: <Freezer /> },
  hob: { name: 'Hob', component: <Hob /> },
  microwave: { name: 'Microwave', component: <Microwave /> },
  gas: { name: 'Gas', component: <Gas /> },
  water: { name: 'Water', component: <Water /> },
  petrol: { name: 'Petrol', component: <Petrol /> },
};

export const CategoryPin = ({ nameData, quantity }) => {
  return (
    <div className={styles.pinWrapper}>
      {dataPin[nameData] && dataPin[nameData].component}
      {quantity > 1 && <p>{quantity}</p>}
      {dataPin[nameData] && <p>{dataPin[nameData].name}</p>}
    </div>
  );
};
