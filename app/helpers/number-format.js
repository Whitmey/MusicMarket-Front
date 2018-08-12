import { helper } from '@ember/component/helper';

export function numberFormat(params/*, hash*/) {
  var parts = params[0].toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export default helper(numberFormat);
