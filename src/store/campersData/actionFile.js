import { createAction } from '@reduxjs/toolkit';

export const addSelectedCamper = createAction('addSelectedCamper');
export const removeSelectedCamper = createAction('removeSelectedCamper');

export const addFilter = createAction('addFilter');
export const clearFilter = createAction('clearFilter');

export const changeCurrentPage = createAction('changeCurrentPage');
