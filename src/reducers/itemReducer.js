import {KGI_Item_List} from "../companies/kgi";




export default (state = KGI_Item_List , action) => {
    let newstate=[];
    switch(action.type){
    
        case "INCREASE": 
            
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
        
        newstate=state.map((item,index) => {
                if(index === action.payload && item.qty -1 >= 0 )
                {
                    item.qty = item.qty - 1;   
                }
                return item;
            });
        window.localStorage.setItem('CGI_items', JSON.stringify(newstate));    
        return newstate;

        case "LOADITEMFROMFLOCALSTORAGE":
                if(localStorage && localStorage.getItem('CGI_items'))
                    return JSON.parse(localStorage.getItem('CGI_items'));  
                else
                    return state;

        case "RESET": 
        //console.log("reset");
        //console.log(KGI_Item_List);
            newstate=KGI_Item_List;
            window.localStorage.setItem('CGI_items', JSON.stringify(newstate));
            window.location.reload();
            return newstate;

       

        default : 
            return state;
    }
};