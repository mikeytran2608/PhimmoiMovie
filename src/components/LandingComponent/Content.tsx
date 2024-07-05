"use client";
import { Box, Divider, Grid } from "@mui/material";
import Item from "antd/es/descriptions/Item";
import React, { useEffect, useState } from "react";
import Slider from "../Contents/LeftContent/Slider";
import YearOfRelease from "../Contents/RightContent/YearOfRelease";
import ListMovie from "../Contents/ListMovie/page";
import ImgMovieRight from "../Contents/RightContent/ImgMovieRight";
import News from "../Contents/News/page";

const Content = () => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                "https://664d906fede9a2b55653eb1a.mockapi.io/movie_api"
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

    const dataNoiBat = data.filter((event: any) => event.series === "phim-bo");
    const dataPhimLe = data.filter((event: any) => event.series === "phim-le");

    return (
        // Section

        <>
            <Slider />
            <ListMovie
                title="Phim mới nổi bật"
                type={true}
                data={dataNoiBat.slice(0, 10)}
            />
            <ListMovie
                title="Phim chiếu rạp mới cập nhật"
                isMore={true}
                data={dataPhimLe.slice(0, 10)}
            />
            <ListMovie
                title="Phim bộ mới cập nhật"
                isMore={true}
                data={dataNoiBat.slice(0, 10)}
            />
            <ListMovie
                title="Phim lẻ mới nổi bật"
                isMore={true}
                data={dataPhimLe.slice(0, 10)}
            />
            <News />
        </>
    );
};

export default Content;
