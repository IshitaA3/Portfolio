import swiggy from "../assets/swiggyPic.jpg"
import coding from '../assets/Coding-Background.jpg'
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
                        <img src={coding} alt="" className="cardImage" />
                        <div className="hiddenCard">
                            <h3>CodeQuest</h3>
                            <p>A web-based coding platform that allows users to solve algorithmic challenges, track progress, and improve problem-solving skills. It mimics the functionality of popular competitive programming platforms with an intuitive interface and real-time code evaluation.</p>
                            <a href="">
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