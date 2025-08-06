import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { GoListUnordered } from "react-icons/go";
import { LuUsers } from "react-icons/lu";

const SideBar = () => {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col mt-4 pl-6">
                <NavLink to={'/add'} className='flex items-center justify-center md:justify-normal border border-gray-300 border-r-0 p-2 hover:bg-black/80 hover:text-white duration-300 gap-4'>
                <FaPlus />
                <p className="hidden md:inline-flex font-semibold">Add Items</p>
                </NavLink>

                <NavLink to={'/list'} className='mt-6 flex items-center justify-center md:justify-normal border border-gray-300 border-r-0 p-2 hover:bg-black/80 hover:text-white duration-300 gap-4' >
                <GoListUnordered />
                <p className="hidden md:inline-flex font-semibold">Product List</p>
                </NavLink>

                <NavLink to={'/order'} className='mt-6 flex items-center justify-center md:justify-normal border border-gray-300 border-r-0 p-2 hover:bg-black/80 hover:text-white duration-300 gap-4' >
                <AiOutlineProduct /> 
                <p className="hidden md:inline-flex font-semibold">Orders</p>
                </NavLink>

                <NavLink to={'/users'} className='mt-6 flex items-center justify-center md:justify-normal border border-gray-300 border-r-0 p-2 hover:bg-black/80 hover:text-white duration-300 gap-4' >
                <LuUsers/>
                <p className="hidden md:inline-flex font-semibold">Users List</p>
                </NavLink>
                
            </div>
            
        </div>
    );
};

export default SideBar;