import { useState } from "react";
import { Calendar } from "react-calendar";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import "react-calendar/dist/Calendar.css";

export const MainPage = () => {
  const [value, onChange] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <h1>MainPage</h1>
      <Calendar onChange={onChange} value={value} />
    </>
  );
};
