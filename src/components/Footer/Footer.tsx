import "./Footer.scss";

import { Grid, Link, SvgIcon, Typography, useMediaQuery } from "@material-ui/core";
import { ReactComponent as Discord } from "../../assets/discord.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Subtract } from "../../assets/subtract.svg";
import { ReactComponent as Divider } from "../../assets/footerdivider.svg";
import { ReactComponent as Teller } from "../../assets/tellerLogo.svg";
import { ReactComponent as Polygon } from "../../assets/polygonLogo.svg";
import { ReactComponent as TrueFi } from "../../assets/truefiLogo.svg";
import TextLogo from "../../assets/textlogo.png";
import WhiteTextLogo from "../../assets/textlogowhite.png";

const viewBox = "0 0 2 175";
const style = { width: "2px", height: "175px", marginRight: "40px" };

export const Footer = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMedScreen = useMediaQuery("(max-width: 900px)");

  const mobileFooter = () => {
    return (
      <Grid className="mobile-footer-container" container direction="column">
        <Grid className="mobile-footer" container direction="row" xs={12} justifyContent="space-between">
          <Grid item xs={6}>
            <img src={WhiteTextLogo} alt="textlogo" width="75%" />
          </Grid>
          <Grid container direction="column" xs={6}>
            <Grid item>
              <Link href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0" target="_blank" underline="none">
                <Typography className="sublink-text" variant="body2" align="center">
                  Borrower Form
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://village.gitbook.io/village/" target="_blank" underline="none">
                <Typography className="sublink-text" variant="body2" align="center">
                  Docs
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://village.gitbook.io/village/faqs/" target="_blank" underline="none">
                <Typography className="sublink-text" variant="body2" align="center">
                  FAQs
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid className="our-partners" container direction="row">
          <Grid className="our-partners" item xs={4}>
            <Typography className="white-text" variant="body2" align="center">
              Partners
            </Typography>
          </Grid>
          <Grid className="partners" container direction="row" xs={8} spacing={1}>
            <Grid item xs={4}>
              <SvgIcon component={Teller} viewBox="0 0 145 48" style={{ width: "80%", height: "30px" }} />
            </Grid>
            <Grid item xs={4}>
              <SvgIcon component={Polygon} viewBox="0 10 207 73" style={{ width: "100%", height: "40px" }} />
            </Grid>
            <Grid item xs={4}>
              <SvgIcon component={TrueFi} viewBox="0 0 541 128" style={{ width: "80%", height: "30px" }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  const desktopFooter = () => {
    return (
      <Grid className={`footer-container ${isSmallScreen && `smaller`}`} container direction="row" xs={12} justifyContent="space-between">
        <Grid container direction="column" xs={12} md={4}>
          <Grid item style={{ display: "flex", marginBottom: "20px", justifyContent: `${isMedScreen ? "center" : "flex-start"}` }}>
            <img src={TextLogo} alt="textlogo" width="55%" />
          </Grid>
        </Grid>

        <Grid container direction="row" xs={12} md={6} justifyContent={isSmallScreen ? "space-between" : "flex-end"}>
          <Grid container direction="column" xs={4} sm={3}>
            <Grid item style={{ marginBottom: "10px" }}>
              <Typography variant="body2" color="primary" align="left">
                <strong>Resources</strong>
              </Typography>
            </Grid>
            <Grid item>
              <Link href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0" target="_blank" underline="none">
                <Typography className="sublink-text" variant="body2" align="left">
                  Borrower Form
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://village.gitbook.io/village/" target="_blank" underline="none">
                <Typography className="sublink-text" variant="body2" align="left">
                  Docs
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://village.gitbook.io/village/faqs/" target="_blank" underline="none">
                <Typography className="sublink-text" variant="body2" align="left">
                  FAQs
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://discord.gg/tzXZdCCPdd" target="_blank" underline="none">
                <Typography className="sublink-text" variant="body2" align="left">
                  Discord
                </Typography>
              </Link>
            </Grid>
          </Grid>

          {!isSmallScreen &&
            <Grid item>
              <SvgIcon component={Divider} viewBox={viewBox} style={style} />
            </Grid>
          }

          <Grid container direction="column" xs={3}>
            <Grid item style={{ marginBottom: "10px" }}>
              <Typography variant="body2" color="primary" align="left">
                <strong>Contact</strong>
              </Typography>
            </Grid>
            <Grid item>
              <Link href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0" target="_blank" underline="none">
                <Typography className="sublink-text" variant="body2" align="left">
                  Borrow
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://twitter.com/Village_fi" underline="none">
                <Typography className="sublink-text" variant="body2" align="left">
                  Media
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="mailto:admin@impactvillage.io" underline="none">
                <Typography className="sublink-text" variant="body2" align="left">
                  Say hello
                </Typography>
              </Link>
            </Grid>
          </Grid>

          {!isSmallScreen &&
            <Grid item>
              <SvgIcon component={Divider} viewBox={viewBox} style={style} />
            </Grid>
          }

          <Grid container direction="column" xs={3}>
            <Grid item style={{ marginBottom: "10px" }}>
              <Typography variant="body2" color="primary" align="left">
                <strong>Social</strong>
              </Typography>
            </Grid>
            <Grid container direction="column" spacing={2} alignItems="flex-start">
              <Grid item>
                <Link href="https://discord.gg/tzXZdCCPdd" target="_blank" underline="none">
                  <SvgIcon component={Discord} className="footer-discord" viewBox="0 0 26 32" />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://twitter.com/Village_fi" underline="none">
                  <SvgIcon component={Twitter} className="footer-twitter" viewBox="0 0 32 25" />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" underline="none">
                  <SvgIcon component={Subtract} className="footer-other-icon" viewBox="0 0 21 29" />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      {isSmallScreen ? mobileFooter() : desktopFooter()}
    </>
  );
}
