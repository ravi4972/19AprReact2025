import {items} from '../static/items'

export const fetchItemsList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });
};