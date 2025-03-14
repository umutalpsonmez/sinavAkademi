import "./profile.css";

import logo from "../../images/logo.jpeg";
import resim1 from "../../images/1.jpeg";
import resim2 from "../../images/2.jpeg";
import resim3 from "../../images/3.jpeg";
import resim4 from "../../images/4.jpeg";
import resim5 from "../../images/5.jpeg";
import resim6 from "../../images/6.jpeg";
export const Profile = () => {
  return (
    <div className="container">
      <div className="resim-kismi">
        <img src={logo} alt="logo" />
      </div>
      <div className="header">
        <div className="baslik">
          <h1>username</h1>
        </div>
        <div className="linkler">
          <a href="#hakkımda" className="link">
            Hakkımda
          </a>
          <a href="#profilim" className="link">
            Profilim
          </a>
          <a href="#mesajlar" className="link">
            Mesajlar
          </a>
          <a href="#çıkış" className="link">
            Çıkış
          </a>
        </div>
      </div>
      <div className="body">
        <div className="ilk-kisim">
          <div className="foto1">
            <img src={resim1} alt="foto" />
            <label>Project 1</label>
          </div>
          <div className="foto1">
            <img src={resim1} alt="foto" />
            <label>Project 2</label>
          </div>
          <div className="foto1">
            <img src={resim1} alt="foto" />
            <label>Project 3</label>
          </div>
        </div>
        <div className="ikinci-kisim">
          <div className="foto1">
            <img src={resim1} alt="foto" />
            <label>Project 4</label>
          </div>
          <div className="foto1">
            <img src={resim2} alt="foto" />
            <label>Project 5</label>
          </div>
          <div className="foto1">
            <img src={resim3} alt="foto" />
            <label>Project 6</label>
          </div>
        </div>
        <div className="ucuncu-kisim">
          <div className="foto1">
            <img src={resim4} alt="foto" />
            <label>Project 7</label>
          </div>
          <div className="foto1">
            <img src={resim5} alt="foto" />
            <label>Project 8</label>
          </div>
          <div className="foto1">
            <img src={resim6} alt="foto" />
            <label>Project 9</label>
          </div>
        </div>
      </div>
      <div className="footer">
        <div>
          <p>
            Lorem ipsum dolor sit,amet consectetur adipisicing elit Officia
            incudunt
          </p>
        </div>
        <label className="iletisim-yazi">İletişim Bilgileri</label>
        <div className="gri-cizgi"></div>
        <div className="enalt-yazi">
          <label>info@test.com</label>
          <label>0555 555 55 55</label>
        </div>
      </div>
    </div>
  );
};

export default Profile;
