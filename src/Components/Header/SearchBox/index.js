import { IoMdSearch } from "react-icons/io";
import { Button } from "@mui/material";


const SearchBox=()=>{
    return(
        <div className="headerSearch ml-3 mr-3">
        <input type="text/" placeholder="Search for products"></input>
        <Button> <IoMdSearch /> </Button>
       </div>
    )
}
export default SearchBox;