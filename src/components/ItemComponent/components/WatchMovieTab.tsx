import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { COLOR } from "@/config/colors";

const WatchMovieTab = () => {
    return (
        <>
            <Box>
                <Typography
                    sx={{
                        color: COLOR.PRIMARY_TEXT,
                        fontWeight: "700",
                    }}
                >
                    Chọn tập phim
                </Typography>
                <Box
                    sx={{
                        mt: 3,
                        "& .MuiLink-root:hover": {
                            backgroundColor: COLOR.SECONDARY_COLOR,
                            color: COLOR.PRIMARY_TEXT,
                        },
                    }}
                >
                    <Link
                        href="#"
                        sx={{
                            mx: 0.3,
                            backgroundColor: "#666",
                            padding: "6px 10px",
                            borderRadius: "3px",
                        }}
                        underline="none"
                        color={COLOR.PRIMARY_TEXT}
                    >
                        Tập 1
                    </Link>
                    <Link
                        href="#"
                        sx={{
                            mx: 0.3,
                            backgroundColor: "#666",
                            padding: "6px 10px",
                            borderRadius: "3px",
                        }}
                        underline="none"
                        color={COLOR.PRIMARY_TEXT}
                    >
                        Tập 1
                    </Link>
                    <Link
                        href="#"
                        sx={{
                            mx: 0.3,
                            backgroundColor: "#666",
                            padding: "6px 10px",
                            borderRadius: "3px",
                        }}
                        underline="none"
                        color={COLOR.PRIMARY_TEXT}
                    >
                        Tập 1
                    </Link>
                    <Link
                        href="#"
                        sx={{
                            mx: 0.3,
                            backgroundColor: "#666",
                            padding: "6px 10px",
                            borderRadius: "3px",
                        }}
                        underline="none"
                        color={COLOR.PRIMARY_TEXT}
                    >
                        Tập 1
                    </Link>
                    <Link
                        href="#"
                        sx={{
                            mx: 0.3,
                            backgroundColor: "#666",
                            padding: "6px 10px",
                            borderRadius: "3px",
                        }}
                        underline="none"
                        color={COLOR.PRIMARY_TEXT}
                    >
                        Tập 1
                    </Link>
                </Box>
            </Box>
        </>
    );
};

export default WatchMovieTab;
