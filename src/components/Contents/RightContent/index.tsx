"use client";
import React, { useEffect, useState } from "react";
import YearOfRelease from "./YearOfRelease";
import ImgMovieRight from "./ImgMovieRight";
import ListMovieRight from "./ListMovieRight";
import { Divider } from "@mui/material";

const RightContent = () => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                "https://664d906fede9a2b55653eb1a.mockapi.io/list-movie-right"
            );

            const result = await res.json();

            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            const a = Object.values(result);

            setData(a);
        };
        getData();
    }, []);
    const dataRightMovie = data.slice(0, 5);

    return (
        <>
            <YearOfRelease />
            <ImgMovieRight />

            <ListMovieRight data={dataRightMovie} />
            <Divider sx={{ my: 1 }} />
            <ListMovieRight data={dataRightMovie} />
        </>
    );
};

export default RightContent;
