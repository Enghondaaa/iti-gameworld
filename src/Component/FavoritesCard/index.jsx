import React from "react";
import { Link } from "react-router-dom";

export default function FavoritesCard({ info , handleRemoveFromFavorites}) {
    return <>
        <div className="col-md-3">
            <div className="game card mb-4 grow shadow">
                <Link to={'/gamedetails/' + info.id}>
                    <div className="game-image">
                        <img
                            alt=""
                            className="w-100"
                            src={info.thumbnail}
                        />
                    </div>
                    <div className="game-body p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="card-title text-truncate text-light">{info.title}</h4>
                            <span className="badge badge-span py-2 px-2 float-right">
                                FREE
                            </span>
                        </div>
                        <p className="text-muted text-truncate">{info.short_description}</p>
                    </div>

                </Link>
                <div className="d-flex justify-content-between p-3">
                    <i className="fas fa-1x fa-plus-square text-light fs-6 addFavorite" onClick={()=>{
                        handleRemoveFromFavorites()
                    }}> Remove</i>
                    <div className="d-flex mb-n2 justify-content-between align-items-center">
                        <span className="badge badge-secondary text-dark badge-genre me-2">{info.genre}</span>
                        <span>{info.platform === "PC (Windows)" ? <span><i className="fa-brands fa-windows text-light"></i></span> : <span><i className="fa-solid fa-window-maximize text-light"></i></span>}</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}
