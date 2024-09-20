import { classData } from "../../classData"
import ClassCard from "./ClassCard"

export default function Classes() {
    return (
        <div className="classes-container">
            <div className="classes-title"> <h2>Our Classes</h2>
            <p>We offer a diverse range of classes designed to suit every level of experience. From energizing flows and meditative breathwork to calming yin practices, our expert instructors are here to guide you on your wellness journey. Explore our class offerings below to find the perfect fit for your body and mind.</p></div>
       
        <div className="yoga-classes">
        {classData.map((yogaClass) => {
          return (
            <ClassCard key={yogaClass.id} yogaClass={yogaClass} />
          );
        })}
      </div>
    </div>
  );
}