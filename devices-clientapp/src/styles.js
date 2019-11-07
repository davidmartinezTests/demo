import { makeStyles } from "@material-ui/core/styles";
import logo from "./logo.svg";

const useStyles = makeStyles(theme => ({
  app: {
    "& .app": {
      "&__header": {
        alignItems: "center",
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 center",
        display: "inline-block",
        flexDirection: "column",
        height: "150px",
        width: "250px",
        [theme.breakpoints.down("xs")]: {
          backgroundPosition: "center 10px",
          backgroundSize: "auto 70%",
          height: "50px"
        }
      },
      "&__nav": {
        display: "inline-block",
        height: "150px",
        textAlign: "right",
        verticalAlign: "top",
        width: "calc(100% - 260px)",

        "&--sort, &--filter, &--add": {
          boxSizing: "border-box",
          padding: "0 10px",
          verticalAlign: "top",
          width: "33%"
        },
        "&--sort, &--filter": {
          marginTop: "20px",
          "& .MuiInputBase-root": {
            fontSize: "12px"
          }
        },
        "&--filter .MuiChip-sizeSmall": {
          display: "block",
          fontSize: "10px",
          lineHeight: "25px",
          margin: "0 0 6px 0",
          width: "100%"
        },
        "&--add": {
          background: "#44546a",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
          height: "150px",
          "&:hover": {
            cursor: "pointer"
          },
          [theme.breakpoints.down("xs")]: {
            height: "50px",
            marginTop: "20px"
          }
        },
        [theme.breakpoints.down("xs")]: {
          height: "auto",
          width: "100%",
          "&--sort, &--filter, &--add": {
            width: "100%"
          }
        }
      }
    },
    padding: "0 20px",

    "& .devices": {
      marginTop: "50px",
      textAlign: "left",
      "&__titles": {
        fontWeight: "bold",
        padding: "0 0 10px 0"
      },
      "&__item": { margin: "0 0 2px 0", position: "relative" },
      "&__detail": {
        display: "inline-block",
        lineHeight: "25px",
        padding: "0 0 2px 0"
      },
      "&__edit": {
        display: "inline-block",
        position: "relative",
        right: "0px",
        top: "0"
      },
      "& .id": {
        width: "120px"
      },
      "& .name": { width: "180px" },
      "& .type": { width: "220px" },
      "& .capacity": { width: "100px" },

      "& .update, & .delete": {
        background: "#44546a",
        color: "white",
        textAlign: "center",
        width: "100px",
        "&:hover": {
          cursor: "pointer"
        }
      },
      [theme.breakpoints.down("xs")]: {
        "&__titles": { display: "none" },
        "&__item": { border: "1px solid #44546a", marginBottom: "20px" },
        "&__edit": { width: "100%" },
        "&__detail": {
          lineHeight: "40px",
          width: "100% !important",
          "&.update": {
            marginBottom: "4px"
          }
        }
      }
    }
  },
  modal: {
    width: "100vw",
    "& .outter": {
      background: "white",
      height: "100%",
      width: "100%"
    },
    "& .inner": {
      background: "white",
      height: "50vh",
      margin: "0 auto",
      width: "50vw"
    },
    "& .modal--close": {
      background: "#44546a",
      color: "white",
      fontWeight: "bold",
      height: "50px",
      top: "10px",
      right: "10px",
      width: "100px",
      position: "absolute",
      zIndex: "2000",
      "&:hover": {
        cursor: "pointer"
      }
    },
    "& h2": {
      margin: "0",
      padding: "100px 0 0 0"
    },
    "& button": {
      background: "#44546a",
      color: "white",
      top: "50px",
      width: "100%"
    },
    "& .MuiFormControl-root": {
      width: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      "& .inner": {
        background: "white",
        boxSizing: "border-box",
        height: "100%",
        margin: "0 auto",
        padding: "20px",
        width: "100%"
      },
      "& .modal--close": {
        width: "calc(100% - 20px)"
      }
    }
  }
}));

export default useStyles;
