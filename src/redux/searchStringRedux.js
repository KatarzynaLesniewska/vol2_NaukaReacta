import shortid from 'shortid';

// selectors
export const getSearchString = ({searches}, stringId) => searches.filter(search => search.stringId == stringId);
export const countVisibleCards = ({cards}, searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({cards}) => cards.length;

// action name creator
const reducerName = 'searches';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE = createActionName('CHANGE');

// action creators
export const createActionChange = payload => ({ payload: { ...payload, id: shortid.generate() }, type: CHANGE });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return [...state, action.payload];
    default:
      return statePart;
  }
}
