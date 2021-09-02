import { configureStore } from "@reduxjs/toolkit";
import ChatReducer from "./Chat/ChatSlice";
import ProfileReducer from "./Profile/ProfileSlice";

export default configureStore({
  reducer: {
    chat: ChatReducer,
    profile: ProfileReducer,
  },
});
