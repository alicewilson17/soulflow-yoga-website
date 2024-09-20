import { Link } from "react-router-dom"
import QuoteApi from "../QuoteApi"

export default function BookNow() {
    return (
        <div className="booknow">
        <h2>Ready to begin your journey?</h2>
        <QuoteApi />
        <Link to={"/timetable"}><button className="hero-btn">BOOK A CLASS</button></Link>
        </div>
    )
}