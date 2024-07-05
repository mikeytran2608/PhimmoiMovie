import { Box, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { COLOR } from "@/config/colors";
import FacebookIcon from "@mui/icons-material/Facebook";

const Share = () => {
    return (
        <>
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        padding: "12px 24px",
                        alignItems: "center",
                    }}
                >
                    <Box sx={{ display: "flex", fontSize: "15px" }}>
                        <Typography
                            sx={{
                                color: COLOR.DESC_TEXT_COLOR,
                            }}
                        >
                            Chia sẻ
                        </Typography>
                        <Typography
                            sx={{
                                color: COLOR.PRIMARY_TEXT,
                                marginLeft: "10px",
                            }}
                        >
                            124
                        </Typography>
                    </Box>
                    <Box sx={{ marginLeft: "20px" }}>
                        <IconButton
                            style={{
                                backgroundColor: "#4861A3",
                                borderRadius: "3px",
                                marginRight: "5px",
                            }}
                        >
                            <FacebookIcon
                                style={{ color: COLOR.PRIMARY_TEXT }}
                            />
                        </IconButton>
                        <IconButton
                            style={{
                                backgroundColor: "pink",
                                borderRadius: "3px",
                                marginRight: "5px",
                            }}
                        >
                            <InstagramIcon
                                style={{ color: COLOR.PRIMARY_TEXT }}
                            />
                        </IconButton>
                        <IconButton
                            style={{
                                backgroundColor: "red",
                                borderRadius: "3px",
                                marginRight: "5px",
                            }}
                        >
                            <YouTubeIcon
                                style={{ color: COLOR.PRIMARY_TEXT }}
                            />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Share;
