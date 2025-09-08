import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";


export default function FooterPage(){
    const color = useSelector((state) => state.theme.color)

    return(
        <div className={`footerPage ${color==="light" ? "whiteFooter" : "blackFooter"}`}>
            <div className="footIcons">
                <a target="_blank" href="https://facebook.com/profile.php?id=61572841760082" className="socialLink">
                    <FaFacebook size={24} className="socialIcon" color= "#1877F2" />
                </a>
                <a target="_blank" href="https://twitter.com/Ishita1308" className="socialLink">
                    <FaTwitter size={24} className="socialIcon" color= "#1da1f2" />
                </a>
                <a target="_blank" href="https://www.instagram.com/ishi__.13" className="socialLink">
                    <FaInstagram size={24} className="socialIcon" color= "#F56040" />
                </a>
                <a target="_blank" href="https://linkedin.com/in/ishitaagarwal13" className="socialLink">
                    <FaLinkedin size={24} className="socialIcon" color= "#0077b5" />
                </a>
            </div>
            <div className="copyright">
                &copy; Ishita. All Rights Reserved.
            </div>
        </div>
    )
}