"use client";
import { Box, Grid, Link, Paper, Typography, styled } from "@mui/material";
import React from "react";

const datas = [
    {
        title: "Top 12 phim ngôn tình Trung Quốc hay không nên bỏ qua",
        desc: "List những bộ phim ngôn tình Trung Quốc lãng mạn sẽ khiến tâm hồn bạn trở nên ngọt ngào. Tham khảo ngay top phim tình cảm Trung Quốc đã được phimmoi liệt kê bên dưới nhé! Thầm ...",
        day: "5",
        month: "MARCH",
    },
    {
        title: "Top 10 bộ phim hay nhất mà bạn nên xem một lần trong đời",
        desc: "Phim truyện là một lĩnh vực rộng lớn, có rất nhiều thể loại phim với nhưng nội dung và ý nghĩa khác nhau. Xem phim không chỉ để giải trí, mà mỗi bộ phim còn đem lại những ý ...",
        day: "5",
        month: "MARCH",
    },
    {
        title: "Top phim và chương trình ăn khách nhất trên Netflix từ trước đến nay",
        desc: "Netflix vừa công bố số liệu thống kê hàng tuần cho bộ phim và chương trình truyền hình ăn khách nhất trên nền tảng này. Những năm trước, Netflix thường không chia sẻ số lượng ...",
        day: "5",
        month: "MARCH",
    },
    {
        title: "Top 15 phim Nhật hay và ý nghĩa mà các bạn không nên bỏ lỡ",
        desc: "Khi nhắc đến nền điện ảnh Nhật Bản, hẳn ai cũng sẽ nghĩ đến những bộ anime nổi tiếng trên toàn thế giới. Nhưng bên cạnh đó, các tác phẩm điện ảnh và phim truyền hình của Nhật ...",
        day: "5",
        month: "MARCH",
    },
    {
        title: "Top 10+ Phim bách hợp Hàn, Trung, Âu Mỹ hay và táo bạo nhất",
        desc: "Phim bách hợp tuy còn khá mới mẻ nhưng lại được rất nhiều mọt phim ưa thích, đặc biệt là các bạn trẻ. Không chỉ thành công trong việc xây dựng tình huống phim, ...",
        day: "5",
        month: "MARCH",
    },
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const News = () => {
    return (
        <>
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "40px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "20px",
                            color: "#fff",
                            borderLeft: "3px solid #408bea",
                            paddingLeft: "10px",
                        }}
                    >
                        Tin tức
                    </Typography>
                    <Link href="#" underline="none" variant="body2">
                        Xem thêm
                    </Link>
                </Box>
                <Box sx={{ flexGrow: 1, marginTop: "15px" }}>
                    <Grid container spacing={2}>
                        <Box>
                            {datas.map((data: any, index: number) => (
                                <Box
                                    key={index}
                                    sx={{
                                        color: "white",
                                        display: "flex",
                                        margin: "15px",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            padding: "0 20px",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "25px",
                                                color: "#408bea",
                                            }}
                                        >
                                            {data.day}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                textTransform: "uppercase",
                                                fontSize: "10px",
                                                color: "#6E6E6E",
                                            }}
                                        >
                                            {data.month}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Link
                                            href="#"
                                            underline="none"
                                            sx={{
                                                fontSize: "18px",
                                                color: "rgba(255, 255, 255, .8)",
                                            }}
                                        >
                                            {data.title}
                                        </Link>
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                lineHeight: "20px",
                                                color: "#6E6E6E",
                                                marginTop: "5px",
                                            }}
                                        >
                                            {data.desc}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default News;
