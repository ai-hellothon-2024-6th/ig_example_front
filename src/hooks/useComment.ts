import { useState } from "react";
import { reply } from "../api";

export function useComment() {
  const [commentId, setCommentId] = useState<string>("");
  const [commentFrom, setCommentFrom] = useState<string>("");
  const submitReply = (text: string, isReply: boolean) => {
    reply(
      commentId,
      isReply ? `@${commentFrom} ${text}` : text,
      localStorage.getItem("accessToken")!
    )
      .then(() => {
        alert("댓글 작성 완료");
        location.reload();
      })
      .catch(() => {
        alert("댓글 작성 실패");
      });
  };

  return { commentId, setCommentId, submitReply, setCommentFrom, commentFrom };
}
