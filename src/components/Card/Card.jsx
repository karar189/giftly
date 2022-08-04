import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

import gift1 from "../../assets/gift1.jpg";
import gift2 from "../../assets/gift2.jpg";
import gift3 from "../../assets/gift3.jpg";

export default function MultiActionAreaCard() {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item md={4}>
        <Card sx={{ maxWidth: 300, maxHeight: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={gift1}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.imperdiet elit tincidunt sapien lobortis.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card sx={{ maxWidth: 300, maxHeight: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={gift2}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.imperdiet elit tincidunt sapien lobortis.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Card sx={{ maxWidth: 300, maxHeight: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              maxHeight="100"
              image={gift3}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.imperdiet elit tincidunt sapien lobortis.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
