import './App.css'
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {Paths, Roles, RouteType} from "./utils/shop-types.ts";
import Home from "./components/Home.tsx";
import Customers from "./components/Customers.tsx";
import Orders from "./components/Orders.tsx";
import Bread from "./components/Bread.tsx";
import Dairy from "./components/Dairy.tsx";
import {navItems, productItems} from "./configurations/nav-config.ts";
import ShoppingCart from "./components/ShoppingCart.tsx";
import ErrorPage from "./components/service_pages/ErrorPage.tsx";
import {useEffect} from "react";
import NavigatorDeskTop from "./components/navigation/NavigatorDeskTop.tsx";
import {useAppSelector} from "./redux/hooks.ts";
import Login from './components/service_pages/Login.tsx'
import Logout from './components/service_pages/Logout.tsx'
import SignUp from "./components/templates/SignUp.tsx";

function App() {

    const location = useLocation();
    const navigate = useNavigate();
    const {authUser} = useAppSelector(state => state.auth)

    useEffect(()=>{
        if(location.pathname === `/${Paths.ERROR}`)
            navigate('/')
    },[])



    const predicate = (item:RouteType)=> {
        let isAdmin = false;
       if (authUser)
            isAdmin = authUser.includes('admin')
        return(
            item.role === Roles.ALL ||
                item.role === Roles.USER && authUser  ||
                item.role === Roles.ADMIN && isAdmin ||
                item.role === Roles.NOT_ADMIN && authUser && !isAdmin ||
                item.role === Roles.NO_AUTH && !authUser
        )
    }

    const getRoutes = ()=> {
        return navItems.filter(item => predicate(item))
    }

    return (
        <Routes>
            {/*<Route path={Paths.HOME} element={<Layout/>} />*/}
            {/*<Route path={Paths.HOME} element={<Navigator items={navItems}/>}>*/}
            <Route path={Paths.HOME} element={<NavigatorDeskTop items={getRoutes()}/>}>
                <Route index element={<Home/>}/>
                <Route path={Paths.CUSTOMERS} element={<Customers/>}/>
                <Route path={Paths.ORDERS} element={<Orders/>}/>
                <Route path={Paths.CART} element={<ShoppingCart/>}/>
                {/*<Route path={Paths.LOGIN} element={<Login/>}/>*/}

                {/*<Route path={Paths.PRODUCTS} element={<Products/>}/>*/}
                {/*<Route path={Paths.PRODUCTS} element={<ProductLayout/>}>*/}
                <Route path={Paths.PRODUCTS} element={<NavigatorDeskTop items={productItems}/>}>
                    <Route path={Paths.BREAD} element={<Bread/>}/>
                    <Route path={Paths.DAIRY} element={<Dairy/>}/>
                    <Route path={Paths.BACK} element={<Navigate to={Paths.HOME}/>}/>
                </Route>
                <Route path={Paths.SIGNUP} element={<SignUp/>}/>
                <Route path={Paths.LOGIN} element={<Login/>}/>
                <Route path={Paths.LOGOUT} element={<Logout/>}/>
            </Route>

            {/*<Route path="error" element={<ErrorPage />}/>*/}
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    )
}

export default App
