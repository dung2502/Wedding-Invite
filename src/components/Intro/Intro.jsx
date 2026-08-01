import "./Intro.css";
import couple from "../../assets/images/optimized/intro.webp";
import cheers from "../../assets/gif/cheers.gif";

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-container">
        <div className="intro-image-wrapper">
          <div className="image-border" />
          <img src={couple} alt="Đức Hải và Minh Ánh" className="intro-image" />
        </div>

        <div className="intro-content">
          <div className="intro-header">
            <img src={cheers} alt="" className="cheers left" aria-hidden="true" />
            <p className="intro-eyebrow">Wedding invitation</p>
            <img src={cheers} alt="" className="cheers right" aria-hidden="true" />
          </div>

          <h2 className="intro-title">Lời Ngỏ</h2>

          <div className="intro-text">
            <p>Gửi đến gia đình, anh em và bạn bè,</p>
            <p>
              Trong ngày trọng đại sắp tới, khi chúng mình chính thức bắt đầu
              một chặng đường mới của cuộc đời, thật hạnh phúc và vinh dự khi
              được sẻ chia niềm vui ấy cùng mọi người.
            </p>
            <p>
              Chúng mình trân trọng kính mời bạn đến dự lễ cưới, cùng chung vui
              và lưu giữ những khoảnh khắc ý nghĩa bên nhau.
            </p>
            <p>
              Sự hiện diện của bạn sẽ là niềm vinh hạnh lớn lao và là món quà
              tinh thần tuyệt vời nhất đối với chúng mình.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
