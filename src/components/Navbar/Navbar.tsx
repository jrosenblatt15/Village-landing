import "./Navbar.scss";

import { Grid, Link, SvgIcon, Typography } from "@material-ui/core";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Discord } from "../../assets/discord.svg";
import { ReactComponent as Divider } from "../../assets/verticaldivider.svg";

export const Navbar = () => {
  return (
    <div className="outer-nav-container">
      <Grid
        className="navbar-container"
        container
        direction="row"
        xs={6}
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        style={{ paddingTop: "10px", paddingLeft: "40px", paddingRight: "40px", marginBottom: "40px" }}
      >
        <Grid item>
          <SvgIcon
            component={Logo}
            className="navbar-logo"
            viewBox="0 0 62 42"
            style={{ width: "62px", height: "42px" }}
          />
        </Grid>
        <Grid item>
          <SvgIcon component={Divider} />
        </Grid>
        <Grid item>
          <Link href="https://village.gitbook.io/village/" target="_blank" underline="none">
            <Typography variant="body2">Docs</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://village.gitbook.io/village/faqs/" target="_blank" underline="none">
            <Typography variant="body2">FAQs</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0" target="_blank" underline="none">
            <Typography variant="body2">Borrowing</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="mailto:admin@impactvillage.io" target="_blank" underline="none">
            <Typography variant="body2">Contact</Typography>
          </Link>
        </Grid>
        <Grid item>
          <SvgIcon component={Divider} />
        </Grid>
        <Grid item>
          <SvgIcon component={Discord} className="navbar-discord" viewBox="0 0 26 32" style={{ width: "26px", height: "32px" }} />
        </Grid>
      </Grid>
    </div>
  );
}
