/* Action creators */

// Actions (returned from creators) will be dispacthed by the component

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

/*

By default, Redux action creators don't support asynchronous actions like fetching data, so here's where we utilise Redux Thunk. 

Thunk allows you to write action creators that return a function instead of an action. The inner function can receive the store methods dispatch and getState as parameters, but we'll just use dispatch.

*/

// Using middleware to do our API request instead us using thunks.
// No reducer acts upon this action but the middleware picks it up and fires additional dispatches.
export const itemsFetchData = (url) => ({
    type: "ITEMS_GET_FROM_API",
    payload: {
      url: url,
      success: (items) => itemsFetchDataSuccess(items),
    }
  });


export function itemsRemoveItem(index) {
    return {
        type: 'ITEMS_REMOVE_ITEM',
        index
    };
}