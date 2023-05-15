import React from 'react';
import { styled } from "@mui/material/styles";
import { Button, buttonClasses } from "@mui/material";
import theme from "../../util/Theme/Theme";

const CustomStyledButton = styled(Button)(({theme}) => ({
  [`&.${buttonClasses.root}`]: {
    margin: "10px 20px",
    whiteSpace: "nowrap",
    minWidth: "max-content",
  },
}));

interface Props {
  size?: "small" | "medium" | "large";
  onClick: () => void;
  children: String;
  selected?: boolean;
  style?: React.CSSProperties;
}

function CustomButton({
                        size = "large",
                        onClick,
                        children,
                        selected,
                        style,
                      }: Props) {
  // Define the button size.
  const height = size === "small" ? 32 : size === "medium" ? 48 : 64;
  const width = size === "small" ? 96 : size === "medium" ? 128 : 256;
  const fontSize = size === "small" ? 12 : size === "medium" ? 16 : 20;

  return (
    <CustomStyledButton
      sx={{
        ...style,
        [`&.${buttonClasses.root}`]: {
          backgroundColor: selected && theme.palette.primary.main,
          color: selected && theme.palette.primary.contrastText,
          height,
          width,
          fontSize,
        },
      }}
      variant= "outlined"
      onClick={onClick}
    >
      {children}
    </CustomStyledButton>
  );
}

export default CustomButton;