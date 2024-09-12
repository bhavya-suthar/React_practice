import React, {useEffect, useState} from "react"
import "./Movie.css"
import { useParams } from "react-router-dom"
import { movieDetailFailure, movieDetailStart, movieDetailSuccess } from "../../Redux/slices/MovieSlice"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

const Movie = () => {
    const { id } = useParams()
   const {data} = useSelector(state=>state.movie.getSingleMovie)
   console.log("🚀 ~ Movie ~ data:", data)


    const dispatch = useDispatch()
    
    useEffect(() => {
        const getData =async() => {
            dispatch(movieDetailStart());
            try {
              const response = await axios.get(
               `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US` );
              console.log("🚀 ~ getData ~ response:", response)
              dispatch(movieDetailSuccess(response?.data))
            } catch (error) {
              console.log("🚀 ~ getData ~ error:", error);
            //   dispatch(movieDetailFailure(error.response.data.message))
            }
            // fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            // .then(res => res.json())
            // .then(data => setMovie(data))
        }
    
        getData()
        window.scrollTo(0,0)
    }, [])

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${data.backdrop_path }`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${data.poster_path }`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{data.original_title}</div>
                        <div className="movie__tagline">{data.tagline}</div>
                        <div className="movie__rating">
                            {data.vote_average} <i class="fas fa-star" />
                            <span className="movie__voteCount">{data ? "(" + data.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{data.runtime + " mins" }</div>
                        <div className="movie__releaseDate">{data ? "Release date: " + data.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                data && data.genres
                                ? 
                                data.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{data ? data.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    data && data.homepage && <a href={data.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    data && data.imdb_id && <a href={"https://www.imdb.com/title/" + data.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    data && data.production_companies && data.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Movie