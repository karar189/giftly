import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  CardMedia,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./homestyle.css";

import ButtonAppBar from "../../components/ButtonAppBar/ButtonAppBar";
import Card from "../../components/Card/Card";
import Form from "../../components/Form/Form";
import FooterMain from "../../components/FooterMain/FooterMain";

import headerSvg from "../../assets/headerImg.svg";
import headerSvg2 from "../../assets/corporateGifting.svg";
import headerSvg3 from "../../assets/personalGifting.svg";
import pic1 from "../../assets/svggift.svg";
import pic2 from "../../assets/svghappy.svg";
import pic3 from "../../assets/svgflower.svg";

const useStyles = makeStyles((theme) => ({
  typo: {
    flexGrow: 1,
    textAlign: "center",
  },
  paper1: {
    backgroundColor: "blue",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <ButtonAppBar />
      <br />

      <Container maxWidth="lg">
        {/* header part */}
        <Container md={{ flexGrow: 2 }}>
          <Grid container spacing={1} md={{ m: 2 }} sx={{ m: 1 }}>
            <Grid item md={5} sx={{ p: 2 }}>
              <Container md={{ mt: 10, ml: 6 }}>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  <strong>Thoughtful Gifting made easy</strong>
                </Typography>
                <Typography variant="h7" sx={{ mb: 6 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.imperdiet elit tincidunt sapien lobortis, vitae commodo
                  arcu dignissim. Curabitur fringilla neque lorem, sed finibus
                  dolor auctor scelerisque.
                </Typography>
                <br />
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  style={{ background: "#6f42c1" }}
                >
                  Get Started
                </Button>
              </Container>
            </Grid>
            <Grid item md={6} sx={8}>
              <Container>
                <img
                  src={headerSvg}
                  alt=""
                  srcset=""
                  style={{ height: "489x", width: "550px" }}
                  class="responsive"
                />
              </Container>
            </Grid>
          </Grid>
        </Container>
        <br />
        <br />
        <br />

        {/* feature part */}
        <Container sx={{ flexGrow: 2 }}>
          <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            p={5}
          >
            <Typography variant="h4" sx={{ p: 1 }} className={classes.typo}>
              <strong>Thoughtful Gifting made easy</strong>
            </Typography>
            <Typography variant="h7" sx={{ p: 1 }} className={classes.typo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.imperdiet
              elit tincidunt sapien lobortis.
            </Typography>
          </Grid>
          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
            p={5}
          >
            <Grid item md={4} container justifyContent="center">
              {" "}
              <img src={pic1} style={{ width: "110px", height: "110px" }} />
              <Typography className={classes.typo} sx={{ mt: 3 }}>
                <strong>Thoughtful Gifting made easy</strong>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.imperdiet{" "}
                </p>
              </Typography>
            </Grid>
            <Grid item md={4} container justifyContent="center">
              {" "}
              <img src={pic2} style={{ width: "110px", height: "110px" }} />
              <Typography className={classes.typo} sx={{ mt: 3 }}>
                <strong>Thoughtful Gifting made easy</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.imperdiet{" "}
                </p>
              </Typography>
            </Grid>
            <Grid item md={4} container justifyContent="center">
              {" "}
              <img src={pic3} style={{ width: "110px", height: "110px" }} />
              <Typography className={classes.typo} sx={{ mt: 3 }}>
                <strong>Thoughtful Gifting made easy</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.imperdiet{" "}
                </p>
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <br />
        <br />
        <br />

        {/*header2 */}
        <Container md={{ flexGrow: 2 }}>
          <Grid container spacing={1} md={{ m: 2 }} sx={{ m: 1 }}>
            <Grid item md={6} sx={8}>
              <Container>
                <img
                  src={headerSvg2}
                  alt=""
                  srcset=""
                  style={{ height: "489x", width: "550px" }}
                />
              </Container>
            </Grid>
            <Grid item md={5} sx={{ p: 2 }}>
              <Container md={{ mt: 10, ml: 6 }}>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  <strong>Thoughtful Gifting made easy</strong>
                </Typography>
                <Typography variant="h7" sx={{ mb: 6 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.imperdiet elit tincidunt sapien lobortis, vitae commodo
                  arcu dignissim. Curabitur fringilla neque lorem, sed finibus
                  dolor auctor scelerisque.
                </Typography>
                <br />
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  style={{ background: "#6f42c1" }}
                >
                  Get Started
                </Button>
              </Container>
            </Grid>
          </Grid>
        </Container>
        <br />
        <br />
        <br />

        {/*header3 */}
        <Container md={{ flexGrow: 2 }}>
          <Grid container spacing={1} md={{ m: 2 }} sx={{ m: 1 }}>
            <Grid item md={5} sx={{ p: 2 }}>
              <Container md={{ mt: 10, ml: 6 }}>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  <strong>Thoughtful Gifting made easy</strong>
                </Typography>
                <Typography variant="h7" sx={{ mb: 6 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.imperdiet elit tincidunt sapien lobortis, vitae commodo
                  arcu dignissim. Curabitur fringilla neque lorem, sed finibus
                  dolor auctor scelerisque.
                </Typography>
                <br />
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  style={{ background: "#6f42c1" }}
                >
                  Get Started
                </Button>
              </Container>
            </Grid>
            <Grid item md={6} sx={8}>
              <Container>
                <img
                  src={headerSvg3}
                  alt=""
                  srcset=""
                  style={{ height: "489x", width: "550px" }}
                />
              </Container>
            </Grid>
          </Grid>
        </Container>
        <br />
        <br />
        <br />

        {/* blog section */}
        <Container sx={{ flexGrow: 2 }}>
          <Grid>
            <Typography variant="h4" sx={{ p: 1 }} className={classes.typo}>
              <strong>Blogs</strong>
            </Typography>
            <Typography variant="h6" sx={{ p: 1 }} className={classes.typo}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.imperdiet
              elit tincidunt sapien lobortis.
            </Typography>
          </Grid>

          <Grid>
            <Card></Card>
          </Grid>
        </Container>
        <br />
        <br />
        <br />

        {/* form section */}
        <Container md={{ flexGrow: 2 }}>
          <Grid container spacing={1} md={{ m: 2 }} sx={{ m: 1 }}>
            <Grid item md={5} sx={{ p: 2 }}>
              <Container md={{ mt: 10, ml: 6 }}>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  <strong>Contact Us</strong>
                </Typography>
                <Typography variant="h7" sx={{ mb: 6 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.imperdiet elit tincidunt sapien lobortis, vitae commodo
                  arcu dignissim. Curabitur fringilla neque lorem, sed finibus
                  dolor auctor scelerisque.
                </Typography>
                <br />
              </Container>
            </Grid>
            <Grid item md={6} sx={8}>
              <Container>
                <Form />
              </Container>
            </Grid>
          </Grid>
        </Container>

        {/* footer */}
        {/* <Box md={12}>
        <Typography>
          We are trusted by over 100,000+ companies and over 1,000,000+
        </Typography>
      </Box> */}
      </Container>
      <br />
      <FooterMain />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation style={{ background: "#6f42c1", color: "white" }}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            sx={{ mt: 2 }}
          >
            <Typography>We are trusted by clients</Typography>
          </Grid>
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default Home;
