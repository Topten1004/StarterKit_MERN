import { ADD_ITEM, DELETE_ITEM } from "./actions";

const initialState = {
  diaryItems: [],
};

const diaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let id = 1;
      if (state.diaryItems.length > 0) {
        id = state.diaryItems[0].id + 1;
      }
      let item = {
        id: id,
        title: action.payload.title,
        date: action.payload.date,
        text: action.payload.text,
      };
      let newDiaryItems = [item, ...state.diaryItems]
      newDiaryItems = newDiaryItems.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
      return {
        ...state,
        diaryItems: newDiaryItems,
      };
    case DELETE_ITEM:
        return {
            ...state,
            diaryItems: state.diaryItems.filter((item) => item.id !== action.payload)
        }
    default:
      return state;
  }
};

export default diaryReducer;
