import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllTvFailure,
  fetchAllTvSuccess,
} from "../../Redux/slices/TVSlice";
import TvCard from "../../Component/Card/TvCard";


const TVFile = () => {
  const { data } = useSelector((state) => state.tv.allTv);
  console.log("🚀 ~ TVFile ~ data:", data)

  const dispatch = useDispatch();


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/tv?api_key=3f65d6932f9ebaa0c639a286b34f6531`
        );
        console.log("🚀 ~ getData ~ response:", response);
        dispatch(fetchAllTvSuccess(response?.data));
      } catch (error) {
        console.log("🚀 ~ getData ~ error:", error);
        dispatch(fetchAllTvFailure(error));
      }
    };

    getData();
    window.scrollTo(0, 0);
  }, []);
  // const tvData = data.results
  // console.log("🚀 ~ TVFile ~ tvData:", tvData)


  return (
    <div className="movie__list">
      <h2 className="list__title">TV</h2>
      <div className="list__cards">
         { data?.results?.map((tv) => <TvCard key={tv.id} tv={tv} />)}
      </div>
    </div>
  );
};

export default TVFile;
