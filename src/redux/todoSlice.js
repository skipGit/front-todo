import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, message: "Make some quests", completed: false },
  { id: 2, message: "Call Eddie at 10.20 PM", completed: false },
  { id: 3, message: "Cashout money from Steam", completed: true },
  { id: 4, message: "Buy tickets to opera", completed: false },
];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
})