import {RouteType} from "../../utils/shop-types.ts";
import {FC, useState} from "react";
import {Box, Link, Tab, Tabs} from '@mui/material'
import {Outlet} from "react-router-dom";
import * as React from "react";

type Props = {
    items: RouteType[],
    sub?: string
}

const NavigatorDeskTop:FC<Props> = ({items}) => {

    const [value, setValue] = useState(0);
    const handleOnChange = (e:React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        console.log(e)
    }

    return (
        <Box>
            <Tabs value={value} onChange={handleOnChange}>
                {
                    items.map(item =>
                        <Tab key={item.path} component={Link} to={item.path} label={item.title}/>
                    )
                }
            </Tabs>
            <Outlet/>
        </Box>
    );
};

export default NavigatorDeskTop;