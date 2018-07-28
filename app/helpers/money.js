import { helper } from '@ember/component/helper';

export function money(params/*, hash*/) {
  let dollars = Math.floor(params[0] / 100);
  let cents = params[0] % 100;
  let sign = '$';

  if (cents.toString().length === 1) { cents = '0' + cents; }
  return `${sign}${dollars}.${cents}`;
}

export default helper(money);
