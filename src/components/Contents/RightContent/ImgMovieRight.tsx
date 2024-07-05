import { Box, Link, Typography } from "@mui/material";
import React from "react";

const ImgMovieRight = () => {
    return (
        <>
            <Link
                href="#"
                sx={{
                    position: "relative",
                    "& img:hover": {
                        filter: "blur(1px)",
                    },
                }}
            >
                <img
                    src="https://image.tmdb.org/t/p/w500/4DDKUnw63RXdz9MOm3bTkbaMwV5.jpg"
                    alt="Hồn ma không đầu"
                    style={{
                        marginTop: "40px",
                        width: "100%",
                        height: "169px",
                        objectFit: "cover",
                    }}
                />
                <Box
                    sx={{
                        color: "#fff",
                        position: "absolute",
                        bottom: "5px",
                        left: "0",
                        padding: "10px",
                    }}
                >
                    <Typography variant="subtitle2">
                        Hồn ma không đầu
                    </Typography>
                    <Typography variant="body2">2022</Typography>
                </Box>
            </Link>
        </>
    );
};

export default ImgMovieRight;
