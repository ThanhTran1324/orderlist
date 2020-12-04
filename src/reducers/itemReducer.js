import { KGI_Item_List } from "../companies/kgi";
import { KGI_Item_List_2 } from "../companies/kgi2";

const initialState = {
	companies: {
	kgi: KGI_Item_List ,
	kgi2: KGI_Item_List_2
	},
	items: KGI_Item_List
};

export default (state = initialState, action) => {
  let newItemList = [];
  switch (action.type) {
    case "INCREASE":
		newItemList = [...state.items];
		if (action.payload === 42 || action.payload === 49) {
			newItemList[action.payload].qty= newItemList[action.payload].qty + 0.5; 
		}else{
			newItemList[action.payload].qty++; 
		}
      return {
		  ...state,
		  items: newItemList
	  };

    case "DECREASE":
		newItemList = [...state.items];
		newItemList.map((item, index) => {
        if (index === action.payload) {
          if ((index === 42 || index === 49) && item.qty - 0.5 >= 0)
            item.qty = item.qty - 0.5;
          else if (item.qty - 1 >= 0) item.qty = item.qty - 1;
        }
        return item;
      });
	  return {
		...state,
		items: newItemList
	};

    case "RESET":
		newItemList = [...state.items];
		newItemList.map( e =>  e.qty=0 );
		return {
			...state,
			items: newItemList
		};
	  
	case 'SETCOMPANY':
		return {
			...state,
			items: state.companies[action.payload]
		};

    default:
      return state;
  }
};
