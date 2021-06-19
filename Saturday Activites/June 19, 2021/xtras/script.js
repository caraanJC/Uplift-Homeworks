let nested_list = [
  1,
  [2, 3, null, 4, [1, 2, [9, 8, [1, 2, 3, 4], 8, 8], 3]],
  [null],
  5,
];
let flat_list = [];

const parseList = (nested_list) => {
  for (let i = 0; i < nested_list.length; i++) {
    if (Array.isArray(nested_list[i])) {
      parseList(nested_list[i]);
    } else {
      if (nested_list[i] == null) {
        continue;
      }
      flat_list.push(nested_list[i]);
    }
  }
};

parseList(nested_list);
flat_list.sort();
console.log(flat_list);
