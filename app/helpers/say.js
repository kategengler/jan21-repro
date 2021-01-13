import { helper } from '@ember/component/helper';

export default helper(function say([one]) {
  console.log(one);
});
