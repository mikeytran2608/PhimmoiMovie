"use client";
import {
    Box,
    Button,
    Grid,
    IconButton,
    Link,
    Typography,
    styled,
} from "@mui/material";
import React, { useRef, useState } from "react";
import ArrowLeftRoundedIcon from "@/public/images/listMovie/arrowLeft.svg";
import ArrowRightRoundedIcon from "/images/listMovie/arrowRight.svg";
import SVG from "react-inlinesvg";
import ItemMovie from "../../ItemComponent/ItemMovie";
import { COLOR } from "@/config/colors";

const ArrowLeftSVG = () => (
    <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 10 16"
    >
        <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
    </svg>
);

const ArrowRightSVG = () => (
    <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 10 16"
    >
        <path d="M1.234.566A2 2 0 0 1 3.414 1L9 6.586a2 2 0 0 1 0 2.828L3.414 15A2 2 0 0 1 0 13.586V2.414A2 2 0 0 1 1.234.566Z" />
    </svg>
);

type listMovieProps = {
    type?: boolean;
    isMore?: boolean;
    title?: string;
    data: any;
    borderTitle?: boolean;
};

const ListMovie = (props: listMovieProps) => {
    const { isMore = false, title, borderTitle = true, type = false } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentRef: any = useRef(null);
    const data = props.data;

    const handlePrev = () => {
        setCurrentIndex((prevState) => {
            const nextIndex = prevState === 0 ? data.length - 1 : prevState - 1;
            const container = currentRef.current;
            if (container) {
                container.scrollTo({
                    left: nextIndex * 155,
                    behavior: "smooth",
                });
            }
            return nextIndex;
        });
    };

    const handleNext = () => {
        setCurrentIndex((prevState) => {
            const nextIndex = prevState === data.length - 1 ? 0 : prevState + 1;
            const container = currentRef.current;
            if (container) {
                container.scrollTo({
                    left: nextIndex * 155,
                    behavior: "smooth",
                });
            }
            return nextIndex;
        });
    };

    return (
        <>
            <Box
                component="section"
                sx={{
                    marginTop: "25px",
                    padding: "10px",
                    color: "#fff",
                    borderBottom: "1px solid rgba(255, 255, 255, .08)",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Title Movie */}
                    <Typography
                        sx={{
                            fontSize: "20px",
                            fontWeight: "700",
                            borderLeft: borderTitle
                                ? "3px solid #408bea"
                                : "none",
                            paddingLeft: "10px",
                            lineHeight: "20px",
                        }}
                    >
                        {title}
                    </Typography>

                    <Box sx={{ display: "flex" }}>
                        {/* ButtonXEMTHEM */}
                        {isMore && (
                            <Button
                                variant="contained"
                                size="small"
                                href="#"
                                sx={{
                                    mr: "7px",
                                    mt: "2px",

                                    color: COLOR.PRIMARY_TEXT,
                                    borderRadius: "3px",
                                    fontSize: "8px",
                                }}
                            >
                                XEM THÊM
                            </Button>
                        )}
                        {/* Icon Arrow */}
                        <Box>
                            <IconButton
                                sx={{
                                    p: 0,
                                    m: 0,
                                    color: "rgba(255, 255, 255, .5)",
                                    "&:hover": {
                                        color: "#408BEA",
                                    },
                                }}
                                onClick={handlePrev}
                            >
                                <ArrowLeftSVG />
                                {/* <SVG src={"/images/listMovie/arrowLeft.svg"} /> */}
                            </IconButton>
                            <IconButton
                                sx={{
                                    p: 0,
                                    m: 0,
                                    color: "rgba(255, 255, 255, .5)",
                                    "&:hover": {
                                        color: "#408BEA",
                                    },
                                }}
                                onClick={handleNext}
                            >
                                <ArrowRightSVG />
                                {/* <SVG src={"/images/listMovie/arrowRight.svg"} /> */}
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                {/* List Movie */}
                <Box sx={{ marginTop: "25px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid
                            ref={currentRef}
                            container
                            spacing={2}
                            sx={{ flexWrap: "nowrap", overflow: "hidden" }}
                        >
                            {data.map((item: any, index: number) => (
                                <ItemMovie
                                    data={item}
                                    key={index}
                                    type={type}
                                />
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ListMovie;
