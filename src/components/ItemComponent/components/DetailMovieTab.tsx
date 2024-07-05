import { Box, Typography } from "@mui/material";
import React from "react";
import { COLOR } from "@/config/colors";

const DetailMovieTab = (props: { desc: string }) => {
    return (
        <>
            <Box>
                <Typography
                    sx={{
                        fontSize: "18px",
                        color: COLOR.PRIMARY_TEXT,
                        fontWeight: "700",
                    }}
                >
                    Tóm tắt
                </Typography>
                <Box
                    sx={{
                        mt: 2,
                    }}
                >
                    <Typography color={"#A1A1A1"} fontSize={"14px"}>
                        {props.desc}
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default DetailMovieTab;
