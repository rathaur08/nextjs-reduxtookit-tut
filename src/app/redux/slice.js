const { createSlice, nanoid } = require("@reduxjs/toolkit");

// createSlice
const initialState = {
  users: []
}

const Slice = createSlice({
  name: 'addUserSlice',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      }
      state.users.push(data);
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => {
        return item.id !== action.payload
      })
      state.users = data
      // console.log(action)
    }
  }
})

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;