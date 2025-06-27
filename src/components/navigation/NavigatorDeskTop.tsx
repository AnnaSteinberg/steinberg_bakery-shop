import {RouteType} from "../../utils/shop-types.ts";
import {FC, useEffect, useState} from "react";
import {AppBar, Box, Tab, Tabs, Toolbar} from '@mui/material'
import {Link, Outlet, useLocation} from "react-router-dom";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {auth} from '../../configurations/firebase-config.ts'

type Props = {
    items: RouteType[],
    sub?: string
}

const NavigatorDeskTop:FC<Props> = ({items}) => {

    const [value, setValue] = useState(0);
    const {pathname} = useLocation()
    const user = auth.currentUser;
    const displayName = user?.displayName ?? '';


    useEffect(() => {
        const index = items.findIndex(item => item.path === pathname.substring(1) )
        if(value !== index)
            setValue(Math.max(index,0));
    }, [pathname]);

    const handleOnChange = (e:React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        console.log(e)
    }

    return (
        <Box sx={{mt: '50px'}}>
            <AppBar sx={{backgroundColor: 'lightgray'}}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                <Tabs value={value} onChange={handleOnChange}>
                {
                    items.map(item =>
                        <Tab key={item.path} component={Link} to={item.path} label={item.title}/>
                    )
                }
            </Tabs>
                <Typography variant="subtitle1" sx={{ ml: 2 }}>
                    {displayName}
                </Typography>
                </Toolbar>

            </AppBar>
            <Outlet/>

        </Box>
    );
};

export default NavigatorDeskTop;