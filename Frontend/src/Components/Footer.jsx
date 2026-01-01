import { Link } from "react-router-dom";

function Footer() {
    return(
        <>
            <div>
                <div className="flex flex-col mt-8 mx-6" >
                    <h3 className="font-bold text-lg" >Navigate</h3>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/projects"}>My Projects</Link>
                    <Link to={"/education"}>Education and Experiences</Link>
                    <Link to={"/contact"}>Contact Me</Link>
                </div>
                <div className="flex justify-center mt-10" >
                    <p>Noordin's Portfolio. All rights reserved.</p>
                </div>
            </div>
        </>
    );
};


export default Footer;