import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/menus/useMenu';
import ItemCard from './ItemCard';
import { useParams } from 'react-router-dom';

export default function TabItems() {
  const categorys=['salad','pizza','soup','dessert','drinks']
  const {category}=useParams()
  const insialIndex = categorys.indexOf(category)

  const [tabIndex, setTabIndex] = useState(insialIndex);
  const [menu] = useMenu()


  const pizza = menu.filter(menu => menu.category === "pizza")
  const soup = menu.filter(menu => menu.category === "soup")
  const dessert = menu.filter(menu => menu.category === "dessert")
  const salad = menu.filter(menu => menu.category === "salad")
  const drinks = menu.filter(menu => menu.category === "drinks")

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>SUOPS</Tab>
        <Tab>SALAD</Tab>
        <Tab>PIZZA</Tab>
        <Tab>DESSERTS</Tab>
        <Tab>DRINKS</Tab>
      </TabList>

      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {
            soup.map(item => <ItemCard item={item} key={item._id}></ItemCard>)
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {
            salad.map(item => <ItemCard item={item} key={item._id}></ItemCard>)
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {
            pizza.map(item => <ItemCard item={item} key={item._id}></ItemCard>)
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {
            dessert.map(item => <ItemCard item={item} key={item._id}></ItemCard>)
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {
            drinks.map(item => <ItemCard item={item} key={item._id}></ItemCard>)
          }
        </div>
      </TabPanel>

    </Tabs>
  )
}
