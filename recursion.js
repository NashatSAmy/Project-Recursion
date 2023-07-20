function fibs(n) {
  let fibNList = [];
  for (let i = 0; i < n; i++) {
    fibNList.length < 2
      ? fibNList.push(fibNList.length)
      : fibNList.push(fibNList[i - 1] + fibNList[i - 2]);
  }
  return fibNList;
}

function fibsRec(n) {
  return n > 2
    ? [...[+fibsRec(n - 1)[0] + +fibsRec(n - 2)[0]], ...fibsRec(n - 1)]
    : n == 2
    ? [+fibsRec(n - 1) + 0]
    : n == 1
    ? [+fibsRec(n - 1) + 1]
    : [0];
}


function mergeSort(a) {
    if (a.length < 2) return a
    let left = mergeSort(a.slice(0, Math.floor(a.length / 2)));
    let right = mergeSort(a.slice(Math.floor(a.length / 2)));
    let merged = [];
    let lever = "";
    while (merged.length < a.length) {
        left[0] < right[0] ? merged.push(left[0]) : merged.push(right[0])
        left.includes(merged[merged.length - 1]) ? left.shift() : right.shift()
    }
    return merged
}
