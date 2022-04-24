import "./Headline.scss";

import { Button, Grid, Link, SvgIcon, Typography, useMediaQuery } from "@material-ui/core";
import { ReactComponent as Farm } from "../../assets/farm.svg";

export const Headline = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMedScreen = useMediaQuery("(max-width: 1200px)");

  const mobileHeadline = () => {
    return (
      <Grid className="mobile-headline-container" container direction="column">
        <Grid item>
          <SvgIcon component={Farm} viewBox="0 0 677 451" style={{ width: "90%", height: "90%" }} />
        </Grid>
        <Grid item>
          <Typography variant="h5" color="primary" align="center" style={{ fontWeight: "600" }}>
            Impact Investing with Digital Assets 
          </Typography>
        </Grid>
        <Grid item style={{ paddingTop: "0px" }}>
          <Typography variant="body1" align="center" style={{ color: "#5E5E5E" }}>
            Leverage the blockchain to invest and earn or borrow and fund towards a better world using Village. 
          </Typography>
        </Grid>
        <Grid item className="mobile-headline-buttons">
          <Link href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0" target="_blank" underline="none">
            <Button id="apply" className={`headline-button ${isSmallScreen && `smaller`}`} variant="contained" color="primary">
              <Typography variant="body1">Apply to Borrow</Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item className="mobile-headline-buttons">
          <Link href="https://village.gitbook.io/village/" target="_blank" underline="none">
            <Button className={`headline-button ${isSmallScreen && `smaller`}`} variant="contained" color="secondary">
              <Typography variant="body1">Learn More</Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    );
  }

  const desktopHeadline = () => {
    return (
      <Grid className="headline-container" container direction="row" alignItems="center" xs={10} style={isMedScreen ? { justifyContent: "center" } : {}}>
        <Grid item md={12} lg={6} style={{ marginBottom: "50px" }}>
          <Typography variant="h4" color="primary" style={ isSmallScreen ? { fontSize: "70px" } : {}}>
            Village
          </Typography>
        </Grid>

        <Grid container direction="column" alignItems="center" md={12} lg={6}>
          <Grid className={`subtext ${isMedScreen && `smaller`}`} item style={{ marginBottom: "55px" }}>
              <Typography variant="h5" color="secondary" align="left">
                Novel Impact Investing with Digital Assets 
              </Typography>
          </Grid>

          <Grid container direction="row" justifyContent="center" xs={12}>
            <Grid item xs={12} sm={6}>
              <Link href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0" target="_blank" underline="none">
                <Button id="apply" className={`headline-button ${isSmallScreen && `smaller`}`} variant="contained" color="primary">
                  <Typography variant="body1">Apply to Borrow</Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link href="https://village.gitbook.io/village/" target="_blank" underline="none">
                <Button className={`headline-button ${isSmallScreen && `smaller`}`} variant="contained" color="secondary">
                  <Typography variant="body1">Learn More</Typography>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      {isSmallScreen ? mobileHeadline() : desktopHeadline()}
    </>
  );
}
