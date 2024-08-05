import React, { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [name, setName] = useState("");
  const [data, setdata] = useState([]);

  const handleAdditem = () => {
    console.log("submit");

    let fakeid = new Date().getTime();
    let item = name;
    setdata([...data, { id: fakeid, item: name }]);
    setName("");
  };

  const handleDoneClick = (id) => {
    console.log(id);
  };
  const handleRemoveClick = (id) => {
    let newItems = data.filter((itmes) => itmes.id != id);

    setdata(newItems);
  };

  return (
    <>
      <div className="main">
        <div className="title">TODO LIST</div>
        <div className="inputMain">
      
            <input
              type="text"
              placeholder="add item"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
   
          <button className="button" onClick={() => handleAdditem()}>
            add item
          </button>
        </div>

        <div className="subbody">
          {data.map((item, index) => {
            return (
              <div className="row" key={item.id}>
                <section className="number">{index + 1}</section>
                <section className="item">{item.item}</section>
                <section className="buttons">
                  <button
                    className="done"
                    onClick={() => handleDoneClick(item.id)}
                  >
                    done
                  </button>
                  <button
                    className="remove"
                    onClick={() => handleRemoveClick(item.id)}
                  >
                    remove
                  </button>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
