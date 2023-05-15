import { Badge, Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  isInTest: boolean;
  imgSrc: string;
  title: string;
  selected: boolean;
  height: string;
  width: string;
  onClick: () => void;
  marginRight?: string;
}

function FoodOptionsItem({
  isInTest,
  imgSrc,
  title,
  selected,
  height,
  width,
  onClick,
  marginRight,
}: Props) {

  const [clicked, setClicked] = useState(true);
  
  useEffect(() => {setClicked(true)}, [isInTest]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginRight,
        minWidth: "9rem",
      }}
    >
      <Badge badgeContent={1} color="error" invisible={clicked || !isInTest}>
      <Button
        style={{
          width,
          height,
          border: `2px solid ${selected ? "#FFE600" : "#00109B"}`,
          boxShadow: "0 0 10px 0",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
        onClick={() => {
          onClick();
          if(clicked){
            setClicked(false);
          } else{
            setClicked(true);
          }
        }}
      >
        <img
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          src={imgSrc}
        />
      </Button>
      </Badge>

      <Typography variant="h6" marginY="1rem">
        {title}
      </Typography>
    </Box >
  );
}

export default FoodOptionsItem;
