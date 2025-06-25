import {Paths, Roles, RouteType} from "../utils/shop-types.ts";

export  const  navItems: RouteType[] = [
    {path: Paths.HOME, title: 'home', role: Roles.ALL},
    {path: Paths.ORDERS, title: 'orders', role: Roles.USER},
    {path: Paths.CART, title: 'cart', role: Roles.NOT_ADMIN},
    {path: Paths.CUSTOMERS, title: 'customers', role: Roles.ADMIN},
    {path: Paths.PRODUCTS, title: 'products', role: Roles.ALL},
    {path: Paths.LOGIN, title: 'login', role: Roles.NO_AUTH},
    {path: Paths.LOGOUT, title: 'logout', role: Roles.USER},
    // {path: Paths.SIGNUP, title: 'signup', role: Roles.NO_AUTH} //??

]

export  const productItems: RouteType[] = [
    {path: Paths.BREAD, title: 'bread'},
    {path: Paths.DAIRY, title: 'dairy'},
    {path: Paths.BACK, title: 'Back to main menu'},
]