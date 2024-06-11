import banner from "../../assets/shop/banner2.jpg"
import Cover from "../../components/cover/Cover"
import Tabs from "./Tabs/TabItems"


function Shop() {
  return (
    <section>
      <Cover img={banner} title={'Our Shop'} subTitle={'Would you like to Try a Dish'}></Cover>
      <Tabs ></Tabs>
    </section>
  )
}

export default Shop