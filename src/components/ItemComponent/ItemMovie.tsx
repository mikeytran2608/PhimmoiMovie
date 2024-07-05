import { PATH } from "@/config/routerConfig";
import { Box, Grid, Link, Typography } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type listItemMovieProps = {
    data: any;
    type?: boolean;
};

const ItemMovie = (props: listItemMovieProps) => {
    const { data, type = false } = props;
    const router = useRouter();
    const pathName = usePathname();
    const [pathItem, setPathItem] = useState("");
    const [nameParam, setNameParam] = useState("");
    useEffect(() => {
        const handle = () => {
            if (pathName === "/") {
                if (data.series === "phim-bo") {
                    setPathItem(PATH.PHIMBO);
                } else {
                    setPathItem(PATH.PHIMLE);
                }
            } else {
                setPathItem(pathName);
            }
        };

        handle();
    }, [pathName, data.series]);

    useEffect(() => {
        const formatParam = (input: string) => {
            return input.toLowerCase().replace(/\s+/g, "-");
        };

        setNameParam(formatParam(data.name));
    }, [data.name]);
    return (
        <>
            <Grid item xs={2.4} sx={{ minWidth: "20%" }}>
                <Box sx={{ position: "relative" }}>
                    <Link
                        href={pathItem + "/" + data.id}
                        sx={{
                            height: "196px",
                            position: "relative",
                            ".overlay": {
                                display: "none",
                            },
                            "&:hover .overlay": {
                                display: "flex",
                            },
                        }}
                    >
                        <img
                            src={data.image}
                            style={{
                                height: "196px",
                                objectFit: "cover",
                            }}
                        />
                        <Box
                            className="overlay"
                            sx={{
                                height: "196px",
                                width: "100%",

                                background: "#000",
                                position: "absolute",
                                top: "0",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <svg
                                className="w-10 h-10"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#fff"
                                viewBox="0 0 10 16"
                            >
                                <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
                            </svg>
                        </Box>
                    </Link>
                    <Typography
                        sx={{
                            position: "absolute",
                            bottom: "5px",
                            left: "5px",
                            fontSize: "10px",
                            fontWeight: "500",
                            letterSpacing: ".5px",
                            background: "#408BEA",
                            color: "#fff",
                            padding: "5px 10px",
                            textTransform: "uppercase",
                        }}
                    >
                        Full 8/8 Vietsub
                    </Typography>
                    {type && (
                        <Typography
                            sx={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                background: "#ff0000",
                                color: "#fff",
                                fontSize: "10px",
                                fontWeight: "500",
                                padding: "5px 10px",
                                textTransform: "uppercase",
                            }}
                        >
                            NỔI BẬT
                        </Typography>
                    )}
                </Box>

                <Box>
                    <Typography
                        variant="subtitle2"
                        sx={{
                            marginTop: "15px",
                        }}
                    >
                        <Link
                            href="#"
                            sx={{
                                color: "#fff",
                                textTransform: "capitalize",
                                "&:hover": {
                                    color: "#408BEA",
                                },
                            }}
                        >
                            {data.name}
                        </Link>
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "12px",
                            color: "rgba(255, 255, 255, .5)",
                        }}
                    >
                        {data.year}
                    </Typography>
                </Box>
            </Grid>
        </>
    );
};

export default ItemMovie;
