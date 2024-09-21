export default function PriceCard(props) {
    return (
        <div className={props.pass.id%2===1 ? "pricecard-a" : "pricecard-b"}>
            <h3>{props.pass.title}</h3>
            <h4>{props.pass.price}</h4>
            <img src={props.pass.img}/>
            <p>{props.pass.description}</p>
            <button className="pricing-btn">buy now</button>
           
            </div>
    )
}