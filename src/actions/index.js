export const loadItemFromLocalStorage = () => {
  return {
    type: "LOADITEMFROMFLOCALSTORAGE"
  };
};

export const increase = id => {
  console.log(id);
  return {
    type: "INCREASE",
    payload: id
  };
};

export const decrease = id => {
  return {
    type: "DECREASE",
    payload: id
  };
};

export const reset = () => {
  return {
    type: "RESET"
  };
};
