import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "Bae Sujeong", age: 27 },
  reducers: {},
});

export default user;
