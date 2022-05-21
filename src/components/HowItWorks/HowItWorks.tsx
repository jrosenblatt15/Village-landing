import "./HowItWorks.scss";

import { Grid, SvgIcon, Typography } from "@material-ui/core";
import Initiate from "../../assets/initiate.png";
import Underwrite from "../../assets/underwrite.png";
import Launch from "../../assets/launch.png";
import Service from "../../assets/service.png";

export const HowItWorks = () => {
  return (
    <div className="boundary">
      <Grid container direction="column" alignItems="center" className="how-it-works-container">
        <Grid item xs={8} md={4} className="how-it-works-title">
          <Typography variant="h5">
            How does it work?
          </Typography>
        </Grid>
        <Grid container direction="row" spacing={4}>
          <Grid container direction="column" xs={12} md={6} lg={3} className="step">
            <Grid item className="img-grid-container">
              <img src={Initiate} height="75%" />
            </Grid>
            <Grid className="step-title" item>
              <Typography variant="h6" className="white-text">Step 1: Initiate</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" className="white-text">
                A borrower completes an application for a loan. This includes a completed Borrower Form and other financial data provided as necessary. 
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="column" xs={12} md={6} lg={3} className="step">
            <Grid item className="img-grid-container">
              <img src={Underwrite} height="75%" />
            </Grid>
            <Grid className="step-title" item>
              <Typography variant="h6" className="white-text">Step 2: Underwrite</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" className="white-text">
                Village uses a credit risk algorithm to score the loan, assign a rate and work with the borrower to establish the necessary legal framework. 
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="column" xs={12} md={6} lg={3} className="step">
            <Grid item className="img-grid-container">
              <img src={Launch} height="75%" />
            </Grid>
            <Grid className="step-title" item>
              <Typography variant="h6" className="white-text">Step 3: Launch</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" className="white-text">
                A new Borrower pool contract is initialized on the blockchain. A Borrower pool includes loan terms and borrower details, and is made accessible to pre-approved investors to assess and potentially fill the loan. 
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="column" xs={12} md={6} lg={3} className="step">
            <Grid item className="img-grid-container">
              <img src={Service} height="75%" />
            </Grid>
            <Grid className="step-title" item>
              <Typography variant="h6" className="white-text">Step 4: Service</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" className="white-text">
                When a loan is filled, the borrower will be able to drawdown a credit line in the form of USDC. Loan accounts are maintained and repayments are made depending on loan terms.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
