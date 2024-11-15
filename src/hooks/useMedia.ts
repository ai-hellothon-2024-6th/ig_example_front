import { useEffect, useState } from "react";
import { useAccessToken } from "./useAccessToken";
import { useMe } from "./useMe";
import { getMedia } from "../api";

interface Comments {
  id: string;
  text: string;
  timestamp: string;
  username?: string;
}

interface Media {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  thumbnail_url?: string;
  comments: Comments[];
  comments_count: number;
  like_count: number;
}

export function useMedia() {
  const accessToken = useAccessToken();
  const { userId } = useMe();
  const [mediaList, setMediaList] = useState<Media[]>([]);

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    getMedia(userId!, accessToken).then((mediaList) => {
      console.log(mediaList);
      setMediaList(mediaList);
    });
  }, [accessToken, userId]);

  return mediaList;
}
