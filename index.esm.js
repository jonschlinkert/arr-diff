function diff(arr /*, arrays*/) {
  const len = arguments.length;
  let idx = 0;
  while (++idx < len) {
    arr = diffArray(arr, arguments[idx]);
  }
  return arr;
}

function diffArray(one, two) {
  if (!Array.isArray(two)) {
    return one.slice();
  }

  const tlen = two.length;
  const olen = one.length;
  let idx = -1;
  let arr = [];

  while (++idx < olen) {
    let ele = one[idx];

    let hasEle = false;
    for (var i = 0; i < tlen; i++) {
      let val = two[i];

      if (ele === val) {
        hasEle = true;
        break;
      }
    }

    if (hasEle === false) {
      arr.push(ele);
    }
  }
  return arr;
}

export default diff;
