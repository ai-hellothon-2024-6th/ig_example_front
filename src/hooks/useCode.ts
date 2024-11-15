import { useEffect, useState } from "react";

export function useCode() {
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      localStorage.setItem("code", code);
      localStorage.removeItem("accessToken");
      window.location.href = "/";
    } else {
      const codeInStorage = localStorage.getItem("code");
      if (codeInStorage) {
        setCode(localStorage.getItem("code")!);
      }
    }
  }, []);

  return code;
}
