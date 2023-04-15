import { useTransition, animated } from "@react-spring/web";

const data = [1, 2, 3];

function MyComponent({ data = [1, 2, 3] }) {
  const transitions = useTransition(
    data.map((item) => <h1 className="text-2xl text-white">{item}</h1>),
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 1 },
    }
  );

  return transitions((style, item) => (
    <animated.div style={style}>{item}</animated.div>
  ));
}

export default MyComponent;
