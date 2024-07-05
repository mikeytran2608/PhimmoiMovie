"use client";
import {
    Box,
    Divider,
    Grid,
    Link,
    Paper,
    Typography,
    styled,
} from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const Footer = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, px: 5, pt: 5 }}>
                <Grid
                    container
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <Grid item xs={4}>
                        <Box>
                            <img src="/images/logo.png" alt="Phimmoi" />
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "rgba(255, 255, 255, .6)",
                                    lineHeight: "23px",
                                    marginTop: "20px",
                                }}
                            >
                                <a href="#">Phimmoi</a> - Trang xem phim Online
                                với giao diện mới được bố trí và thiết kế thân
                                thiện với người dùng. Nguồn phim được tổng hợp
                                từ các website lớn với đa dạng các đầu phim và
                                thể loại vô cùng phong phú.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={8}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "20px",
                            color: "#fff",
                            fontSize: "15px",
                            fontWeight: "bold",
                        }}
                    >
                        <Grid item xs={3}>
                            <Box>
                                <Typography>Phim mới</Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        "& a": {
                                            my: 1,
                                        },
                                        fontSize: "13px",
                                    }}
                                >
                                    <Link underline="none" href="">
                                        Phim Khoa Học
                                    </Link>
                                    <Link underline="none" href="">
                                        Phim Kinh Dị
                                    </Link>
                                    <Link underline="none" href="">
                                        Phim Chiếu Rạp
                                    </Link>
                                    <Link underline="none" href="">
                                        Phim Hình Sự
                                    </Link>
                                    <Link underline="none" href="">
                                        Phim Hành Động
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box>
                                <Typography>Phim Hay</Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        "& a": {
                                            my: 1,
                                        },
                                        fontSize: "13px",
                                    }}
                                >
                                    <Link underline="none" href="">
                                        Phim Âu Mỹ
                                    </Link>
                                    <Link underline="none" href="">
                                        Phim Hàn Quốc
                                    </Link>
                                    <Link underline="none" href="">
                                        Phim Trung Quốc
                                    </Link>
                                    <Link underline="none" href="">
                                        Phim Nhật Bản
                                    </Link>
                                    <Link underline="none" href="">
                                        Phim Thái Lan
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box>
                                <Typography>Thông tin</Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        "& a": {
                                            my: 1,
                                        },
                                        fontSize: "13px",
                                    }}
                                >
                                    <Link underline="none" href="">
                                        Giới thiệu
                                    </Link>
                                    <Link underline="none" href="">
                                        Liên hệ chúng tôi
                                    </Link>
                                    <Link underline="none" href="">
                                        Điều khoản sử dụng
                                    </Link>
                                    <Link underline="none" href="">
                                        Chính sách riêng tư
                                    </Link>
                                    <Link underline="none" href="">
                                        Khiếu nại bản quyền
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider
                    sx={{ background: "rgba(255, 255, 255, .08)" }}
                ></Divider>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 5,
                    }}
                >
                    <Typography
                        sx={{
                            color: "rgba(255, 255, 255, .6)",
                            fontSize: "13px",
                        }}
                    >
                        © Phimmoi
                    </Typography>
                    <Box>
                        <Link sx={{ px: 2 }} href="#">
                            <FacebookOutlinedIcon />
                        </Link>
                        <Link sx={{ px: 2 }} href="#">
                            <TwitterIcon />
                        </Link>
                        <Link sx={{ px: 2 }} href="#">
                            <InstagramIcon />
                        </Link>
                        <Link sx={{ px: 2 }} href="#">
                            <YouTubeIcon />
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
