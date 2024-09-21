export default function ClassCard(props) {
    console.log(props)
 return (<div className={props.yogaClass.id%2===1 ?"yoga-class-card-a" : "yoga-class-card-b"}>
<img src={props.yogaClass.img} style={{"width": "20rem"}}/>
<div className="class-card-text"><h3>{props.yogaClass.name}</h3>
<p>{props.yogaClass.description}</p></div>
 </div>
 )
}