import Namedentity from "./Namedentity";
import SearchBar from "./SearchBar";
import React from "react";
import Modal from "react-modal";
import Rhetoricalrole from "./Rhetoricalrole";

const RhetRolePage = () => {
  const [showTable, setShowTable] = React.useState(false);
  function showTableFn() {
    setShowTable(!showTable);
  }
  const [showModal, setShowModal] = React.useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="home">
      <SearchBar />

      <Rhetoricalrole />
    </div>
  );
};

export default RhetRolePage;
