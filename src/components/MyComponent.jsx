import { BorderBeam } from "./ui/border-beam";

const MyComponent = () => {
  return (
    <div className="h-screen w-screen">
      <BorderBeam size={20} duration={20} colorFrom="#00bcd4" colorTo="#ff4081" anchor={75}>
        <h2 className="text-center text-white text-4xl font-bold">
          This is my text inside the border!
        </h2>
      </BorderBeam>
    </div>
  );
};

export default MyComponent;
