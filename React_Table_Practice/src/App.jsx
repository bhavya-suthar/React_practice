import DataTable from "react-data-table-component";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredSearch, resetSearch } from "./ReduxToolkit/TableSlice.jsx";

const customStyles = {
  rows: {
    style: {
      minHeight: "40px", // override the row height
      border: "1px solid black",
      fontSize: "14px",
      backgroundColor: "lightviolate",
    },
  },

  headCells: {
    style: {
      padding: "5px",
      border: "1px solid black",
      color: "blueviolet",
      fontSize: "20px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      borderRightStyle: "solid",
      borderRightWidth: "1px",
      fontSize: "16px",
    },
  },
};

function App() {
  const [search, setSearch] = useState("");
  console.log("🚀 ~ App ~ search:", search);

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearch(value);

    if(value === ""){
      dispatch(resetSearch())
    }else{
      dispatch(filteredSearch(search))
    }
  };

  const dispatch = useDispatch();

  const { product, filteredProduct } = useSelector((state) => state.table);
  console.log("🚀 ~ App ~ filteredProduct:", filteredProduct);
  console.log("🚀 ~ App ~ product:", product);

  const handleSearch = () => {
    dispatch(filteredSearch(search));
  };

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
      name: "Categories",
      selector: (row) => row.category,
    },
  ];

  // useEffect(() => {
  //   dispatch(resetSearch());
  // }, [search, product]);

  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        All Products
      </h2>
      <div className="search">
        <input
          type="text"
          name="search"
          value={search}
          id=""
          style={{
            padding: "5px",
            borderRadius: "3px",
            border: "1px solid black",
            width: "250px",
            height: "25px",
          }}
          onChange={handleSearchChange}
        />
        <button
          style={{
            border: "none",
            backgroundColor: "blueviolet",
            borderRadius: "9px",
            color: "white",
            width: "90px",
          }}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {/*{filteredProduct.length == 0 ? (
        <DataTable
          data={product}
          columns={columns}
          selectableRows
          customStyles={customStyles}
          pagination
          // fixedHeader="true"
          // fixedHeaderScrollHeight="500px"
        />
      ) : (
        <DataTable
          data={filteredProduct}
          columns={columns}
          selectableRows
          customStyles={customStyles}
          pagination
          // fixedHeader="true"
          // fixedHeaderScrollHeight="500px"
        />
      )}*/}

      <DataTable
        // data={filteredProduct && filteredProduct.length > 0 ? filteredProduct : search ? [] : product;}
        data={
          filteredProduct && filteredProduct.length > 0
            ? filteredProduct
            : product 
        }
        columns={columns}
        selectableRows
        customStyles={customStyles}
        noDataComponent={<p style={{ padding: "10px" }}>No Data Found</p>}
        pagination
        // fixedHeader="true"
        // fixedHeaderScrollHeight="500px"
      />
    </>
  );
}

export default App;
