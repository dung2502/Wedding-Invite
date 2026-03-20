    import "./ThankYou.css";
    import couple from "../../assets/images/couple.png";

    export default function ThankYou() {
    return (
        <section className="thankyou">
        {/* Background Image */}
        <img
            src={couple}
            alt="wedding"
            className="thankyou-image"
        />

        {/* Overlay */}
        <div className="thankyou-overlay">
            <h2 className="thankyou-text">Thank you!</h2>
        </div>
        </section>
    );
    }
