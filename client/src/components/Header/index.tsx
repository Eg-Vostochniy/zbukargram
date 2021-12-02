import { memo } from "react"
import { Navbar } from "./Navbar"
import { Seacrh } from "./Search"

export const Header: React.FC = memo(() => {

    return (
        <div className='header'>
            <h2>Zbukargram</h2>
            <Seacrh />
            <Navbar />
        </div>
    )
})