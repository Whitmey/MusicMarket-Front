import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function moneyChange(params/*, hash*/) {
  let cssClass = '';
  if (params[0] > 0) {
    cssClass = 'positive'
  }
  else if (params[0] < 0) {
    cssClass = 'negative';
  }

  let dollars;
  if (params[0] < 0) {
    dollars = Math.ceil(params[0] / 100)
  }
  else {
    dollars = Math.floor(params[0] / 100);
  }
  let cents = Math.abs(params[0]) % 100;
  let sign = '$';

  if (cents.toString().length === 1) { cents = '0' + cents; }
  return new htmlSafe(`<td class="${cssClass}">${sign}${dollars}.${cents}</td>`);
}

export default helper(moneyChange);
