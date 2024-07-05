"use client";
import React, { useState } from "react";
import Slider from "../LeftContent/Slider";
import {
    Box,
    Divider,
    Grid,
    Link,
    Pagination,
    PaginationItem,
    Typography,
} from "@mui/material";

import ItemMovie from "../../ItemComponent/ItemMovie";
import { COLOR } from "@/config/colors";

type CategoryMovieProps = {
    type?: boolean;
    title?: string;
    data?: any;
    subtitle?: string;
};

const CategoryMovie = (props: CategoryMovieProps) => {
    const [limited, _setLimited] = useState(30);
    const [pages, setPages] = useState(1);

    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        newPage: number
    ) => {
        setPages(newPage);
    };

    const lastItem = limited * pages;
    const firstItem = lastItem - limited;

    const dataMovieRender = props.data.slice(firstItem, lastItem);

    return (
        <>
            <Divider
                sx={{
                    color: "#fff",
                    marginTop: "35px",
                    fontSize: "32px",
                    fontWeight: "700",
                    "&::before": {
                        borderTop: `3px solid ${COLOR.BORDER_COLOR}`,
                    },
                    "&::after": {
                        borderTop: `3px solid ${COLOR.BORDER_COLOR}`,
                    },
                }}
            >
                {props.title}
            </Divider>
            <Slider />
            <Box
                sx={{
                    borderLeft: `3px solid ${COLOR.SECONDARY_COLOR}`,
                    px: "15px",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "20px",
                        color: COLOR.PRIMARY_TEXT,
                        fontWeight: "700",
                    }}
                >
                    {props.subtitle}
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, mt: "25px" }}>
                <Grid container spacing={2} sx={{ overflow: "hidden" }}>
                    {dataMovieRender.map((item: any, index: number) => (
                        <ItemMovie data={item} key={index} />
                    ))}
                </Grid>
                <Pagination
                    sx={{}}
                    count={Math.ceil(props.data.length / limited)}
                    page={pages}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChangePage}
                    renderItem={(item) => (
                        <PaginationItem
                            className="abc"
                            sx={{
                                color: COLOR.PRIMARY_TEXT,
                                "&.Mui-selected,&.Mui-selected:hover": {
                                    color: COLOR.SECONDARY_COLOR,
                                    background: COLOR.BLACK_COLOR,
                                },
                                "&:hover": {
                                    color: COLOR.SECONDARY_COLOR,
                                    background: COLOR.BLACK_COLOR,
                                },
                            }}
                            {...item}
                        />
                    )}
                />
            </Box>
        </>
    );
};

export default CategoryMovie;
