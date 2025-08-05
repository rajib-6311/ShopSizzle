import SearchInput from "./SearchInput";


const Navbar = () => {
    return (
        <div className="border-b-[1px] border-slate-300 py-5">
            <nav className="container mx-auto flex items-center justify-between">
                <h1 className="text-xl font-bold uppercase">shopsizzle</h1>
                <div>
                    <SearchInput/>
                </div>
                <div className="flex text-primary-dull items-center gap-3 font-medium">
                    <p>User</p>
                    <p>Home</p>
                    <p>cart</p>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;