import CounterBox from "./CounterBox";
import { counterTitles } from "../../constants/constants";
function CounterSection() {
  return (
    <section className="counter-section">
      {counterTitles.map((c, index) => (
        <CounterBox key={index} title={c} />
      ))}
    </section>
  );
}
export default CounterSection;
