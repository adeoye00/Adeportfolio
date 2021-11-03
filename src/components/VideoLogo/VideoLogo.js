import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import VideoMask from "../../assets/images/VideoMask";

const VideoLogo = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper} {...props}>
            <VideoMask className={classes.mask} />
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        overflow:"hidden",
        position: "relative",
        width: "300px",
        height: "68px",
        [theme.breakpoints.down("xs")]: {
            width: "230px",
            height: "53px",
        },
    },
    mask: {
        zIndex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "400px",
        [theme.breakpoints.down("xs")]: {
            width: "230px",
            height: "52px",
        },
    },
}));

export default VideoLogo;
