import "./Headline.scss";

import { Button, Grid, Link, Typography } from "@material-ui/core";

export const Headline = () => {
  return (
    <Grid className="headline-container" container direction="row" alignItems="flex-start" xs={10}>
      <Grid item xs={6}>
        <Typography variant="h4" color="primary">Village</Typography>
      </Grid>

      <Grid container direction="column" alignItems="flex-start" xs={6}>
        <Grid item style={{ marginBottom: "55px" }}>
          <Typography variant="h5" color="secondary" align="left">
            Novel Impact Investing with Digital Assets 
          </Typography>
        </Grid>

        <Grid container direction="row" justifyContent="flex-start">
          <Grid item>
            <Link href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0" target="_blank" underline="none">
              <Button id="apply" className="headline-button" variant="contained" color="primary">
                <Typography variant="body1">Apply to Borrow</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://village.gitbook.io/village/" target="_blank" underline="none">
              <Button className="headline-button" variant="contained" color="secondary">
                <Typography variant="body1">Learn More</Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
