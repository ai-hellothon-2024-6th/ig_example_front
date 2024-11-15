import { useEffect, useState } from "react";
import { getMe } from "../api";

interface Me {
  userId: string;
  username: string;
  name: string;
  profilePictureUrl: string;
  followersCount: number;
  followsCount: number;
  mediaCount: number;
}

export function useMe() {
  const [me, setMe] = useState<Partial<Me>>({});
  useEffect(() => {
    const accessTokenInStorage = localStorage.getItem("accessToken");
    if (!accessTokenInStorage) {
      return;
    }
    getMe(accessTokenInStorage).then((me) => {
      setMe({
        userId: me.userId,
        username: me.username,
        name: me.name,
        profilePictureUrl: me.profilePictureUrl,
        followersCount: me.followersCount,
        followsCount: me.followsCount,
        mediaCount: me.mediaCount,
      });
    });
  }, []);

  return me;
}
