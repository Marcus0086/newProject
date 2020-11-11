const binarySearchAlgo = [
    ["//Binary Search\n"],
    ["function binarySearch(\narr,\nkey\n) {\n"],
    ["arr = arr.sort((a, b) => (a - b));\nlet l = 0,\n    h = arr.length,\n    mid = 0;\n"],
    ["while (l <= h) {\n    mid = Math.floor((l + h) / 2);\n"],
    ["    if (key === arr[mid]) {\n        return mid;\n    }\n    if (key < arr[mid]) {\n"],
    ["            h = mid - 1;\n        } else {\n            l = mid + 1;\n        }\n    }\n    return -1;\n}"]
];

const binarySearchFile = binarySearchAlgo.join(" ");

export default binarySearchFile;