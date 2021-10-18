import { Typography } from "@material-ui/core";
import { MyHabits } from "./styles";

export const HabitsCard = ({ habit }) => {
  return (
    <MyHabits>
      <Typography>{habit.title}</Typography>
      <Typography> {habit.category} </Typography>
      <Typography> {habit.frequency} </Typography>
      <Typography> {habit.how_much_achieved} </Typography>
    </MyHabits>
  );
};
