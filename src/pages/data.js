const reciept = {
  title: "choco land",
  price: 60.0,
  items: 7,
  date: "08-09-2023 at 23:20:05",
};
const newRecipet = {
  title: "potoato land",
  price: 80.0,
  items: 4,
  date: "08-09-2023 at 23:20:05",
};

const recieptsArray = [...Array(4).keys()].map((index) => ({
  id: index,
  ...reciept,
}));

export const getData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(recieptsArray);
    }, 2000);
  });
};

export const getNewItem = () => {
  return new Promise((res, rej) => {
    res(newRecipet);
  });
};
