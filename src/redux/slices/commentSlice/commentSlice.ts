import { createSlice } from "@reduxjs/toolkit";
import userComment from "../../thunks/commentThunk/commentNewThunk";

interface CommentType {
  content: string;
  numIndex: string;
  dataCUid: string;
  timedata: Date;
  displayName: string;
  isModified: boolean;
}

interface MyComment {
  boardComment: Record<number, CommentType[]>;
}

const initialState: MyComment = {
  boardComment: {},
};

const boardPageComment = createSlice({
  name: "pageComment",
  initialState,
  reducers: {
    deleteCommentSlice: (state, action) => {
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userComment.pending, (state, action) => {
        console.log(`비동기 댓글 요청 중`);
      })
      .addCase(userComment.fulfilled, (state, action) => {
        console.log(`비동기 댓글 요청 성공`);
      })
      .addCase(userComment.rejected, (state, action) => {
        console.log(`비동기 댓글 실패`);
      });
  },
});
export const { deleteCommentSlice } = boardPageComment.actions;
export default boardPageComment.reducer;
