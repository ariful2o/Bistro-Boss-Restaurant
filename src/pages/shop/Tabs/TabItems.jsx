import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/menus/useMenu';
import ItemCard from './ItemCard';

export default function TabItems() {

  const [tabIndex, setTabIndex] = useState(0);
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
