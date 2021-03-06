import "./Navbar.scss";

import { Grid, Link as MuiLink, SvgIcon, Typography, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../../assets/logoTextGreen.png";
import { ReactComponent as Discord } from "../../assets/discord.svg";
import { ReactComponent as Divider } from "../../assets/verticaldivider.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { MobileDrawer } from "./components/MobileDrawer";

export const Navbar = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)")
  const isMedScreen = useMediaQuery("max-width: 1200px)");

  return (
    <>
      {isSmallScreen ? (
        <Grid container direction="row" style={{ padding: "15px" }}>
          <Grid className="mobile-logo" item xs={6}>
            <img src={Logo} height="40%" />
          </Grid>
          <Grid className="mobile-drawer-icon" item xs={6}>
            <MobileDrawer />
          </Grid>
        </Grid>
      ) : (
        <div className="outer-nav-container">
          <Grid
            className="navbar-container"
            container
            direction="row"
            xs={12}
            md={10}
            lg={8}
            spacing={2}
            justifyContent={isSmallScreen ? "space-between" : "center"}
            alignItems="center"
            style={{ paddingTop: "10px", paddingLeft: isSmallScreen ? "10px" : "50px", paddingRight: isSmallScreen ? "10px" : "50px", marginBottom: "40px" }}
          >
            {!isSmallScreen && 
              <>
                <Grid container direction="row" xs={2}>
                  <img src={Logo} width="100%" style={{ maxHeight: "42px" }} />
                </Grid>
                <div className="navbar-divider">
                  <SvgIcon component={Divider} viewBox="0 0 1 31" />
                </div>
              </>       
            }
            <Grid item xs={2} sm={1}>
              <MuiLink href="https://village.gitbook.io/village/" target="_blank" underline="none">
                <Typography variant="body2">Docs</Typography>
              </MuiLink>
            </Grid>
            <Grid item xs={2} sm={2}>
              <MuiLink href="https://village.gitbook.io/village/faqs/" target="_blank" underline="none">
                <Typography variant="body2">FAQs</Typography>
              </MuiLink>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Link className="internal-link" to="/borrow">
                <Typography variant="body2">Borrowing</Typography>
              </Link>
            </Grid>
            <Grid item xs={2} sm={2}>
              <MuiLink href="mailto:admin@impactvillage.io" target="_blank" underline="none">
                <Typography variant="body2">Contact</Typography>
              </MuiLink>
            </Grid>
            {!isSmallScreen &&
              <>
                <div className="navbar-divider">
                  <SvgIcon component={Divider} viewBox="0 0 1 31" />
                </div>
                <Grid container xs={2} justifyContent="space-around">
                  <Grid item>
                    <MuiLink href="https://discord.gg/tzXZdCCPdd" target="_blank" underline="none">
                      <SvgIcon component={Discord} className="navbar-discord" viewBox="0 0 26 32" style={{ width: "25px", height: "30px" }} />
                    </MuiLink>
                  </Grid>
                  <Grid item>
                    <MuiLink href="https://twitter.com/Village_fi" target="_blank" underline="none">
                      <SvgIcon component={Twitter} className="footer-twitter" viewBox="0 0 32 25" style={{ width: "36px", height: "28px" }} />
                    </MuiLink>
                  </Grid>
                </Grid>
              </>
            }
          </Grid>
        </div>
      )}
    </>
  );
}
