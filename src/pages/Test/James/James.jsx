import { useParams } from "react-router-dom";
import InfoJeux from "../../../components/InfoJeux/InfoJeux"
import Footer from "../../../components/footer/Footer";

function James (){
    const { id } = useParams();
    // console.log(id)
    return (
        <>
            <InfoJeux idpage={id} />
        </>
        
    )
}
export default James