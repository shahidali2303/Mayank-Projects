import React, { useState, useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/slices/cartSLice.js";

const API = "https://fakestoreapi.com/products/";

function App() {
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUsers = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.length > 0) {
        setUsers(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <>
      <Cart />
      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="row pt-4">
            {users.map((item) => {
              return (
                <div className="col-md-4 text-center pt-3 pb-3" key={item.id}>
                  <div>
                    <img
                      src={item.image}
                      alt=""
                      style={{ width: 200, height: 200 }}
                    />
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <button
                      onClick={(e) =>
                        dispatch(
                          addItem({
                            name: item.title,
                            price: Math.round(item.price),
                          })
                        )
                      }
                      className="btn btn-primary"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
