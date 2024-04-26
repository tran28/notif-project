import { useNavigate } from "react-router-dom";
import { siteInfo } from "../data/siteInfo";

function Navbar() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    return (
        <>
            <div className="h-24 w-full flex justify-center items-center">
                <div onClick={handleClick} className="text-4xl text-black font-light cursor-pointer">{siteInfo.name}</div>
            </div>
        </>
    );
}

export default Navbar;