import swiggy from "../assets/swiggyPic.jpg"
import coding from '../assets/Coding-background.jpg'
import snapAi from '../assets/snapAi_thumbnail.png'
import { FiExternalLink } from "react-icons/fi";

export default function ProjectsPage(){
    return(
        <div className="projectsPage" name="Projects">
            <h2 className="projectHeading mainHeading"> Projects</h2>
            <div className="projSection">
                {/* <h3 className="subHeading">My Creations</h3> */}
                <div className="projCards">
                    <div className="pcard">
                        <img src={swiggy} alt="" className="cardImage" />
                        <div className="hiddenCard">
                            <h3>Swiggy Clone</h3>
                            <p>A food delivery web application inspired by Swiggy, built with modern frontend technologies. It includes features like restaurant listings, menu browsing, cart management, and responsive design to give users a seamless ordering experience.</p>
                            <a target="_blank" href="https://cravecart-swiggy-clone.vercel.app/">
                                <FiExternalLink size={24} color="#3b82f6" className="openIcon" />
                            </a>
                        </div>
                    </div>
                    <div className="pcard">
                        <img src={snapAi} alt="" className="cardImage" />
                        <div className="hiddenCard">
                            <h3>SnapAI</h3>
                            <p>An AI-powered web application that provides tools for article writing, blog title generation, AI image creation, and resume analysis. Built with a full-stack architecture and integrated AI services for automated content and image processing.</p>
                            <a href="https://snap-ai-beta.vercel.app/">
                                <FiExternalLink size={24} color="#3b82f6" className="openIcon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="horizrule"/>
        </div>
    )
}