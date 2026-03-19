import { useState, useEffect } from "react";
import "./RSVP.css";
import toast from "react-hot-toast";

export default function RSVP() {
  const [form, setForm] = useState({
    name: "",
    attend: "yes",
    guest: 1,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 👉 Load lại dữ liệu nếu user đã nhập trước đó
  useEffect(() => {
    const saved = localStorage.getItem("rsvp");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  // 👉 Auto save
  useEffect(() => {
    localStorage.setItem("rsvp", JSON.stringify(form));
  }, [form]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const submit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error("Vui lòng nhập tên của bạn!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      toast.success(`Cảm ơn ${form.name}! 💖`, {
        style: {
          borderRadius: "12px",
          background: "#fff",
          color: "#e91e63",
          fontWeight: "600",
        },
      });

      // 👉 clear form
      setForm({
        name: "",
        attend: "yes",
        guest: 1,
        message: "",
      });

      setSuccess(true);
    }, 1000);
  };

  return (
    <section className="rsvp">
      <h2 className="rsvp__title">Xác nhận tham dự</h2>

      <p className="rsvp__subtitle">Vui lòng phản hồi trước ngày cưới 💖</p>

      <form className="rsvp__form" onSubmit={submit}>
        {/* Name */}
        <input
          className="rsvp__input"
          placeholder="Tên của bạn"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        {/* Attend */}
        <div className="rsvp__radio">
          <button
            type="button"
            className={form.attend === "yes" ? "active" : ""}
            onClick={() => handleChange("attend", "yes")}
          >
            Sẽ tham dự
          </button>

          <button
            type="button"
            className={form.attend === "no" ? "active" : ""}
            onClick={() => handleChange("attend", "no")}
          >
            Không tham dự
          </button>
        </div>

        {/* Guest */}
        {form.attend === "yes" && (
          <input
            type="number"
            min="1"
            className="rsvp__input"
            value={form.guest}
            onChange={(e) => handleChange("guest", e.target.value)}
          />
        )}

        {/* Message */}
        <textarea
          className="rsvp__textarea"
          placeholder="Gửi lời chúc 💌"
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />

        <button className="rsvp__button" disabled={loading}>
          {loading ? "Đang gửi..." : "Gửi xác nhận"}
        </button>

        {success && <p className="rsvp__success">💖 Cảm ơn bạn đã phản hồi!</p>}
      </form>
    </section>
  );
}
