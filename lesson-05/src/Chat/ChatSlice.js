import { createSlice } from "@reduxjs/toolkit";

export const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    messagesList: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messagesList.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMessage } =
  ChatSlice.actions;

export default ChatSlice.reducer;
