import { useParams } from "react-router-dom";

const ViewUserInfo = () => {
    const {id} = useParams();
    console.log(id);
    
    return (
        <div>
            <h1>View User Info</h1>
        </div>
    )
}

export default ViewUserInfo;
