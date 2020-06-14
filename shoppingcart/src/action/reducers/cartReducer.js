import { items } from "../constant";

import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_QUANTITY,
    SUBTRACT_QUANTITY,
    DISPLAY_ITEM,
    RESET_CART,
    DISPLAY_MODEL_IN_CART,
} from "../actionTypes";

const initState = {
    // items: ,

    addedItems: [],
    showItems: [],
    showModels: [],
    total: 0,
    taxes: 0,
    grandTotal: 0,
    // count: false,
};
const cartReducer = (state = initState, action) => {
    //INSIDE HOME COMPONENT

    if (action.type === ADD_TO_CART) {
        console.log(state.addedItems);
        // debugger;
        let existed_item = {};
        let addedItem = {};
        let temp = state.addedItems;
        let flag = false;
        if (state.addedItems.length) {
            console.log("elseee");
            existed_item = state.addedItems.find((item) => {
                console.log("====", item);
                if (action.itemA.id === item.id) {
                    if (action.itemA.subId === item.subId) {
                        console.log("**********************", item, action.itemA);
                        flag = true;
                        return item;
                    } else {
                        addedItem = action.itemA;
                        addedItem.subId = action.itemA.subId;
                        addedItem.title = action.itemA.title;
                        addedItem.price = action.itemA.price;
                        debugger;
                    }
                }

            });
            console.log(existed_item);
            if(!existed_item){
                action.itemA.quantity=1
                temp.push(action.itemA)
            }
        } else {
            console.log("innnnnn");
            // addedItem = items.find((item) => item.id === action.itemA.id);
            // addedItem.subId = action.itemA.subId;
            // addedItem.title = action.itemA.title;
            // addedItem.price = action.itemA.price;
            addedItem=action.itemA
        }
        // check if the action id exists in the addedItems
        // console.log(action.id);

        if (flag) {
            let total = 0;
            let tax = 0;
            let updatedItems = state.addedItems.map(item=>{
                if(item.id == existed_item.id){
                    item.quantity += 1;
                    total = total+ item.price*item.quantity;
                    tax = tax + item.tax*item.quantity;
                    return item
                }
                else{
                    total = total+ item.price
                    tax = tax + item.tax;
                    return item
                }
            })
            return {
                ...state,
                addedItems: updatedItems,
                total: total,
                taxes: tax,
            };
        } else if(!temp.length){
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price;
            let newTaxes = state.taxes + addedItem.tax;

            console.log(newTaxes);
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal,
                taxes: newTaxes,
            };
        }
        else{
            let total = 0;
            let tax = 0;
            let updatedItems = temp.map(item=>{
                // if(item.id == existed_item.id){
                //     item.quantity += 1;
                //     total = total+ item.price*item.quantity;
                //     tax = tax + item.tax*item.quantity;
                //     return item
                // }
                // else{
                    total = total+ item.price
                    tax = tax + item.tax;
                    return item
                // }
            })
            return {
                ...state,
                addedItems: updatedItems,
                total: total,
                taxes: tax,
            };
        }
        }

    if (action.type === RESET_CART) {
        return initState;
    }
    if (action.type === DISPLAY_ITEM) {
        let showItem = items.find((item) => item.id === action.id);

        return {
            ...state,
            // showItems: [showItem],
            showItems: showItem,
        };
    }
    if (action.type === REMOVE_FROM_CART) {
        let itemToRemove = state.addedItems.filter((item) => {
            // console.log(item.id,action.item,item.subId,action.subId);
            if(action.item.id == item.id && action.item.subId == item.subId){
                return item
            }
            // action.id !== item.id && action.subId != item.subId
        });
        let new_items = state.addedItems.filter((item) => {
            if(action.item.id == item.id ) {
                if(action.item.subId != item.subId){
                    return item

                }
            }
            else{
                return item
            }
        });
        itemToRemove = itemToRemove[0]
        console.log(itemToRemove,new_items);

        //calculating the total
        let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
        let newTaxes = state.taxes - itemToRemove.tax * itemToRemove.quantity;
        // console.log(itemToRemove);
        return {
            ...state,
            addedItems: new_items,
            total: newTotal,
            taxes: newTaxes,
        };
    }
    if (action.type === ADD_QUANTITY) {
        // debugger
        let addedItem = state.addedItems.find((item) => action.item.id === item.id);
        let newItem = state.addedItems.find((item) => action.item.subId === item.subId)
        console.log(newItem,addedItem);
        if(addedItem.quantity <= 9) {
            addedItem.quantity += 1;
            let newTotal = state.total + addedItem.price;
            let newTaxes = state.taxes + addedItem.tax;

            return {
                ...state,
                total: newTotal,
                taxes: newTaxes,
            };
        }  if(newItem.quantity <= 9) {
            newItem.quantity += 1;
            let newTotal = state.total + newItem.price;
            let newTaxes = state.taxes + newItem.tax;
            return {
                ...state,
                total: newTotal,
                taxes: newTaxes,
            };
        }

    }
    if (action.type === SUBTRACT_QUANTITY) {
        let addedItem = state.addedItems.find((item) => action.item.id === item.id);
        let newItem = state.addedItems.find((item) => action.item.subId === item.subId);
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let newTotal = state.total;
            let newTaxes = state.taxes;
            return {
                ...state,
                total: newTotal,
                taxes: newTaxes,
            };
        } else {
            addedItem.quantity -= 1;
            let newTotal = state.total - addedItem.price;
            let newTaxes = state.taxes - addedItem.tax;
            return {
                ...state,
                total: newTotal,
                taxes: newTaxes,
            };
        }
        // if(newItem.quantity === 1){
        //     let newTotal = state.total;
        //     let newTaxes = state.taxes;
        //     return{
        //         ...state,
        //         total:newTotal,
        //         taxes:newTaxes
        //     };
        // }
        // else{
        //     newItem.quantity -= 1;
        //     let newTotal = state.total - newItem.price;
        //     let newTaxes = state.taxes - newItem.tax;
        //     return {
        //         ...state,
        //         total: newTotal,
        //         taxes: newTaxes,
        //     };
        // }

    }
    if (action.type === "ADD_SHIPPING") {
        return {
            ...state,
            total: state.total + 20,
        };
    }

    if (action.type === "SUBTRACT_SHIPPING") {
        return {
            ...state,
            total: state.total - 20,
        };
    }
    if (action.type === "ADD_COUPON") {
        // state.count= true;
        return {
            ...state,
            total: state.total - 10,
        };
    }
    if(action.type === "DISPLAY_MODEL_IN_CART"){
        console.log(action.item);
        let total =0
        let taxes =0
        let new_items = state.addedItems.filter((item) => {
            if(action.item.id == item.id ) {
                if(action.item.subId == item.subId){
                    item.models.map((ele)=>{
                        if(ele.id == action.item.subId2)
                        {
                            item.title = ele.name;
                            item.price = ele.price;
                            item.subId = ele.id;
                        }


                    })
                    total=total+item.quantity*item.price;
                    taxes=taxes+item.quantity*item.tax;

                    return item

                }
            }
            else{
                total=total+item.quantity*item.price;
                taxes=taxes+item.quantity*item.tax;
                return item
            }

        });

        return{
            ...state,
            addedItems: new_items,
            total:total,
            taxes:taxes
        }
    }
    else {
        return state;
    }
};
export default cartReducer;