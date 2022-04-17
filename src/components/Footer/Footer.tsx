import "./Footer.scss";

import { Grid, SvgIcon, Typography } from "@material-ui/core";
import { ReactComponent as Discord } from "../../assets/discord.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Subtract } from "../../assets/subtract.svg";
import { ReactComponent as Divider } from "../../assets/footerdivider.svg";
import TextLogo from "../../assets/textlogo.png";

const viewBox = "0 0 2 175";
const style = { width: "2px", height: "175px", marginRight: "40px" };

export const Footer = () => {
  return (
    <Grid className="footer-container" container direction="row" xs={12} justifyContent="space-between">
      <Grid container direction="column" xs={4}>
        <Grid item justifyContent="flex-start" style={{ display: "flex", marginBottom: "20px" }}>
          <img src={TextLogo} alt="textlogo" width="55%" />
        </Grid>
        <Grid item>
          <Typography variant="body2" color="primary" align="left">
            Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution-ShareAlike 4.0 International license.
          </Typography>
        </Grid>
      </Grid>

      <Grid container direction="row" xs={6}>
        <Grid container direction="column" xs={3}>
          <Grid item style={{ marginBottom: "10px" }}>
            <Typography variant="body2" color="primary" align="left">
              <strong>Resources</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="sublink-text" variant="body2" align="left">Borrower Form</Typography>
          </Grid>
          <Grid item>
            <Typography className="sublink-text" variant="body2" align="left">Docs</Typography>
          </Grid>
          <Grid item>
            <Typography className="sublink-text" variant="body2" align="left">FAQs</Typography>
          </Grid>
          <Grid item>
            <Typography className="sublink-text" variant="body2" align="left">Discord</Typography>
          </Grid>
          <Grid item>
            <Typography className="sublink-text" variant="body2" align="left">Newsletter</Typography>
          </Grid>
        </Grid>

        <Grid item>
          <SvgIcon component={Divider} viewBox={viewBox} style={style} />
        </Grid>

        <Grid container direction="column" xs={2}>
          <Grid item style={{ marginBottom: "10px" }}>
            <Typography variant="body2" color="primary" align="left">
              <strong>Contact</strong>
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="sublink-text" variant="body2" align="left">Borrow</Typography>
          </Grid>
          <Grid item>
            <Typography className="sublink-text" variant="body2" align="left">Partner</Typography>
          </Grid>
          <Grid item>
            <Typography className="sublink-text" variant="body2" align="left">Media</Typography>
          </Grid>
          <Grid item>
            <Typography className="sublink-text" variant="body2" align="left">Say hello</Typography>
          </Grid>
        </Grid>

        <Grid item>
          <SvgIcon component={Divider} viewBox={viewBox} style={style} />
        </Grid>

        <Grid container direction="column" xs={3}>
          <Grid item style={{ marginBottom: "10px" }}>
            <Typography variant="body2" color="primary" align="left">
              <strong>Social</strong>
            </Typography>
          </Grid>
          <Grid container direction="row" spacing={2}>
            <Grid item>
              <SvgIcon component={Discord} className="footer-discord" />
            </Grid>
            <Grid item>
              <SvgIcon component={Twitter} className="footer-twitter" />
            </Grid>
            <Grid item>
              <SvgIcon component={Subtract} className="footer-other-icon" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
