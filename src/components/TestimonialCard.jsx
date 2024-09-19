import { IoMdStar } from "react-icons/io";

export default function TestimonialCard(props) {
    const starStyle = {color: '#AA8D7C', fontSize: '3rem'}
    return (
        <div className="testimonial-card">
            <div className="stars"><IoMdStar style = {starStyle}/><IoMdStar style = {starStyle}/><IoMdStar style = {starStyle}/><IoMdStar style = {starStyle}/><IoMdStar style = {starStyle}/></div>
            <h2>{props.testimonial.title}</h2>
            <p>{props.testimonial.message}</p>
            <p className="reviewer-name">- {props.testimonial.name}</p>
        </div>
    )
}