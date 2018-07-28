import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function percentChange(params/*, hash*/) {
  let percentChange = params[0];
  if (percentChange > 0) {
    return new htmlSafe(`<td class="positive">${percentChange}%</td>`);
  }
  else if (percentChange < 0) {
    return new htmlSafe(`<td class="negative">${percentChange}%</td>`);
  }
  return new htmlSafe(`<td>${percentChange}%</td>`);
}

export default helper(percentChange);
