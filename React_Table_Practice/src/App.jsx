import DataTable from "react-data-table-component";
import { data } from "./data.js";
import "./App.css";

const customStyles = {
  rows: {
    style: {
      minHeight: "40px", // override the row height
      border:"1px solid black",
      fontSize:"14px",
      backgroundColor:"lightviolate",

    },
  },
  
  headCells: {
    style: {
      padding:"5px",
      border:"1px solid black",
      color:"blueviolet",
      fontSize:"20px",

    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      borderRightStyle:"solid",
      borderRightWidth:"1px"
    },
  },
};


function App() {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name:"Categories",
      selector:row =>row.category
    }
  ];

  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        All Products
      </h2>
      <div className="search">
        <input
          type="text"
          name=""
          id=""
          style={{
            padding: "5px",
            borderRadius: "3px",
            border: "1px solid black",
          }}
        />
        <button
          style={{
            border: "none",
            backgroundColor: "blueviolet",
            borderRadius: "5px",
            color: "white",
          }}
        >
          Search
        </button>
      </div>
      <DataTable
        data={data}
        columns={columns}
        selectableRows
        customStyles={customStyles}
        // pagination
        fixedHeader="true"
        fixedHeaderScrollHeight="500px"
          
      />
    </>
  );
}

export default App;
