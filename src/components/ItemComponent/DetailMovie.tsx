"use client";
import { COLOR } from "@/config/colors";
import { PATH } from "@/config/routerConfig";
import {
    Box,
    Breadcrumbs,
    Link,
    Stack,
    Tabs,
    Tab,
    Typography,
} from "@mui/material";
import { Divider } from "@mui/material";
import React from "react";
import WatchMovieTab from "./components/WatchMovieTab";
import DetailMovieTab from "./components/DetailMovieTab";
import ActorMovieTab from "./components/ActorMovieTab";
import MovieContent from "./components/MovieContent";
import Share from "./components/Share";
import ListMovie from "../Contents/ListMovie/page";
import data from "@/api/data";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

const DetailMovie = (props: { data: any; listData: any }) => {
    const breadcrumbs = [
        <Link underline="none" key="1" color={COLOR.SECONDARY_COLOR} href="/">
            Trang chủ
        </Link>,
        <Link
            underline="none"
            key="2"
            color={COLOR.SECONDARY_COLOR}
            href={props.data.series === "phim-le" ? PATH.PHIMLE : PATH.PHIMBO}
        >
            {props.data.series === "phim-le" ? "Phim lẻ" : "Phim bộ"}
        </Link>,
        <Typography
            sx={{ color: COLOR.SECONDARY_COLOR }}
            key="3"
            color={COLOR.BLACK_COLOR}
        >
            {props.data.name}
        </Typography>,
    ];

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Stack
                spacing={2}
                sx={{
                    px: 2,
                }}
            >
                <Breadcrumbs separator="››" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>

            <MovieContent data={props.data} />
            <Divider
                sx={{ background: "rgba(255, 255, 255, .08)", height: "2px" }}
            />

            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        sx={{
                            px: 2,
                            py: 1,
                            "& .MuiTabs-indicator": {
                                display: "none",
                            },
                            "& .Mui-selected.MuiTab-root": {
                                backgroundColor: COLOR.SECONDARY_COLOR,
                                color: COLOR.PRIMARY_TEXT,
                            },
                            "& .Mui-selected.MuiTab-root:hover": {
                                color: COLOR.PRIMARY_TEXT,
                            },
                            "& .MuiTab-root": {
                                fontWeight: "700",
                            },
                            "& .MuiTab-root:hover": {
                                color: COLOR.SECONDARY_COLOR,
                            },
                        }}
                    >
                        <Tab
                            label="Xem phim"
                            sx={{
                                mx: 1,
                                padding: "10px 20px",
                                borderRadius: "4px",
                                color: "#8d8c8b",
                                fontSize: "14px",
                                textTransform: "capitalize",
                                minHeight: "auto",
                            }}
                        />
                        <Tab
                            label="Thông tin"
                            sx={{
                                mx: 1,
                                padding: "10px 20px",
                                borderRadius: "4px",
                                color: "#8d8c8b",
                                fontSize: "14px",
                                textTransform: "capitalize",
                                minHeight: "auto",
                            }}
                        />
                        <Tab
                            label="Diễn viên"
                            sx={{
                                mx: 1,
                                padding: "10px 20px",
                                borderRadius: "4px",
                                color: "#8d8c8b",
                                fontSize: "14px",
                                textTransform: "capitalize",
                                minHeight: "auto",
                            }}
                        />
                    </Tabs>
                </Box>
                <Divider
                    sx={{
                        background: "rgba(255, 255, 255, .08)",
                        height: "2px",
                    }}
                />

                <CustomTabPanel value={value} index={0}>
                    <WatchMovieTab />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <DetailMovieTab desc={props.data.desc} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <ActorMovieTab />
                </CustomTabPanel>
            </Box>

            <Divider
                sx={{ background: "rgba(255, 255, 255, .08)", height: "2px" }}
            />
            <Box>
                <Share />
            </Box>
            <Divider
                sx={{ background: "rgba(255, 255, 255, .08)", height: "2px" }}
            />
            <Box>
                <Box>
                    <ListMovie
                        data={props.listData}
                        title="Phim mới"
                        borderTitle={false}
                    />
                </Box>
            </Box>
        </>
    );
};

export default DetailMovie;
