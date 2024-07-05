"use client";
import { Box, Grid, Link, Paper, Typography, styled } from "@mui/material";
import React from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

type ListMovieRight = {
    type?: boolean;
    data?: any;
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const ListMovieRight = (props: ListMovieRight) => {
    return (
        <>
            <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
                <Grid container spacing={2}>
                    {props.data?.length > 0 &&
                        props.data.map((data: any, index: number) => (
                            <Grid item xs={12} key={index}>
                                <Box
                                    sx={{
                                        background: "rgba(0, 0, 0, .3)",
                                        "& .title:hover, & img:hover~.title": {
                                            opacity: "1",
                                        },

                                        "& .title:hover .icon, & img:hover~.title .icon":
                                            {
                                                color: "#408BEA",
                                            },
                                    }}
                                >
                                    <Link
                                        sx={{
                                            display: "flex",
                                            height: "90px",
                                            textDecoration: "none",

                                            "& img": {
                                                width: "80px",
                                                height: "90px",
                                                objectFit: "cover",
                                            },
                                        }}
                                    >
                                        <img
                                            src={data.image}
                                            alt="Bá chủ bầu trời"
                                        />
                                        <Box
                                            className="title"
                                            sx={{
                                                width: "100%",
                                                padding: "10px",
                                                opacity: ".7",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "rgba(255, 255, 255, .8)",
                                                }}
                                            >
                                                {data.name}
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        padding: "4px 7px",
                                                        border: "1px solid rgb(255 255 255 / 14%)",
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <StarRateRoundedIcon
                                                        className="icon"
                                                        sx={{
                                                            color: "rgba(255, 255, 255, .4)",
                                                        }}
                                                    />
                                                    <Typography
                                                        sx={{
                                                            color: "rgba(255, 255, 255, .4)",
                                                            fontSize: "13px",
                                                        }}
                                                    >
                                                        {data.rating}
                                                    </Typography>
                                                </Box>
                                                <Typography
                                                    sx={{
                                                        color: "rgba(255, 255, 255, .4)",
                                                        fontSize: "13px",
                                                        marginLeft: "6px",
                                                    }}
                                                >
                                                    {data.year}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Box>
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </>
    );
};

export default ListMovieRight;
