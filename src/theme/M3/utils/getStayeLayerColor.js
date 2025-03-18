import { Blend } from '@material/material-color-utilities';

export let StateLayer;
(function (StateLayer) {
  StateLayer[(StateLayer['Hover'] = 0.08)] = 'Hover';
  StateLayer[(StateLayer['Focus'] = 0.12)] = 'Focus';
  StateLayer[(StateLayer['Press'] = 0.12)] = 'Press';
  StateLayer[(StateLayer['Drag'] = 0.16)] = 'Drag';
})(StateLayer || (StateLayer = {}));

export const getStateLayerColor = (state, containerColor, contentColor) => {
  return Blend.cam16Ucs(containerColor, contentColor, state);
};
