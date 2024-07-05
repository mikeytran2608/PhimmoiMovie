"use client";
import { Box, Button, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { YearCalendar } from "@mui/x-date-pickers/YearCalendar";
import dayjs from "dayjs";

const ReversedYearCalendar = ({ minDate, maxDate, value, onChange }: any) => {
    const minYear = dayjs(minDate).year();
    const maxYear = dayjs(maxDate).year();
    const years = [];

    for (let year = maxYear; year >= minYear; year--) {
        years.push(year);
    }

    return (
        <Grid container spacing={1}>
            {years.map((year) => (
                <Grid item key={year} xs={4}>
                    <Button
                        variant={year === value.year() ? "contained" : "text"}
                        onClick={() => onChange(dayjs().year(year))}
                        sx={{
                            color: "rgba(255,255,255,.5)",
                            "&:hover": {
                                background: "#408BEA",
                                color: "#fff",
                            },
                            "&:focus": {
                                color: "#fff",
                            },

                            width: "100%",
                            height: "35px",

                            background: "#000",
                        }}
                    >
                        {year}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
};

const YearOfRelease = () => {
    const [selectedYear, setSelectedYear] = React.useState(dayjs());
    return (
        <>
            <Box component="header" sx={{}}>
                <Box
                    component="section"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: "15px",
                    }}
                >
                    <Typography color={"rgba(255, 255, 255, .6)"}>
                        Năm phát hành
                    </Typography>
                    <Typography color={"rgba(255, 255, 255, .6)"}>
                        <ArrowDropDownIcon />
                    </Typography>
                </Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <ReversedYearCalendar
                        minDate={dayjs("2010-01-01")}
                        maxDate={dayjs("2024-05-21")}
                        value={selectedYear}
                        onChange={setSelectedYear}
                    />
                </LocalizationProvider>
            </Box>
        </>
    );
};

export default YearOfRelease;
