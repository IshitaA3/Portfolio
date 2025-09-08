import resume from '../assets/resume.pdf' 
import { FaInstagram, FaGithub, FaLinkedin   } from "react-icons/fa";
import image from '../assets/profile3.jpeg'
import { ReactTyped } from "react-typed";
import { useSelector } from 'react-redux';


function Homepage(){
    const color = useSelector((state) => state.theme.color);
    return(
        <>
        <div className={`main ${color === "light" ? "whiteHome" : "blackHome"}`} name="Home">
            <div className="left">
                <div className="myName">Hii, I am Ishita Agarwal</div>
                {/* <div className="role">Full Stack Developer</div> */}
                <ReactTyped
                    className="role"
                    // typedRef={setTyped}
                    strings={["Full Stack Developer", "Programmer"]}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                />
                <div className="desc">I am a Full Stack Developer — where frontend elegance meets backend robustness.</div>
                <div className="socialLinks">
                    <a target='_blank' href="https://github.com/IshitaA3" className="link">
                        <FaGithub className='icon' />
                    </a>
                    <a target='_blank' href="https://linkedin.com/in/ishitaagarwal13" className="link">
                        <FaLinkedin className='icon'  />
                    </a>
                    <a target='_blank' href="https://www.instagram.com/ishi__.13" className="link">
                        <FaInstagram className='icon' />
                    </a>
                    
                    
                </div>
                <a className="resume" href={resume} download="Ishita_resume">Resume</a>
            </div>
            <div className="right">
                <img src={image} alt="" className='profileImage' />
            </div>
            
        </div>
        <hr className={`horizrule ${color==="light" ? "whiteRule" : "blackRule"}`} />
        </>
    )
}
export default Homepage;
