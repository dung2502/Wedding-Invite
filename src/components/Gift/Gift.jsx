import "./Gift.css";
import qr from "../../assets/images/qr.jpg";

export default function Gift() {
  return (
    <section id="gift" className="gift gift--reveal">
      <h2 className="gift__title">Mừng Cưới</h2>

      <p className="gift__subtitle">
        Nếu bạn muốn gửi quà mừng, tụi mình xin nhận bằng mã QR bên dưới.
      </p>

      <div className="gift__grid">
        <div className="gift-card gift-card--reveal">
          <div className="gift-card__label">QR chuyển khoản</div>

          <img src={qr} className="qr" alt="Mã QR mừng cưới" />

          <div className="gift-card__hint">
            Mở app ngân hàng và quét mã để chuyển khoản nhanh.
          </div>
        </div>
      </div>
    </section>
  );
}
