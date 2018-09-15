import { itemsHasErrored, itemsIsLoading } from '../actions/items';
import 'whatwg-fetch';


const api = ({ dispatch, getState }) => next => action => {

    if (action.type !== "ITEMS_GET_FROM_API") {
      return next(action);
    }
  
    const { url, success } = action.payload;
   
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
    })
    .then((response) => response.json())
    .then((items) => dispatch(success(items)))
    .catch(() => dispatch(itemsHasErrored(true)));
  };
  
  export default api;