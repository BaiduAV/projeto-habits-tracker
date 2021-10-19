import { Typography } from "@material-ui/core";
import { MyHabits, Button } from "./styles";

export const HabitsCard = ({ habit }) => {
  // Deletando Hábito
  // useEffect(() => {
  //   api
  //     .post("/habits/", habit, {
  //       headers: {
  //         Authorization: `Bearer: ${token}`,
  //       },
  //     })
  //     .then((response) => {})
  //     .catch((err) => console.log(err));
  // }, [habit]);

  return (
    <MyHabits>
      <Typography>{habit.title}</Typography>
      <Typography> {habit.category} </Typography>
      <Typography> {habit.frequency} </Typography>
      <Typography> {habit.how_much_achieved} </Typography>
      <Button>x</Button>
    </MyHabits>
  );
};
