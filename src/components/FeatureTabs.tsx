import { useState } from "react";
import { Tab, TabContext, TabList, TabPanel } from "./TabsComp";

const FeatureTabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (e: React.FormEvent<HTMLDivElement>, newValue: string) => {
    setValue(newValue)
  }
  return (

    <section className="relative mt-10 text-[.9rem] sm:text-[1rem]">
      <div className="px-2 lg:px-0 w-full sm:w-[80%] md:w-[60%] lg:w-[30%] mx-auto my-8 text-center">
        <h2 className="font-medium text-[1.5em] my-4">
          Features
        </h2>
        <p className="text-grayish-blue">
          Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
        </p>
      </div>
      <TabContext value={value}>
        <TabList aria-label="Product Features" onChange={handleChange}>
          <Tab value="1" label="Simple Bookmarking"></Tab>
          <Tab value="2" label="Speedy Searching"></Tab>
          <Tab value="3" label="Easy Sharing"></Tab>
        </TabList>
        <TabPanel value="1">
          <h1>Value: 1</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quaerat vitae repudiandae, corporis error dolorem doloribus perspiciatis aliquam autem accusantium aliquid animi, ea, fugit earum cupiditate deleniti a molestias! Voluptas.
        </TabPanel>
        <TabPanel value="2">
          <h1>Value: 2</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quaerat vitae repudiandae, corporis error dolorem doloribus perspiciatis aliquam autem accusantium aliquid animi, ea, fugit earum cupiditate deleniti a molestias! Voluptas.
        </TabPanel>
        <TabPanel value="3">
          <h1>Value: 3</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quaerat vitae repudiandae, corporis error dolorem doloribus perspiciatis aliquam autem accusantium aliquid animi, ea, fugit earum cupiditate deleniti a molestias! Voluptas.
        </TabPanel>
      </TabContext>
    </section>

  )
}

export default FeatureTabs;