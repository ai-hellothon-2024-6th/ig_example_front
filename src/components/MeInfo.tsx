import { useMe } from "../hooks/useMe";
import Info from "./Info";

export function MeInfo() {
  const me = useMe();

  if (!me.userId) {
    return <></>;
  }

  return (
    <>
      <h2>유저 정보</h2>
      <div style={{ display: "flex", gap: 24 }}>
        <Info.CodeWithH3 title="유저 ID" content={me.userId!} />
        <Info.CodeWithH3 title="유저 이름" content={me.name!} />
        <Info.ImageWithH3
          title="유저 프로필 사진"
          url={me.profilePictureUrl!}
        />
        <Info.CodeWithH3
          title="팔로워 수"
          content={me.followersCount?.toString()}
        />
        <Info.CodeWithH3
          title="팔로잉 수"
          content={me.followsCount?.toString()}
        />
        <Info.CodeWithH3
          title="미디어 수"
          content={me.mediaCount?.toString()}
        />
      </div>
    </>
  );
}
