import { ProfilePic } from "../profile/ProfilePhoto";
import { FullName } from "../profile/FullName";
import { Address } from "../profile/Address";
import './page.css'

export const Page = ()=>{
    return(
        <div className="card">
            <ProfilePic/>
            <FullName/>
            <Address/>
        </div>
        
    )
}