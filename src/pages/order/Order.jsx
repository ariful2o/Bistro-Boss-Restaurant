import Cover from "../../components/cover/Cover";
import sectionImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

import useMenu from "../../hooks/menus/useMenu";
import MenuItem from "../../components/menu/MenuItem";


export default function Order() {
    const [menu] = useMenu()
    const offered = menu.filter(menu => menu.category === "offered")
    const soup = menu.filter(menu => menu.category === "soup")
    const dessert = menu.filter(menu => menu.category === "dessert")
    const salad = menu.filter(menu => menu.category === "salad")
    return (
        <section>
            <Cover img={sectionImg} title="OUR MENU" subTitle="Would you like to try a dish?"></Cover>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-12 my-10 w-11/12 mx-auto">
                {
                    offered.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                }
            </div>
            <Cover img={soupImg} title="SOUP" subTitle="Would you like to try a dish?"></Cover>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-12 my-10 w-11/12 mx-auto">
                {
                    soup.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                }
            </div>
            <Cover img={dessertImg} title="DESSERTS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-12 my-10 w-11/12 mx-auto">
                {
                    dessert.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                }
            </div>
            <Cover img={saladImg} title="salad" subTitle="Would you like to try a dish?"></Cover>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-12 my-10 w-11/12 mx-auto">
                {
                    salad.map(menu => <MenuItem key={menu._id} menu={menu}></MenuItem>)
                }
            </div>
        </section>
    )
}
