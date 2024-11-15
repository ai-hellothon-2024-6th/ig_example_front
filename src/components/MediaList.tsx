import { useComment } from "../hooks/useComment";
import { useMedia } from "../hooks/useMedia";

const MediaList = () => {
  const mediaList = useMedia();
  const { commentId, setCommentId, submitReply, setCommentFrom, commentFrom } =
    useComment();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitReply(
      e.currentTarget["text"].value,
      e.currentTarget["isReply"].checked
    );
  };

  if (!mediaList.length) {
    return <></>;
  }

  return (
    <>
      <h2>미디어 목록</h2>
      <form onSubmit={handleSubmit}>
        <p>{commentId}</p>
        {commentId && (
          <>
            <label>
              댓글 : <input name="text" />
            </label>
            <br />
            <label>
              <input type="checkbox" name="isReply" />
              <code>@</code> 붙이기 ({commentFrom})
            </label>
            <br />
            <button>등록</button>
          </>
        )}
      </form>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        {mediaList.map((media) => (
          <div key={media.id}>
            <figure>
              <img
                src={media.thumbnail_url ?? media.media_url}
                style={{ width: 200 }}
              />
              <figcaption>{media.caption}</figcaption>
              <a href={media.permalink} target="_blank">
                게시물 가기
              </a>
              <p>
                댓글 수 : {media.comments_count}, 좋아요 수 : {media.like_count}
              </p>
              <p>
                {new Date(media.timestamp).toLocaleString("ko-KR", {
                  timeZone: "Asia/Seoul",
                })}
              </p>
              {media.comments.map((comment) => (
                <div
                  key={comment.id}
                  style={{ border: "1px solid black", padding: "8px" }}
                  onClick={() => {
                    setCommentId(comment.id);
                    setCommentFrom(comment.from.username);
                  }}
                >
                  <strong>{comment.from.username}</strong>
                  <p>댓글 ID : {comment.id}</p>
                  {comment.parent_id && (
                    <p>부모 댓글 ID : {comment.parent_id}</p>
                  )}
                  <p>{new Date(comment.timestamp).toLocaleString()}</p>
                  <p>{comment.text}</p>
                </div>
              ))}
            </figure>
          </div>
        ))}
      </div>
    </>
  );
};

export default MediaList;
