import "./InfoBoxes.scss";

import { Grid, SvgIcon, Typography } from "@material-ui/core";
import { ReactComponent as Farm } from "../../assets/farm.svg";
import { ReactComponent as Chain } from "../../assets/chain.svg";
import { ReactComponent as Invest } from "../../assets/invest.svg";
import { ReactComponent as Borrow } from "../../assets/borrow.svg";

export const InfoBoxes = () => {
  return (
    <Grid className="info-boxes" container direction="column" alignItems="center" xs={10}>
      <Grid className="top-box" container direction="row" alignItems="center" style={{ marginBottom: "40px", flexWrap: "nowrap" }}>
        <Grid item xs={7}>
          <SvgIcon
            component={Farm}
            className="info-box-icon"
            viewBox="0 0 677 438"
            style={{ width: "508px", height: "329px" }}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography className="white-text" variant="h6" align="left">
            Leverage the blockchain and stablecoins to invest and earn, or borrow and fund toward a better world using Village.
          </Typography>
        </Grid>
      </Grid>

      <Grid className="expand" container direction="column">
        <div className="white-box">
          <Grid container direction="row" xs={12} justifyContent="space-between" style={{ marginBottom: "15px" }}>
            <Grid item xs={4}>
              <Typography variant="h5" align="left">
                Expand your access to impact
              </Typography>
            </Grid>
            <Grid item>
              <SvgIcon
                component={Chain}
                className="info-box-chain"
                viewBox="0 0 77 64"
                style={{ width: "77px", height: "64px" }}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="left">
              Village uses smart contracts to unlock capital opportunities without intermediaries. The result is an expanded access to impact, enabling socially conscious investors to support inspiring causes while borrowers appreciate easier access to capital at improved rates.
            </Typography>
          </Grid>
        </div>
      </Grid>

      <Grid container direction="row">
        <Grid className="invest" container direction="column" alignItems="flex-end" xs={6}>
          <Grid item>
            <SvgIcon
              component={Invest}
              className="info-box-invest-icon"
              viewBox="0 0 89 69"
              style={{ width: "78px", height: "60px" }}
            />
          </Grid>
          <Grid item>
            <Typography id="invest-text" className="white-text" variant="h5" align="right">Invest</Typography>
          </Grid>
          <Grid item>
            <Typography className="white-text" variant="h6" align="right">
              Tap into a new type of yield by committing capital to a borrower’s impact fund. For every cause, there will be a new fund for you to invest in.
            </Typography>
          </Grid>
        </Grid>
        <Grid className="borrow" container direction="column" alignItems="flex-start" xs={6}>
          <Grid item>
            <SvgIcon
              component={Borrow}
              className="info-box-borrow-icon"
              viewBox="0 0 60 60"
              style={{ width: "60px", height: "60px" }}
            />
          </Grid>
          <Grid item>
            <Typography id="borrow-text" className="white-text" variant="h5" align="left">Borrow</Typography>
          </Grid>
          <Grid item>
            <Typography className="white-text" variant="h6" align="left">
              Impact-focused businesses, investment funds, and other types of institutions are likely eligible to borrow through Village! Head to our Borrower Form or Contact Us to start the process.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
