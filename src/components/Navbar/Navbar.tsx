import "./Navbar.scss";

import { Grid, Link, SvgIcon, Typography, useMediaQuery } from "@material-ui/core";
import Logo from "../../assets/logo.png";
import { ReactComponent as Discord } from "../../assets/discord.svg";
import { ReactComponent as Divider } from "../../assets/verticaldivider.svg";

export const Navbar = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)")
  const isMedScreen = useMediaQuery("max-width: 1200px)");

  return (
    <div className="outer-nav-container">
      <Grid
        className="navbar-container"
        container
        direction="row"
        xs={12}
        md={10}
        lg={7}
        spacing={2}
        justifyContent={isSmallScreen ? "space-between" : "center"}
        alignItems="center"
        style={{ paddingTop: "10px", paddingLeft: isSmallScreen ? "10px" : "50px", paddingRight: isSmallScreen ? "10px" : "50px", marginBottom: "40px" }}
      >
        {!isSmallScreen && 
          <>
            <Grid item xs={1}>
              <img src={Logo} width={isMedScreen ? "65%" : "85%"} />
            </Grid>
            <Grid className="divider" item xs={1}>
              <SvgIcon component={Divider} />
            </Grid> 
          </>       
        }
        <Grid item xs={2} sm={2}>
          <Link href="https://village.gitbook.io/village/" target="_blank" underline="none">
            <Typography variant="body2">Docs</Typography>
          </Link>
        </Grid>
        <Grid item xs={2} sm={2}>
          <Link href="https://village.gitbook.io/village/faqs/" target="_blank" underline="none">
            <Typography variant="body2">FAQs</Typography>
          </Link>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Link href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0" target="_blank" underline="none">
            <Typography variant="body2">Borrowing</Typography>
          </Link>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Link href="mailto:admin@impactvillage.io" target="_blank" underline="none">
            <Typography variant="body2">Contact</Typography>
          </Link>
        </Grid>
        {!isSmallScreen &&
          <>
            <Grid className="divider" item xs={1}>
              <SvgIcon component={Divider} />
            </Grid>
            <Grid item xs={1}>
              <SvgIcon component={Discord} className="navbar-discord" viewBox="0 0 26 32" style={{ width: "25px", height: "30px" }} />
            </Grid>
          </>
        }
      </Grid>
    </div>
  );
}
