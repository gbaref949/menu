import { useState } from "react";
import Categories from './components/Categories';
import Menu from './components/Menu';
import items from './data';

//steup
const allCategories = ['All', ...new Set(items.map((item)=>item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) =>{
    if(category === 'All'){
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item) => {return item.category === category})
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"/>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App