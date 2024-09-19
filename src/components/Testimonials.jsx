import { testimonialData } from "../../data"
import TestimonialCard from "./TestimonialCard"


export default function Testimonials() {
    return (
        <div className="testimonials-container">
     
            <h2>Testimonials</h2>
        <div className="testimonials">
        {testimonialData.map((testimonial) => {
            return (<TestimonialCard key = {testimonial.id} testimonial = {testimonial} />)
        })}
        </div>
        </div>
    )
}