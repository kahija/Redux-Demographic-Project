import { combineReducers } from 'redux';
import ReducerCountries from "./reducer_countries"
import ReducerRateExchange from "./reducer_rate_exchanche"

const rootReducer = combineReducers({
  countryReducer: ReducerCountries,
  rateExchangeReducer: ReducerRateExchange
});

export default rootReducer;
