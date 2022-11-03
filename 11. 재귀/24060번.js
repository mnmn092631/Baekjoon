const fs = require("fs");
let [NK, arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = NK.split(" ").map(Number);
arr = arr.split(" ").map(Number);
let count = 0;

function mergeSort(A, p, r) {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    mergeSort(A, p, q);
    mergeSort(A, q + 1, r);
    merge(A, p, q, r);
  }
}

function merge(A, p, q, r) {
  let i = p,
    j = q + 1,
    t = 0,
    tmp = [];
  while (i <= q && j <= r) {
    if (A[i] <= A[j]) {
      tmp[t++] = A[i++];
    } else {
      tmp[t++] = A[j++];
    }
  }
  while (i <= q) {
    tmp[t++] = A[i++];
  }
  while (j <= r) {
    tmp[t++] = A[j++];
  }
  (i = p), (t = 0);
  while (i <= r) {
    count++;
    if (count === K) {
      console.log(tmp[t]);
    }
    A[i++] = tmp[t++];
  }
}

mergeSort(arr, 0, arr.length - 1);
count < K && console.log(-1);
