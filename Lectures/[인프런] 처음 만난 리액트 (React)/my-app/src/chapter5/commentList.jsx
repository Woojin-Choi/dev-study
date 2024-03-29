import React from "react";
import Comment from "./comment";

const comments = [
  {
    comment: "comment1",
  },
  {
    comment: "comment2",
  },
  {
    comment: "comment3",
  },
];

function CommentList(props) {
  return (
    <div>
      {/* 이렇게 동적으로 값 넘겨주기도 가능! */}
      <Comment comment={"props 코멘트 입니다"} />
      <Comment comment={"추가된 코멘트 입니다"} />

      {/* 이렇게 객체로 동적으로 값 넣기도 가능! */}
      {comments.map((c) => (
        <Comment comment={c.comment} />
      ))}
    </div>
  );
}

export default CommentList;
