import Cover from "../../components/cover/Cover";
import sectionImg from '../../assets/menu/banner3.jpg'
import useMenu from "../../hooks/menus/useMenu";


export default function Order() {
    const [menu] = useMenu()
    const offered = menu.filter(menu => menu.category === "offered")
    const soup = menu.filter(menu => menu.category === "soup")
    const dessert = menu.filter(menu => menu.category === "dessert")
    const drinks = menu.filter(menu => menu.category === "drinks")
   console.log(menu)
    return (
        <section>
            <Cover img={sectionImg} title="OUR MENU" subTitle="Would you like to try a dish?"></Cover>
        </section>
    )
}
