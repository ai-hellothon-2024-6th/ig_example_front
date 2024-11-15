import { useState } from "react";
import { reply } from "../api";

export function useComment() {
  const [commentId, setCommentId] = useState<string>("");
  const submitReply = (text: string) => {
    reply(commentId, localStorage.getItem("accessToken")!, text)
      .then(() => {
        alert("댓글 작성 완료");
      })
      .catch(() => {
        alert("댓글 작성 실패");
      });
  };

  return { commentId, setCommentId, submitReply };
}
