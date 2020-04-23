import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",

    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(30)
    },

    chatWindow: {
      width: "100%",
      height: "100%"
    },
    chatBox: {
      width: "5%",
      alignContent: "flex-end"
    },
    button: {
      width: "5%",
      margin: "10px",
      alignContent: "flex-end"
    }
  }
}));

//a comment requires a user_id and an event_id
export default function chatWindow2() {
  const classes = useStyles();

  const [chat, changeTextValue] = React.useState({
    textValue: "",
    messages: [{ from: "Brianna", msg: " hello" }]
  });

  const handleMessageSend = () => {
    chat.messages.push({ from: "Sieun", msg: chat.textValue });

    changeTextValue({ ...chat, textValue: "" });
  };

  return (
    <div style={{ width: "50%" }}>
      <div className={classes.root}>
        <div className={classes.chatWindow}>
          {chat.messages.map((chat, i) => (
            <div className={classes.flex} key={i}>
              <Chip
                label={chat.from}
                className={classes.chip}
                icon={<FaceIcon />}
              />
              <Typography variant="body2" color="textSecondary" component="p">
                {chat.msg}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.flex} style={{ width: "100%" }}>
        <TextField
          className={classes.chatBox}
          label="Say anything :)"
          multiline
          rowsMax={4}
          value={chat.textValue}
          onChange={e => {
            changeTextValue({ ...chat, textValue: e.target.value });
          }}
        />
        <br></br>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleMessageSend()}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
