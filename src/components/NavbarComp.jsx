import {Navbar,Typography,Button,Input} from "@material-tailwind/react";
import { ShoppingCartIcon,Bars3Icon} from "@heroicons/react/24/outline";
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";

const NavbarComp = () =>{

    const isloggedin = useSelector((state) => state.auth.userId);
    console.log(isloggedin);
    return(
        <div className="">
             <div className="px-2 py-2">
                <Navbar className="w-full px-4 py-3 flex justify-between items-center">
                    <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
                        <Typography as="a" variant="h6" href="#" className="mr-4 ml-2 cursor-pointer py-1.5 select-none">WIRE CART</Typography>
                    </div>
                    <div className="relative gap-2 hidden md:flex">
                        {
                            (isloggedin?
                                <Link to="/cart">
                                    <ShoppingCartIcon className="h-10 w-10 text-black mr-4"/>
                                </Link>
                                :
                                <></>    
                                
                            )
                        }
                        <Input color="teal" type="search" label="Enter Product Name" className="pr-20"/>
                        <Button color="teal" size="sm" className="!absolute right-1 top-1 rounded">Search</Button>
                    </div>
                    <div className="md:hidden">
                        <Bars3Icon className="h-8 w-8 text-black" />
                    </div>
                </Navbar>
            </div>
        </div>
    )
}

export default NavbarComp;