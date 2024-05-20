import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { EquipmentCheckbox } from '../EquipmentCheckbox/EquipmentCheckbox';

import { ACIcon, AutomaticIcon, KitchenIcon, ShowerIcon, TvIcon } from '../Icons';

import { addFilter } from '../../store/campersData/actionFile';

import styles from './VehicleEquipment.module.css';

export const VehicleEquipment = () => {
  const dispatch = useDispatch();

  // Step 1: Initialize the state as an object
  const [selectedEquipment, setSelectedEquipment] = useState({
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Shower: false,
  });

  // Step 2: Update the function to toggle the boolean value
  const handleEquipmentChange = (equipment) => {
    setSelectedEquipment((prevState) => ({
      ...prevState,
      [equipment]: !prevState[equipment],
    }));
  };

  // Step 3: Adjust the useEffect hook
  useEffect(() => {
    dispatch(addFilter({ details: { CD: 3 } }));
  }, [selectedEquipment]);

  return (
    <div className={styles.equipmentWrapper}>
      <EquipmentCheckbox
        iconType={<ACIcon />}
        equipment="AC"
        onChange={() => handleEquipmentChange('AC')}
        checked={selectedEquipment.AC}
      />
      <EquipmentCheckbox
        iconType={<AutomaticIcon />}
        equipment="Automatic"
        onChange={() => handleEquipmentChange('Automatic')}
        checked={selectedEquipment.Automatic}
      />
      <EquipmentCheckbox
        iconType={<KitchenIcon />}
        equipment="Kitchen"
        onChange={() => handleEquipmentChange('Kitchen')}
        checked={selectedEquipment.Kitchen}
      />
      <EquipmentCheckbox
        iconType={<TvIcon />}
        equipment="TV"
        onChange={() => handleEquipmentChange('TV')}
        checked={selectedEquipment.TV}
      />
      <EquipmentCheckbox
        iconType={<ShowerIcon />}
        equipment="Shower"
        onChange={() => handleEquipmentChange('Shower')}
        checked={selectedEquipment.Shower}
      />
    </div>
  );
};
