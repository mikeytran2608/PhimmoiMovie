import React from "react";
import { COLOR } from "@/config/colors";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import { Box, Link, Rating, Typography, Divider } from "@mui/material";
const MovieContent = (props: { data: any }) => {
    function formatDate(dateStr: any) {
        const dt = new Date(dateStr);
        return dt.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    }
    return (
        <>
            <Box sx={{ display: "flex", p: "25px" }}>
                <Box sx={{ objectFit: "cover" }}>
                    <img
                        src="https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-4.jpg"
                        style={{
                            width: "140px",
                            minWidth: "140px",
                            height: "210px",
                            minHeight: "210px",
                            objectFit: "cover",
                        }}
                        alt="asdads"
                    />
                </Box>
                <Box sx={{ ml: "20px", width: "100%" }}>
                    <Box>
                        <Typography
                            sx={{ color: COLOR.PRIMARY_TEXT, fontSize: "30px" }}
                        >
                            {props.data.name}
                        </Typography>
                        <Typography
                            sx={{
                                color: COLOR.DESC_TEXT_COLOR,
                                fontWeight: "700",
                                fontSize: "13px",
                                marginBottom: "10px",
                            }}
                        >
                            Loki Season 2 2023
                        </Typography>
                        <Typography
                            sx={{
                                color: COLOR.DESC_TEXT_COLOR,
                                fontSize: "13px",
                                fontWeight: "700",
                                opacity: "0.8",
                            }}
                        >
                            {formatDate(props.data.createdAt)}
                        </Typography>
                        <Typography
                            sx={{
                                display: "inline-block",
                                color: COLOR.PRIMARY_TEXT,
                                background: COLOR.SECONDARY_COLOR,
                                padding: "5px 10px",
                                fontWeight: "600",
                                margin: "10px 0",
                                fontSize: "13px",
                            }}
                        >
                            FULL 6/6 VIETSUB
                        </Typography>
                    </Box>
                    <Divider
                        sx={{ background: COLOR.DIVIDER_COLOR, width: "100%" }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            padding: "7px 0",
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    color: COLOR.PRIMARY_TEXT,
                                    background: "#292929",
                                    fontSize: "27px",
                                    borderRadius: "3px",
                                    px: 1,
                                    marginRight: "8px",
                                }}
                            >
                                {props.data.rating / 10}
                            </Typography>
                        </Box>
                        <Box>
                            <Box className="block md:flex">
                                <Rating
                                    sx={{
                                        color: COLOR.SECONDARY_COLOR,
                                        marginRight: 2,
                                    }}
                                    defaultValue={props.data.rating / 10}
                                    max={10}
                                    icon={<StarRoundedIcon />}
                                    emptyIcon={
                                        <StarRoundedIcon
                                            sx={{
                                                color: "#3a3938",
                                            }}
                                        />
                                    }
                                />
                                <Box>
                                    <Typography
                                        sx={{
                                            display: "inline-block",
                                            color: COLOR.PRIMARY_TEXT,
                                            background: "#454444",
                                            fontSize: "12px",
                                            borderRadius: "3px",
                                            padding: "5px 15px",
                                        }}
                                    >
                                        Đánh giá của bạn:
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography
                                color={"#9297a2"}
                                fontSize={12}
                                fontWeight={700}
                                marginTop={0.5}
                            >
                                390 đánh giá
                            </Typography>
                        </Box>
                    </Box>
                    <Divider
                        sx={{
                            background: "rgba(255, 255, 255, .08)",
                            width: "100%",
                        }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            py: 1,
                            mt: 1,
                            lineHeight: 1,
                            "& a": {
                                color: COLOR.PRIMARY_TEXT,
                                textDecoration: "none",
                                fontSize: "13px",
                                fontWeight: "700",
                            },
                            ".divide-custom~.divide-custom": {
                                borderLeft:
                                    "1px solid rgba(255, 255, 255, .08)",
                            },
                            ".divide-custom:hover": {
                                color: COLOR.SECONDARY_COLOR,
                            },
                        }}
                    >
                        <Link
                            className="divide-custom"
                            sx={{
                                px: 1,
                            }}
                        >
                            Phim Chính Kịch
                        </Link>

                        <Link
                            className="divide-custom"
                            sx={{
                                px: 1,
                            }}
                        >
                            Phim Hành Động
                        </Link>

                        <Link
                            className="divide-custom"
                            sx={{
                                px: 1,
                            }}
                        >
                            Phim Khoa Học
                        </Link>

                        <Link
                            className="divide-custom"
                            sx={{
                                px: 1,
                            }}
                        >
                            Phim chính kịch
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default MovieContent;
