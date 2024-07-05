"use client";
import React, { useState } from "react";
// import { Layout, Flex, Input, MenuProps } from "antd";
import Image from "next/image";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
// import styled from "styled-components";
import Link from "next/link";
// import MenuItem from "antd/es/menu/MenuItem";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Menu,
    Button,
    styled,
    Paper,
    InputBase,
} from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { PATH } from "@/config/routerConfig";

const pages = ["Phimmoi", "Phim lẻ", "Phim bộ", "Thể loại", "Quốc gia"];

const pages1 = [
    {
        title: "Phimmoi",
        path: PATH.HOME,
    },
    {
        title: "Phim lẻ",
        path: PATH.PHIMLE,
    },
    {
        title: "Phim bộ",
        path: PATH.PHIMBO,
    },
    {
        title: "Thể loại",
        children: [
            "Phim Cổ Trang",
            "Phim Cổ Trang",
            "Phim Cổ Trang",
            "Phim Cổ Trang",
            "Phim Cổ Trang",
        ],
    },
    {
        title: "Quốc gia",
        children: [
            "Phim Hàn Xẻng",
            "Phim Hàn Xẻng",
            "Phim Hàn Xẻng",
            "Phim Hàn Xẻng",
            "Phim Hàn Xẻng",
        ],
    },
];

const HeaderStyled = styled(Box)`
    width: 100%;
    height: 70px;
    background-color: #151414;
`;

const AppBarStyled = styled(AppBar)`
    margin: 0 auto;
    max-width: 1200px;
    height: 70px;
    background-color: #151414;
    box-shadow: none;

    & .MuiButtonBase-root:hover {
        color: #3c81d7;
        background-color: transparent;
    }
`;

const SearchInput = styled(Paper)`
    max-width: 340px;
    height: 40px;
    background: #2d2d2d;

    & .MuiInputBase-root,
    & .MuiButtonBase-root {
        color: #fff;
    }
`;

const Header = () => {
    const router = useRouter();
    const pathName = usePathname();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [open, setOpen] = useState(0);
    const handleClick = (event: any, title: number) => {
        setAnchorEl(event.currentTarget);
        setOpen(title);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(0);
    };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <HeaderStyled position="relative" zIndex="1">
            <AppBarStyled position="static">
                <Container
                    maxWidth="xl"
                    sx={{
                        height: "100%",
                        px: 0,
                        "@media (min-width: 600px)": { px: 0 },
                    }}
                >
                    <Toolbar disableGutters sx={{ height: "100%" }}>
                        {/* Logo */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                                background: "#202020",
                                padding: "19px",
                            }}
                        >
                            <Image
                                src={"/images/logo.png"}
                                alt="Phimmoi"
                                width={152}
                                height={32}
                            />
                        </Typography>

                        {/* Navbar Responsive */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                        <svg data-testid="DeleteIcon"></svg>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* Logo Responsive */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            <Image
                                src={"/images/logo.png"}
                                alt="Phimmoi"
                                width={152}
                                height={32}
                            />
                        </Typography>

                        {/* Navbar */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages1.map((page: any, index) => (
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                    key={index}
                                >
                                    <Button
                                        onClick={(event) => {
                                            handleClick(event, index);
                                            router.push(page?.path); //Page Routing
                                        }}
                                        sx={{
                                            my: 2,
                                            display: "block",
                                            color:
                                                pathName === page.path
                                                    ? "red"
                                                    : "rgba(255,255,255,.8)",
                                            textTransform: "capitalize",
                                            fontSize: 16,
                                            padding: "9px 0px 9px 20px",
                                        }}
                                    >
                                        {page.title}
                                    </Button>
                                    {page.children && (
                                        <>
                                            <ArrowDropDownIcon />

                                            <Menu
                                                id="basic-menu"
                                                key={index}
                                                anchorEl={anchorEl}
                                                open={index === open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    "aria-labelledby":
                                                        "basic-button",
                                                }}
                                            >
                                                <MenuItem>
                                                    {page.children}
                                                </MenuItem>
                                            </Menu>
                                        </>
                                    )}
                                </Box>
                            ))}
                        </Box>

                        {/* Search Input */}
                        <SearchInput
                            sx={{
                                p: "2px 4px",
                                display: "flex",
                                alignItems: "center",
                                width: 400,
                            }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Tim kiem..."
                                inputProps={{ "aria-label": "Tim kiem" }}
                            />
                            <IconButton
                                type="button"
                                sx={{ p: "10px" }}
                                aria-label="search"
                            >
                                <SearchIcon />
                            </IconButton>
                        </SearchInput>
                    </Toolbar>
                </Container>
            </AppBarStyled>
        </HeaderStyled>
    );
};

export default Header;
function setCurrent(key: string) {
    throw new Error("Function not implemented.");
}
