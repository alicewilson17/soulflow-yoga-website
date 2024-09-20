export default function ClassCard(props) {
    console.log(props)
 return (<div className="yoga-class-card">
<img src={props.yogaClass.img} style={{"width": "20rem"}}/>
<div className="class-card-text"><h3>{props.yogaClass.name}</h3>
<p>{props.yogaClass.description}</p></div>
 </div>
 )
}