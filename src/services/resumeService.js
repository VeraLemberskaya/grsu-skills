export const divideIntoTwoColumns = (items) => {
  let col1 = [],
    col2 = [];
  for (let i = 0; i < items.length; i++) {
    i % 2 ? col1.push(items[i]) : col2.push(items[i]);
  }
  return [col1, col2];
};

export const filterByQuery = (items, query) => {
  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase())
  );
};

export const divideIntoColumns = (items) => {
  let col1 = [],
    col2 = [];

  let flag = false;

  for (let i = 0; i < items.length; i++) {
    if (!(i % 5)) flag = !flag;
    flag ? col1.push(items[i]) : col2.push(items[i]);
  }

  return [col1, col2];
};
