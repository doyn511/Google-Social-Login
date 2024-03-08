import { useState } from "react";
import { useLocation } from "react-router-dom";

function Complete() {
  const location = useLocation();
  const [token, setToken] = useState(location.state?.accessToken);
  return (
    <div>
      <div>로그인 완료!</div>
      <br />
      <div>AccessToken : {token}</div>
    </div>
  );
}

export default Complete;
