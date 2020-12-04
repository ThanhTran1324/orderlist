export const increase = id => {
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

export const setCompany = (companyId) => {
	
	return {
		type: "SETCOMPANY",
		payload: companyId
	  };
};