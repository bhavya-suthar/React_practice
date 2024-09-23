import React, { useEffect, useState } from 'react'
import TvCard from '../Card/TvCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllTvFailure, fetchAllTvSuccess } from '../../Redux/slices/TVSlice';

const TVList = () => {
    const [tvList, setTvList] = useState([]);
  const { type } = useParams();
  console.log("🚀 ~ tvList ~ type:", type);

  const { data } = useSelector((state) => state.tv.allTv);
  console.log("🚀 ~ tvList ~ data:", data);
  const dispatch = useDispatch();
  const getData = async () => {
    // dispatch(getTypeStart());
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${
          type ? type : "popular"
        }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      console.log("🚀 ~ getData ~ response:", response);
      dispatch(fetchAllTvSuccess(response.data.results));
    } catch (error) {
      console.log("🚀 ~ getData ~ error:", error);
      dispatch(fetchAllTvFailure());
    }
    // fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    // .then(res => res.json())
    // .then(data => setTvList(data.results))
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);
  return (
    <>
    <div className="movie__list">
      <h2 className="list__title">
        {(type ? type : "POPULAR").toUpperCase()}
      </h2>
      <div className="list__cards">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((tv) => <TvCard key={tv.id} tv={tv} />)
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
    
  </>
  )
}

export default TVList