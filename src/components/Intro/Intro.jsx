import "./Intro.css";
import couple from "../../assets/images/couple.png";
import cheers from "../../assets/gif/cheers.gif"; 
export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-container">

        {/* TITLE + ICON */}
        <div className="intro-header">
          <img src={cheers} alt="cheers" className="cheers left" />
          <h2 className="intro-title">LỜI NGỎ</h2>
          <img src={cheers} alt="cheers" className="cheers right" />
        </div>

        {/* CONTENT */}
        <p className="intro-text">
          Gửi đến gia đình và bạn bè thân mến,<br /><br />
          Trong ngày trọng đại sắp tới – khi chúng mình chính thức
          bắt đầu một chặng đường mới của cuộc đời,
          thật hạnh phúc và vinh dự biết bao khi được
          sẻ chia niềm vui ấy cùng mọi người.<br /><br />
          Chúng mình trân trọng kính mời bạn đến dự lễ cưới,
          cùng chung vui và lưu giữ những khoảnh khắc ý nghĩa bên nhau.<br /><br />
          Sự hiện diện của bạn sẽ là niềm vinh hạnh lớn lao
          và là món quà tinh thần tuyệt vời nhất đối với chúng mình.
        </p>

        {/* IMAGE */}
        <div className="intro-image-wrapper">
          <div className="image-border" />
          <img src={couple} alt="couple" className="intro-image" />
        </div>

      </div>
    </section>
  );
}