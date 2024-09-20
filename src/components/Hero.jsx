import { Link } from "react-router-dom"

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-container-text">
        <h1 className="hero-title">find your flow.</h1>
        <div className="hero-container-text-body">
        <h2>welcome to our studio.</h2>
        <p>We offer yoga classes in a range of styles. From fiery vinyasa to soulful yin, there's something to suit everyone.</p>
        <Link to = {"/timetable"}><button className="hero-btn">BOOK NOW</button></Link>
        </div>
        </div>
       
        <img src="../assets/images/hero-photo.jpg" alt="A woman sat on a yoga mat, in a twist pose." />
        
        </div>
    )
}