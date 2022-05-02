import "./LearnMore.scss";

import { Button, Grid, Link, Typography, useMediaQuery } from "@material-ui/core";

export const LearnMore = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const mobileLearnMore = () => {
    return (
      <></>
    );
  }

  const desktopLearnMore = () => {
    return (
      <Grid className="learn-more-container" container direction="column" xs={8}>
        <Grid className="learn-more-text" item>
          <Typography variant="body1" color="primary">
          We take a data driven approach to underwriting every new borrower. Using our credit risk algorithm, we assess financial data to recommend a rate for your loan and inform Village lenders that provide the capital.
          </Typography>
        </Grid>
        <Grid item>
          <Link href="https://village.gitbook.io/village/" target="_blank" underline="none">
            <Button variant="contained" color="secondary" style={{ minWidth: "438px" }}>
              <Typography variant="body1">Learn about credit assessment</Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      {isSmallScreen ? mobileLearnMore() : desktopLearnMore()}
    </>
  );
}
