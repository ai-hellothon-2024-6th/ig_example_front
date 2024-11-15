import { useEffect, useState } from "react";

export function useAccessToken() {
  const [accessToken, setAccessToken] = useState<string>("");
  useEffect(() => {
    const accessTokenInStorage = localStorage.getItem("accessToken");
    if (accessTokenInStorage) {
      setAccessToken(accessTokenInStorage);
    }
  }, []);

  return accessToken;
}
