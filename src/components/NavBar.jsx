import { UlMenuUsers } from "./UlMenuUser"


export const NavBar = ()=> {

    return (
        <nav className="w-full h-14 flex justify-end p-2 bg-amber-200">
            <UlMenuUsers />
        </nav>
    )
}