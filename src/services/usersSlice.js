import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',

  initialState,

  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },

    updateUser(state, action) {
      const { id, changes } = action.payload;

      const user = state.users.find(
        (user) => user.id === id
      );

      if (user) {
        Object.assign(user, changes);
      }
    },
  },
});

export const {
  setUsers,
  updateUser,
} = usersSlice.actions;

export default usersSlice.reducer;