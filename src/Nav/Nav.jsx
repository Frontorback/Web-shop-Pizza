import React, { useEffect, useState } from "react";
import "./Nav.css";
import Sort from "../img/Sort.svg";
import PizzaSection from "../Main/PizzaSection";
import axios from "axios";

const Nav = () => {
  const [type, setType] = useState(0);
  const [api, setApi] = useState([]);
  const [open, setOpen] = useState(false);
  const [num, setNum] = useState(0);
  const value = ["по популярности", "по цене", "по алфавиту"]

  useEffect(() => {
    Get();
  }, []);

  const Get = async () => {
    let res = await axios.get("http://localhost:3000/db.json");
    let payload = Object.keys(res.data.pizzas).map((key) => {
      return {
        ...res.data.pizzas[key],
      };
    });
    setApi(payload);
  };

  const currentSort = (number) =>{
    setNum(number)
    setOpen(false)
  }

  // if(num === 2){
  //   api.name.sort()
  // }
console.log(api.name)
  return (
    <>
      <nav>
        <ul className="Nav-list">
          <li onClick={() => setType(0)} className={type === 0 ? "active" : "unactive"}>
            Все 
          </li>
          <li onClick={() => setType(1)} className={type === 1 ? "active" : "unactive"}>
            Вегетарианские
          </li>
          <li onClick={() => setType(2)} className={type === 2 ? "active" : "unactive"}>
            Мясные
          </li>
          <li onClick={() => setType(3)} className={type === 3 ? "active" : "unactive"}>
            Гриль
          </li>
          <li onClick={() => setType(4)} className={type === 4 ? "active" : "unactive"}>
            Острые
          </li>
          <li onClick={() => setType(5)} className={type === 5 ? "active" : "unactive"}>
            Закрытые
          </li>
        </ul>
        <div className="Nav-sort">
          <img className="sort-icon" src={Sort} alt="none" />
          <div className="sort-burger" >
            <div>Сортировка по:</div>
            {open ? 
              <div className="burger">
                <div onClick={() => currentSort(0)} className={num === 0 ? "burger-active" : "burger-unactive"}>{value[0]}</div>
                <div onClick={() => currentSort(1)} className={num === 1 ? "burger-active" : "burger-unactive"}>{value[1]}</div>
                <div onClick={() => currentSort(2)} className={num === 2 ? "burger-active" : "burger-unactive"}>{value[2]}</div>
              </div>
             : <div className="burger" onClick={() => setOpen(true)}>{value[num]}</div>
            }
          </div>
        </div>
      </nav>
      <PizzaSection item={api} type={type} />
    </>
  );
};
export default Nav;
