import { useEffect, useState } from "react";
import { theme } from "../../styles/Theme.style";
import Heading from "../Heading";
import { TimerCardWrapper } from "./TimerCard.style";

const TimerCard = (props: any) => {
  const { initialMinute = 0, initialSeconds = 0 } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds !== 0 && seconds % 59 === 0) {
        setMinutes(minutes + 1);
        setSeconds(0);
      } else {
        setSeconds(seconds + 1);
      }
    }, 1000);
    return () => clearInterval(myInterval);
  });

  return (
    <>
      <TimerCardWrapper>
        <Heading
          size={"M"}
          color={theme.colors.charcoal}
          className="label"
          children="Time"
        />
        <Heading size={"M"} color={theme.colors.charcoal}>
          {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
        </Heading>
      </TimerCardWrapper>
    </>
  );
};

export default TimerCard;