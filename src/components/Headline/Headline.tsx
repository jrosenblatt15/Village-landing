import "./Headline.scss";

import { Button, Grid, Link, SvgIcon, Typography, useMediaQuery } from "@material-ui/core";
import { ReactComponent as Farm } from "../../assets/farm.svg";

export const Headline = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMedScreen = useMediaQuery("(max-width: 1200px)");

  const mobileHeadline = () => {
    return (
      <Grid className="mobile-headline-container" container direction="column">
        <Grid className="mobile-headline-image" item>
          <SvgIcon component={Farm} viewBox="0 0 677 451" style={{ width: "90%", height: "90%" }} />
        </Grid>
        <Grid item>
          <Typography variant="h5" color="primary" align="center" style={{ fontWeight: "600" }}>
            Support Real World Borrowers With Crypto
          </Typography>
        </Grid>
        <Grid item style={{ paddingTop: "0px" }}>
          <Typography variant="body1" align="center" style={{ color: "#5E5E5E" }}>
            We use decentralized finance and blockchain to enable impactful debt finance solutions in emerging and frontier markets.
          </Typography>
        </Grid>
        <Grid item className="mobile-headline-buttons">
          <Link href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0" target="_blank" underline="none">
            <Button id="apply" className={`headline-button ${isSmallScreen && `smaller`}`} variant="contained" color="primary">
              <Typography variant="body1">Credit Application</Typography>
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
      <Grid className="headline-container" container direction="column" alignItems="center" justifyContent="center" xs={11}>
        <Grid item md={12} lg={8} style={{ marginBottom: "50px" }}>
          <Typography variant="h5" color="primary" style={{ fontFamily: "pragmatica", fontSize: "70px", lineHeight: "80.5px" }}>
            Support Real World Borrowers With Crypto
          </Typography>
        </Grid>

        <Grid container direction="column" alignItems="center" md={12} lg={8}>
          <Grid className={`subtext ${isMedScreen && `smaller`}`} item style={{ marginBottom: "55px", fontFamily: "fantabular-sans-mvb" }}>
              <Typography className="white-text" variant="h6" align="center">
                We use decentralized finance and blockchain to enable impactful debt finance solutions in emerging and frontier markets.
              </Typography>
          </Grid>

          <Grid container direction="row" justifyContent="center" xs={12}>
            <Grid item xs={12} sm={6}>
              <Link href="https://impactvillage.us20.list-manage.com/subscribe?u=12cf845d2866bf06908250683&id=7a6b4425d0" target="_blank" underline="none">
                <Button id="apply" className={`headline-button ${isSmallScreen && `smaller`}`} variant="contained" color="primary">
                  <Typography variant="body1">Credit Application</Typography>
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
