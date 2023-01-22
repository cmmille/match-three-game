import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex flex-row">
      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
};
export default Root;
