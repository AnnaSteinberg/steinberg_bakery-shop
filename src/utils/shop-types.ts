
export enum Roles {
    ALL = 0, USER = 1, ADMIN = 2, NO_AUTH = 3, NOT_ADMIN
}

export enum  Paths {
    HOME = '/',
    ORDERS = 'orders',
    PRODUCTS = 'products',
    CART = 'cart',
    CUSTOMERS = 'customers',
    BREAD = 'bread',
    DAIRY = 'dairy',
    ERROR = 'error',
    BACK = 'back',
    LOGIN = 'login',
    LOGOUT='logout',
    SIGNUP = 'signup'
}

export type RouteType = {
    path: Paths,
    title: string,
    role?: Roles
}

export type LoginData = {
    email:string,
    password:string
}

export type SignupData = {
    firstName: string,
    lastName: string,
    email:string,
    password:string
}

export type ProductType = {
    id?: string,
    title: string,
    category: string,
    unit: string,
    cost: number,
    img: string
}

export type CategoryType = {
    category_name: string,
}