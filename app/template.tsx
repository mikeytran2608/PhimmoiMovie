import { Flex, Layout } from "antd";
import Header from "../src/components/LandingComponent/Header";
import { Box, Divider, Grid } from "@mui/material";
import RightContent from "../src/components/Contents/RightContent";
import Footer from "../src/components/LandingComponent/Footer";
import "./test";

const template = ({ children }: any) => {
    return (
        <>
            <Header />
            <Layout
                style={{
                    width: "1200px",
                    margin: "0 auto",
                    marginTop: "0",
                    backgroundColor: "rgba(15,15,15,.9)",
                }}
            >
                <Box
                    component="section"
                    sx={{
                        p: 1.2,
                        border: "1px solid #b8b612",
                        backgroundColor: "black",
                        color: "#999",
                        textAlign: "center",
                    }}
                >
                    Truy cập phimmoiiii.net nếu không vào được{" "}
                    <strong>Phimmoi</strong>
                </Box>
                <Grid container>
                    <Grid
                        item
                        xs={8}
                        sx={{
                            borderRight: "1px solid rgba(255, 255, 255, .08)",
                        }}
                    >
                        {children}
                    </Grid>

                    <Grid item xs={4} p={"30px"}>
                        <RightContent />
                    </Grid>
                </Grid>
                <Divider sx={{ background: "rgba(255, 255, 255, .08)" }} />
                <Footer />
            </Layout>
        </>
    );
};

export default template;
