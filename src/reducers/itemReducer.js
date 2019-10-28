import {KGI_Item_List} from "../companies/kgi";




export default (state = KGI_Item_List , action) => {
    
    switch(action.type){
    
        case "INCREASE": 
            let newstate = [] ;
            newstate=state.map((item,index) => {
                if(index === action.payload)
                {
                    item.qty = item.qty + 1;   
                }
                return item;
            });
        window.localStorage.setItem('CGI_items', JSON.stringify(newstate));
        return newstate;

        case "DECREASE": 
        let newstate2 = [] ;
            newstate2=state.map((item,index) => {
                if(index === action.payload && item.qty -1 >= 0 )
                {
                    item.qty = item.qty - 1;   
                }
                return item;
            });
        window.localStorage.setItem('CGI_items', JSON.stringify(newstate2));    
        return newstate2;

        case "LOADITEMFROMFLOCALSTORAGE":
                if(localStorage && localStorage.getItem('CGI_items'))
                
                    return JSON.parse(localStorage.getItem('CGI_items'));  
                else
                    return state;

        case "RESET": 
        console.log("reset");
        console.log(KGI_Item_List);
            window.localStorage.setItem('CGI_items', JSON.stringify(KGI_Item_List));
            return KGI_Item_List;

        case "CREATE_MESSAGE":
            console.log(state);
            return state;

        default : 
            return state;
    }
};