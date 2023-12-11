import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RightBar from "./rightbar";
import {useModal} from "~/store/modal/hooks.js";

export default function MainLayout () {

    const modal = useModal()
    console.log(modal)

    return (
        <div className="w-[1265px] mx-auto flex">
            <Sidebar/>
            <main className="flex-1 flex gap-[30px]">
            <main className="flex-1 max-w-[600px] border-x  border-[#2f336]">
            <Outlet />
            </main>
            <RightBar/>
            </main>
        </div>
    )
}