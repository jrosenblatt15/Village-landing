import { createTheme } from '@material-ui/core/';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#252C6A",
    },
    secondary: {
      main: "#003261",
    },
  },
  typography: {
    h4: {
      fontFamily: "pragmatica-extended",
      fontSize: "140px",
      fontWeight: "bold",
      lineHeight: "140px",
    },
    h5: {
      fontFamily: "fantabular-sans-mvb",
      fontSize: "38px",
      fontWeight: "normal",
      lineHeight: "44px",
    },
    h6: {
      fontFamily: "pragmatica",
      fontSize: "30px",
      fontWeight: "normal",
      lineHeight: "41px",
    },
    body1: {
      fontFamily: "pragmatica",
      fontSize: "24px",
      fontWeight: "normal",
      lineHeight: "28px",
    },
    body2: {
      fontFamily: "pragmatica",
      fontSize: "19px",
      fontWeight: "normal",
      lineHeight: "27px",
    }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: "white",
        backgroundColor: "#EEC15F",
        margin: "0.5rem",
        textTransform: "none",
        fontWeight: "bold",
        borderRadius: "25px",
        boxShadow: "0px 8px 0px #EB882C",
        width: "16vw",
        minWidth: "250px",
        height: "55px",
        "&:hover": {
          backgroundColor: "#94A3B8",
          color: "white",
        },
      },
      outlinedPrimary: {
        color: "#016BFF",
        backgroundColor: "transparent",
        borderColor: "#016BFF",
        margin: "0.5rem",
        textTransform: "none",
        fontWeight: "bold",
        "&:hover": {
          color: "#94A3B8",
          backgroundColor: "transparent",
          borderColor: "#94A3B8",
        },
      },
      containedSecondary: {
        color: "white",
        backgroundColor: "#9069FF",
        margin: "0.5rem",
        textTransform: "none",
        fontWeight: "bold",
        borderRadius: "25px",
        border: "2px solid #673FDA",
        boxShadow: "0px 8px 0px #673FDA",
        width: "16vw",
        minWidth: "250px",
        height: "55px",
        "&:hover": {
          backgroundColor: "#94A3B8",
          color: "white",
        },
      }
    },
    MuiLink: {
      root: {
        color: "#64748B",
        fill: "#64748B",
        textDecoration: "none",
        "&:hover": {
          color: "#94A3B8",
          fill: "#94A3B8",
          textDecoration: "none",
        },
      }
    },
  },
});