import { IoMdStar } from "react-icons/io";

export default function TestimonialCard(props) {
    const starStyle = {color: '#AA8D7C', fontSize: '2.5rem', padding: 0, margin: 0}
    return (
        <div className="testimonial-card">
            <div className="stars"><IoMdStar style = {starStyle}/><IoMdStar style = {starStyle}/><IoMdStar style = {starStyle}/><IoMdStar style = {starStyle}/><IoMdStar style = {starStyle}/></div>
            <p>{props.testimonial.message}</p>
            <p className="reviewer-name">- {props.testimonial.name}</p>
        </div>
    )
}