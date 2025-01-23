import Day from "./components/Day"
import WeekControl from "./components/WeekControl";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div>
      <Counter />
      <WeekControl />
      <Day />
    </div>
  );
}
