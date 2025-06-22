import {useAppDispatch} from "../../redux/hooks.ts";
import {loginAction} from "../../redux/slices/authSlice.ts";
import {SignIn} from "../templates/SignIn.tsx";
import {LoginData} from "../../utils/shop-types.ts";

const Login = () => {

    const dispatch = useAppDispatch();
    const funcForLogin = (data: LoginData) => {
        dispatch(loginAction(data.email))
    }

    return (
        <div>
            <SignIn funcForLogin={funcForLogin}/>
        </div>
    );
};

export default Login;