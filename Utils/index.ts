import _ from 'lodash';
import { monthNames } from './month';

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatDate(date: string) {
  const _date = _.first(date.split(' '));
  const [day, month, year] = _date.split('-').reverse();
  const monthNumber = parseFloat(month);
  return `${day} ${monthNames[monthNumber - 1]} ${year}`;
}
