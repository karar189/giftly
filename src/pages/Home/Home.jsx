import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from "@mui/material";

import ButtonAppBar from "../../components/ButtonAppBar/ButtonAppBar";

import headerSvg from "../../assets/headerImg.svg";
import headerSvg2 from "../../assets/corporateGifting.svg";

const Home = () => {
  return (
    <>
      <ButtonAppBar />
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
              <Button variant="contained" sx={{ mt: 2 }}>
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
              />
            </Container>
          </Grid>
        </Grid>
      </Container>
      {/* feature part */}
      <Container sx={{ flexGrow: 2 }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          p={5}
        >
          <Typography variant="h4" sx={{ p: 1 }}>
            <strong>Thoughtful Gifting made easy</strong>
          </Typography>
          <Typography variant="h7" sx={{ p: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.imperdiet
            elit tincidunt sapien lobortis.
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={4}>
            {" "}
            <Typography>
              <strong>Thoughtful Gifting made easy</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.imperdiet{" "}
              </p>
            </Typography>
          </Grid>
          <Grid item md={4}>
            {" "}
            <Typography>
              <strong>Thoughtful Gifting made easy</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.imperdiet{" "}
              </p>
            </Typography>
          </Grid>
          <Grid item md={4}>
            {" "}
            <Typography>
              <strong>Thoughtful Gifting made easy</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.imperdiet{" "}
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Container>

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
              <Button variant="contained" sx={{ mt: 2 }}>
                Get Started
              </Button>
            </Container>
          </Grid>
        </Grid>
      </Container>

      {/* footer */}
      <Box md={12}>
        <Typography>
          We are trusted by over 100,000+ companies and over 1,000,000+
        </Typography>
      </Box>
    </>
  );
};

export default Home;
