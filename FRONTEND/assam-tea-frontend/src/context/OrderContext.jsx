// src/context/OrderContext.jsx
import React, { createContext, useEffect, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Save orders to localStorage every time they change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order) => {
    setOrders(prev => [...prev, { ...order, id: Date.now(), status: "Pending" }]);
  };

  const updateStatus = (id, newStatus) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const deleteOrder = (id) => {
    setOrders(prev => prev.filter(order => order.id !== id));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateStatus, deleteOrder }}>
      {children}
    </OrderContext.Provider>
  );
};