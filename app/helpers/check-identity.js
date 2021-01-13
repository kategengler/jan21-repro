import { helper } from '@ember/component/helper';

export default helper(function checkIdentity([context]/*, hash*/) {
  /* This is to ensure that stable-hash is actually stable */
  if (window.__myContext) {
    if (window.__myContext !== context) {
      throw new Error("Context identity changed");
    }
  }
  window.__myContext = context;
});
