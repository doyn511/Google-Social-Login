import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import SignIn from "../public/SignIn.png";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleClickLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      navigate("/complete", {
        state: {
          accessToken: tokenResponse.access_token,
        },
      });
    },
  });

  return (
    <div>
      <button className="login-btn" onClick={() => handleClickLogin()}>
        <img src={SignIn} alt="로그인버튼" className="login-img" />
      </button>
    </div>
  );
}

export default Login;
