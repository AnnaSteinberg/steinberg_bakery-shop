import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {
    const  navigate = useNavigate();

    useEffect(()=>{
        navigate('/error');
    },[])

    // useEffect(() => {
    //     const handleReload = (event: { preventDefault: () => void; }) => {
    //         event.preventDefault();
    //         navigate('/')
    //     };
    //
    //     window.addEventListener("beforeunload", handleReload);
    //
    //     return () => {
    //         window.removeEventListener("beforeunload", handleReload)
    //     };
    // }, [navigate]);



    return (
        <div>
            Error 404! Page not found
        </div>
    );
};

export default ErrorPage;