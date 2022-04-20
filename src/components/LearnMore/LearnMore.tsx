import "./LearnMore.scss";

import { Button, Grid, Link, Typography } from "@material-ui/core";

export const LearnMore = () => {
  return (
    <Grid className="learn-more-container" container direction="column" xs={8}>
      <Grid className="learn-more-text" item>
        <Typography variant="body1" color="primary">
          We offer both secured and unsecured loans on a borrower by borrower basis. Terms for each borrower fund is determined by using our Credit Risk Algorithm.
        </Typography>
      </Grid>
      <Grid item>
        <Link href="https://village.gitbook.io/village/" target="_blank" underline="none">
          <Button variant="contained" color="secondary">
            <Typography variant="body1">Learn More</Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
