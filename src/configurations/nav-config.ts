import {Paths, RouteType} from "../utils/shop-types.ts";

export  const  navItems: RouteType[] = [
    {path: Paths.HOME, title: 'home'},
    {path: Paths.ORDERS, title: 'orders'},
    {path: Paths.CART, title: 'cart'},
    {path: Paths.CUSTOMERS, title: 'customers'},
    {path: Paths.PRODUCTS, title: 'products'},
]

export  const productItems: RouteType[] = [
    {path: Paths.BREAD, title: 'bread'},
    {path: Paths.DAIRY, title: 'dairy'},
    {path: Paths.BACK, title: 'Back to main menu'},
]