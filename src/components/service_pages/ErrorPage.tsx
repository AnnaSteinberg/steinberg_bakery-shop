import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../utils/shop-types.ts";

const ErrorPage = () => {
    const  navigate = useNavigate();

    useEffect(()=>{
        navigate(`/${Paths.ERROR}`);
    },[])

    return (
        <div>
            Error 404! Page not found
        </div>
    );
};

export default ErrorPage;