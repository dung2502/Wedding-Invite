import { FaHeart, FaFacebook, FaInstagram } from "react-icons/fa"
import "./Footer.css"

export default function Footer(){

return(

<footer className="footer">

<div className="footer-content">

<h2>
Đức Hải <FaHeart className="heart"/> Minh Ánh
</h2>

<p className="date">
08 August 2026
</p>

<p className="thanks">
Cảm ơn bạn đã dành thời gian tham dự ngày trọng đại của chúng tôi ❤️
</p>

<div className="social">

<a href="#">
<FaFacebook/>
</a>

<a href="#">
<FaInstagram/>
</a>

</div>

</div>

<div className="copyright">

© 2026 Wedding Invitation • Made with Love
</div>

</footer>

)

}