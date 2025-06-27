import {SignupData} from "../../utils/shop-types.ts";
import {registerWithEmailAndPassword, saveFullName} from "../../firebase/firebaseAuthService.ts";
import {useNavigate} from "react-router-dom";
import SignUp from "../templates/SignUp.tsx";

const Registration = () => {
    const navigate = useNavigate();
    // const  signUpSubmit = (data:SignupData)=> {
    //     console.log(JSON.stringify(data));
    // }

    const signUpWithEmail = async (data:SignupData) => {
        const userEmailPass:SignupData = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password
        }
        try {
            await  registerWithEmailAndPassword(userEmailPass);
            saveFullName(userEmailPass)
            navigate("/login");
        }catch (e){
            console.log(e);
        }
    }

    return (
        <div>
            <SignUp  signUpWithEmail={signUpWithEmail}/>
        </div>
    );
};

export default Registration;