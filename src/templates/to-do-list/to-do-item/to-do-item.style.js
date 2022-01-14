import { makeStyles } from "@mui/styles";

export const useToDoItemClasses = makeStyles({
  container: {
    marginTop: "10px",
  },
  content: {
    display: "flex",
    flexDirection: "row",
  },
  typo: {
    width: "100%",
    paddingLeft: "20px",
    paddingTop: "10px",
  },
  typoIsCompleted: {
    width: "100%",
    paddingLeft: "20px",
    paddingTop: "10px",
    textDecoration: "line-through",
  },
});
