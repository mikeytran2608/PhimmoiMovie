import { Box, Link, Typography } from "@mui/material";
import { Carousel, Flex } from "antd";
import React from "react";
import styled from "styled-components";

const dataImg = [
    {
        path: "",
        src: "/images/sliders/slider-1.jpg",
        title: "Nâng Cấp",
        years: "2024",
        tags: "hd vietsub",
    },
    {
        path: "",
        src: "/images/sliders/slider-2.jpg",
        title: "title 2",
        years: "2024",
        tags: "HD",
    },
    {
        path: "",
        src: "/images/sliders/slider-3.jpg",
        title: "title 3",
        years: "2024",
        tags: "HD",
    },
    {
        path: "",
        src: "/images/sliders/slider-4.jpg",
        title: "title 4",
        years: "2024",
        tags: "HD",
    },
    {
        path: "",
        src: "/images/sliders/slider-5.jpg",
        title: "title 5",
        years: "2024",
        tags: "HD",
    },
    {
        path: "",
        src: "/images/sliders/slider-6.jpg",
        title: "title 6",
        years: "2024",
        tags: "HD",
    },
    {
        path: "",
        src: "/images/sliders/slider-7.jpg",
        title: "title 7",
        years: "2024",
        tags: "HD",
    },
];

const Slider = () => {
    const contentStyle: React.CSSProperties = {
        width: "100%",
        height: "213px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        objectFit: "cover",
    };
    return (
        <>
            <Carousel
                style={{ zIndex: 0 }}
                slidesToShow={2}
                swipeToSlide={true}
                slidesToScroll={2}
            >
                {dataImg.map((item, index) => (
                    <Box
                        sx={{
                            display: "flex",
                            position: "relative",
                            p: "20px 10px 40px",
                        }}
                        key={index}
                    >
                        {/* Link Images */}
                        <Link href="#" style={{ position: "relative" }}>
                            <img
                                style={contentStyle}
                                src={item.src}
                                alt={item.tags}
                            />

                            {/* Content Images */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    color: "#fff",
                                    bottom: "14px",
                                    left: "14px",
                                }}
                            >
                                <Typography fontSize={17}>
                                    {item.title}
                                </Typography>
                                <Typography fontSize={13}>
                                    {item.years}
                                </Typography>
                            </Box>

                            {/* Tag Images */}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    position: "absolute",
                                    bottom: "0",
                                    right: "0",

                                    textTransform: "uppercase",

                                    color: "#fff",
                                    backgroundColor: "#408BEA",
                                    px: 2,
                                }}
                            >
                                <Typography fontSize={12}>
                                    {item.tags}
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                ))}
            </Carousel>
        </>
    );
};

export default Slider;
