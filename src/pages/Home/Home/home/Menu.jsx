
import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/sectionHeading/SectionTitle";
import MenuItem from "../../../../components/menu/MenuItem";


export default function menu() {
    const [menus, setMenus] = useState([])
    const [fullMenu, setFullMenu] = useState(false)
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                if (fullMenu) {
                    setMenus(data)
                } else {
                    const sortMenu = data.slice(0, 6)
                    setMenus(sortMenu)
                }
            })

    }, [fullMenu])

    const showFullMenu = () => {
        setFullMenu(!fullMenu)
    }
    return (
        <section className="w-full lg:w-11/12 mx-auto">
            <SectionTitle title={'FROM OUR MENU'} subtitle={'---Check it out---'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {
                    menus.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                }
            </div>
            <button onClick={showFullMenu} className="btn btn-outline border-0 border-b-2 mx-auto block my-6">{fullMenu?'View Less  Menu':'View Full  Menu'}</button>
        </section>
    )
}
