import { Link } from "react-router-dom"


const Navbar = ({token, setToken}) => {

    const handleToken = () => {
        setToken(' ')
    }
    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-5 bg-white transition-all duration-300">
                <Link to='/'>
                    <h1 className="text-xl font-bold">SHOPSIZZLE</h1>
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    {
                        token ?
                            <button
                                onClick={handleToken}
                                className='border rounded-full text-sm px-4 py-1'>Logout
                            </button> :
                            <button
                                className='border rounded-full text-sm px-4 py-1'>Login
                            </button>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;