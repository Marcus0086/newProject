export default function binarySearch(arr,key) {
    let l = 0,
        h = arr.length,
        mid = 0;
    while (l <= h) {
        mid = Math.floor((l + h) / 2);
        if (key === arr[mid]) {
            return mid;
        }
        if (key < arr[mid]) {
            h = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
}

