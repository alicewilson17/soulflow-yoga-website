import { pricingData } from "../../pricingData"
import PriceCard from "./PriceCard"

export default function Pricing() {
    return (
        <div className="pricing-container">
            <h2>Class Packs</h2>
            <p>Whether you're a seasoned yogi or just starting out on your journey, we offer a range of options to suit your schedule and commitment level.</p>

        <div className="pricecards-container">
            {pricingData.map((pass) => {
                return <PriceCard pass={pass} key={pass.id}/>
            })}
        </div>

        


        
        </div>
        
    )
}