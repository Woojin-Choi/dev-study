import React from "react";

// 이렇게 스타일 작성도 가능!
const style = {
  commentText: {
    color: "blue",
    fontSize: 16,
  },
};

function Comment(props) {
  return (
    <div>
      <h1 style={style.commentText}>{props.comment}</h1>
    </div>
  );
}

export default Comment;
