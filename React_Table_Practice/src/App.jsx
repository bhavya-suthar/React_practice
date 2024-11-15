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

  const [suggestion, setSuggestion] = useState([]);
  console.log("🚀 ~ App ~ suggestion:", suggestion);
  const { product, filteredProduct } = useSelector((state) => state.table);
  console.log("🚀 ~ App ~ filteredProduct:", filteredProduct);
  console.log("🚀 ~ App ~ product:", product);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value === "") {
      dispatch(resetSearch());
      setSuggestion([]);
    } else {
      const matchedSuggestions = product
        .map((item) => item.title)
        .filter((title) => title.toLowerCase().includes(value.toLowerCase()));
      setSuggestion(matchedSuggestions);
      // dispatch(filteredSearch(search));
    }
  };

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(filteredSearch(search));
    setSuggestion([]);
  };
  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion);
    dispatch(filteredSearch(suggestion));
    setSuggestion([]);
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
      {suggestion.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: " center",
            marginLeft:"390px"
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              padding: "6px",
              margin:"0",
              marginBottom: "20px",
              maxHeight: "150px",
              overflowY: "auto",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "250px",
              backgroundColor: "white",
              cursor:"pointer"
            }}
          >
            {suggestion.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>{" "}
        </div>
      )}
      <DataTable
        data={
          filteredProduct && filteredProduct.length > 0
            ? filteredProduct
            : search
            ? []
            : product
        }
        // data={
        //   filteredProduct && filteredProduct.length > 0
        //     ? filteredProduct
        //     : product
        // }
        // data={filteredProduct !== null ? filteredProduct : product}
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
