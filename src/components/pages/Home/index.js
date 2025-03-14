import { useState } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.jpeg";
export const Home = () => {
  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [sifre, setSifre] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (sifre.length < 6) {
      setError("6 karakterden az girdiniz");
      return;
    }

    if (kullaniciAdi === "umutalp" && sifre === "1234567") {
      navigate("/profile");
    } else {
      setError("Kullanıcı adı veya şifre yanlış");
    }
  };

  return (
    <div className="container">
      <div className="resim-kismi">
        <img src={logo} alt="foto" />
      </div>
      <div className="login-box">
        <h1 className="text-kismi">Login to your account</h1>
        <input
          type="text"
          placeholder="Kullanıcı Adı giriniz..."
          value={kullaniciAdi}
          onChange={(e) => setKullaniciAdi(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifre giriniz..."
          value={sifre}
          onChange={(e) => setSifre(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <div className="buton-kismi">
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="gri-kisim">
          <label className="yazi1">Dont have an account ?</label>
          <label className="yazi2"> Sign Up</label>
        </div>
      </div>
    </div>
  );
};

export default Home;
