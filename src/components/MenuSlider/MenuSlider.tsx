import { Slider, Typography } from "@mui/material";

interface Props {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  menuText: string;
}

function MenuSlider({ min, max, value, onChange, menuText }: Props) {
  const handleChange = (e: Event, newValue: number | number[]) => {
    onChange(newValue as number);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "1rem 0px",
      }}
    >
      <Typography variant="caption" minWidth="6rem">
        {menuText}
      </Typography>
      <Slider value={value} onChange={handleChange} min={min} max={max} />
    </div>
  );
}

export default MenuSlider;
