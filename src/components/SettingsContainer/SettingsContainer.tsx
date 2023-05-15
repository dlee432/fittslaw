import { Button, Box, Typography } from "@mui/material";
import MenuSlider from "../../components/MenuSlider/MenuSlider";
import { Action } from "../../util/Types/GeneralTypes";
import { FoodOption } from "../../util/Types/ApiTypes";

interface Props {
  menu: number;
  widths: number[];
  heights: number[];
  xSpacings: number[];
  ySpacings: number[];
  setWidths: Array<(value: number) => void>;
  setHeights: Array<(value: number) => void>;
  setXSpacings: Array<(value: number) => void>;
  setYSpacings: Array<(value: number) => void>;
  scenarioNumber: number;
  attemptNumber: number;
  isInTest: boolean;
  onTestClick: () => void;
  currentAttemptClicks: number;
  currentAttemptErrors: number;
  timeElapsedFormatted: string;
  actions: Action[];
  actionIndex: number;
}

const menu1: FoodOption[] = [
  {
    imgSrc: require("../../images/cheeseburger.jpg"),
    title: "Cheeseburger",
    selected: false,
  },
  {
    imgSrc: require("../../images/burger.jpg"),
    title: "Quarter Pounder",
    selected: false,
  },
  {
    imgSrc: require("../../images/chickenburger.jpg"),
    title: "Chicken Burger",
    selected: false,
  },
  {
    imgSrc: require("../../images/fishburger.jpg"),
    title: "Fish Burger",
    selected: false,
  },
];

const menu2: FoodOption[] = [
  {
    imgSrc: require("../../images/fries.jpg"),
    title: "Fries",
    selected: false,
  },
  {
    imgSrc: require("../../images/onionrings.jfif"),
    title: "Onion Rings",
    selected: false,
  },
  {
    imgSrc: require("../../images/mozzasticks.jfif"),
    title: "Mozzarella Sticks",
    selected: false,
  },
  {
    imgSrc: require("../../images/chickenstrips.jfif"),
    title: "Chicken Strips",
    selected: false,
  },
  {
    imgSrc: require("../../images/chickennuggets.jpg"),
    title: "Chicken Nuggets",
    selected: false,
  },
  {
    imgSrc: require("../../images/chickenwings.jpg"),
    title: "Chicken Wings",
    selected: false,
  },
];

const menu3: FoodOption[] = [
  {
    imgSrc: require("../../images/softserve.jpg"),
    title: "Soft Serve",
    selected: false,
  },
  {
    imgSrc: require("../../images/applepie.jpg"),
    title: "Apple Pie",
    selected: false,
  },
  {
    imgSrc: require("../../images/sundae.jpg"),
    title: "Sundae",
    selected: false,
  },
];
const foodOptions = [menu1, menu2, menu3];
const menuNames = ["Burgers", "Sides", "Desserts"];

function SettingsContainer({
  menu,
  widths,
  heights,
  xSpacings,
  ySpacings,
  setWidths,
  setHeights,
  setXSpacings,
  setYSpacings,
  scenarioNumber,
  attemptNumber,
  isInTest,
  onTestClick,
  currentAttemptClicks,
  currentAttemptErrors,
  timeElapsedFormatted,
  actions,
  actionIndex,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#d4edfc",
        paddingTop: "2rem",
        paddingX: "1rem",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <Box display="flex" flexDirection="row">
        <Typography variant="h2">Settings</Typography>
        {/* <HTMLTooltip
          button={<HelpIcon/>}
          htmlFrag={
            <div>
              <h1>Testing the hover functionality</h1>
              Switching over from custom hover to MUI tooltips wrapper for a
              cleaner look with less styling
            </div>
          }
        /> */}
      </Box>
      {!isInTest ? (
        <>
          <Typography variant="subtitle1" marginTop="0.25rem">
            Selected component: Menu {menu} item
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
              marginTop: "4rem",
              marginBottom: "auto",
            }}
          >
            <Typography variant="h3" marginBottom="1rem">
              Component Properties
            </Typography>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <MenuSlider
                min={0}
                max={100}
                value={widths[menu - 1]}
                onChange={(width) => {
                  setWidths[menu - 1](width);
                }}
                menuText="Width"
              />
              <MenuSlider
                min={0}
                max={100}
                value={heights[menu - 1]}
                onChange={(height) => setHeights[menu - 1](height)}
                menuText="Height"
              />
              <MenuSlider
                min={0}
                max={100}
                value={xSpacings[menu - 1]}
                onChange={(xSpacing) => setXSpacings[menu - 1](xSpacing)}
                menuText="X Spacing"
              />
              <MenuSlider
                min={0}
                max={100}
                value={ySpacings[menu - 1]}
                onChange={(ySpacing) => setYSpacings[menu - 1](ySpacing)}
                menuText="Y Spacing"
              />
            </Box>
          </Box>
        </>
      ) : (
        <Box display="flex" flexDirection="column" marginBottom="auto">
          <Box marginY="8vh">
            <Typography variant="h3">Scenario: {scenarioNumber}/3</Typography>
            <Typography variant="h3">Attempt: {attemptNumber}/3</Typography>
            <Typography variant="h3">
              Number of clicks: {currentAttemptClicks}
            </Typography>
            <Typography variant="h3">Errors: {currentAttemptErrors}</Typography>
            <Typography variant="h3">
              Time elapsed: {timeElapsedFormatted}
            </Typography>
          </Box>

          <Box>
            <Typography variant="h3" paddingBottom="1rem">
              Please complete the following scenario:
            </Typography>
            <Box
              sx={{
                borderTop: "1px solid #ccc",
                borderBottom: "1px solid #ccc",
                paddingY: "0.5rem",
              }}
            >
              {actions.map((action, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: actionIndex > index ? "green" : "red",
                  }}
                >
                  • Step {index + 1}. In{" "}
                  {menuNames[action.menuItemIndex - 1]} menu and select a{" "}
                  {
                    foodOptions[action.menuItemIndex - 1][
                      action.foodOptionIndex - 1
                    ].title
                  }
                  .
                </Typography>
              ))}
              <Typography sx={{ color: "red" }}>
                • Then click checkout.
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
      <Button
        variant="contained"
        onClick={onTestClick}
        sx={{
          marginY: "1rem",
        }}
      >
        {isInTest ? "END TEST" : "START TEST"}
      </Button>
    </Box>
  );
}

export default SettingsContainer;
