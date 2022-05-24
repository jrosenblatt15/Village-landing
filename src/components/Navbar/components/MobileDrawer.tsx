import "./MobileDrawer.scss";

import { Drawer, Grid, IconButton, Link, SvgIcon, Typography } from "@material-ui/core";
import { Link as InternalLink } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as MenuIcon } from "../../../assets/menudrawer.svg";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Drawer
        className="mobile-drawer"
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Link href="https://village.gitbook.io/village/" target="_blank" underline="none" onClick={() => setIsOpen(false)}>
              <SvgIcon component={ArticleOutlinedIcon} style={{ width: "28px", height: "28px", paddingRight: "8px" }} />
              <Typography variant="body1">Docs</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://village.gitbook.io/village/faqs/" target="_blank" underline="none" onClick={() => setIsOpen(false)}>
              <SvgIcon component={LiveHelpOutlinedIcon} style={{ width: "28px", height: "28px", paddingRight: "8px" }} />
              <Typography variant="body1">FAQs</Typography>
            </Link>
          </Grid>
          <Grid item>
            <InternalLink className="MuiLink-root" to="/borrow" onClick={() => setIsOpen(false)}>
              <SvgIcon component={AccountBalanceOutlinedIcon} style={{ width: "28px", height: "28px", paddingRight: "8px" }} />
              <Typography variant="body1">Borrowing</Typography>
            </InternalLink>
          </Grid>
          <Grid item>
            <Link href="mailto:admin@impactvillage.io" target="_blank" underline="none" onClick={() => setIsOpen(false)}>
              <SvgIcon component={PersonOutlineOutlinedIcon} style={{ width: "28px", height: "28px", paddingRight: "8px" }} />
              <Typography variant="body1">Contact</Typography>
            </Link>
          </Grid>
        </Grid>
      </Drawer>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <SvgIcon component={MenuIcon} viewBox="0 0 20 20" style={{ width: "30px", height: "30px" }} />
      </IconButton>
    </>
  )
}
