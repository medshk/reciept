import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "./components/layout/Layout";

import "./index.css";
import Home from "./pages/Home";
import Reciept from "./pages/Reciept";
import { getData, getNewItem } from "./pages/data";
import NewRecipetModal from "./components/modals/newRecieptModal/NewRecipetModal";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [newItem, setNewItem] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredResult, setFilteredResult] = useState([]);
  const fetchRef = useRef(true);

  const location = useLocation();

  const fetchData = async () => {
    const result = await getData();

    setData(result);
    setFilteredResult(result);
  };

  const listenToNewItem = async () => {
    const result = await getNewItem();
    setData((data) => [{ id: data.length, ...result }, ...data]);
    setNewItem(true);
    setIsOpen(true);
  };

  useEffect(() => {
    fetchData();

    if (fetchRef.current) {
      setInterval(() => {
        setNewItem(false);
        listenToNewItem();
      }, 10000);
    }

    return () => {
      fetchRef.current = false;
    };
  }, []);

  useEffect(() => {
    setNewItem(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!search) {
      console.log("here");
      setFilteredResult(data);
    } else {
      const filteredArray = data.filter((item) => item.title.includes(search));
      setFilteredResult(filteredArray);
    }
  }, [search, data]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const searchResult = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div
      className={`${
        darkMode ? "dark bg-darkBg" : ""
      } font-inter  dark:bg-red-400 min-h-screen`}
    >
      <Layout
        isDark={darkMode}
        toggleDark={toggleDarkMode}
        searchResult={searchResult}
      >
        <Routes>
          <Route
            path="/"
            element={<Home data={filteredResult} newItem={newItem} />}
          />
          <Route path="reciept/:id" element={<Reciept />} />
        </Routes>
      </Layout>
      {isOpen && (
        <NewRecipetModal isDark={darkMode} handleModalDisplay={setIsOpen} />
      )}
    </div>
  );
}

export default App;
