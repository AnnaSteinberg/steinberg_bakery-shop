import {useAppDispatch} from "../../redux/hooks.ts";
import {loginAction} from "../../redux/slices/authSlice.ts";
import {SignIn} from "../templates/SignIn.tsx";
import {LoginData} from "../../utils/shop-types.ts";
import {login} from "../../firebase/firebaseAuthService.ts";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // const funcForLogin = (data: LoginData) => {
    //     dispatch(loginAction(data.email))
    // }

    const loginWithFirebase = async (loginData:LoginData) => {
        try {
           const email = await login(loginData);
           dispatch(loginAction(email));
           navigate('/')
        }catch (e){
            console.log(e);// код ошибки получить и перекинуть пользователя на правильную страницу
        }
    }

    return (
        <div>
            <SignIn funcForLogin={loginWithFirebase}/>
        </div>
    );
};

export default Login;