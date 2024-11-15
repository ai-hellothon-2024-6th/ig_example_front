import { getAccessCode } from "../api";
import { useAccessToken } from "../hooks/useAccessToken";
import { useCode } from "../hooks/useCode";
import { makeUrl } from "../utils";
import Info from "./Info";

function login() {
  window.location.href = makeUrl();
}

export function Login() {
  const code = useCode();
  const accessToken = useAccessToken();
  function requestAccessToken(code: string) {
    getAccessCode(code)
      .then((data) => {
        localStorage.setItem("accessToken", data.access_token);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <button onClick={login}>로그인</button>
      {code && (
        <>
          <Info.CodeWithH2 title="코드" content={code} />
          <br />
          <br />
          <button onClick={() => requestAccessToken(code)}>
            액세스 토큰 요청
          </button>
        </>
      )}
      {accessToken && (
        <Info.CodeWithH2
          title="액세스 토큰 (JWT로 대체 예정)"
          content={accessToken}
        />
      )}
    </>
  );
}
