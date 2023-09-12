import HomeScreen from "../view/home/home";
import SupportScreen from "../view/support/support";

const pagesData = [
  {
    path: "",
    element: <HomeScreen />,
    title: "home",
  },
  {
    path: "support",
    element: <SupportScreen />,
    title: "support",
  },
];

export default pagesData;
