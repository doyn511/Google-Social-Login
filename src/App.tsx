import SignUp from "../public/SignUp.png";
import "./App.css";

function App() {
  return (
    <>
      <button className="login-btn">
        <img src={SignUp} alt="로그인버튼" className="login-img" />
      </button>
    </>
  );
}

export default App;
