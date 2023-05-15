import React, { useState } from 'react';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

// Takes an accepts two JSX elements, one item to hover and one item to display in the hover.

interface Props {
  button: JSX.Element;
  htmlFrag: JSX.Element;
}

// Based on tooltip example in MUI docs: https://mui.com/material-ui/react-tooltip/
const styledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    border: '1px solid #dadde9',
  },
});

function HTMLTooltip({ button, htmlFrag }: Props) {


  return (
    <div>
      <Tooltip title={htmlFrag} arrow>
        {button}
      </Tooltip>
    </div>
  )
}

export default HTMLTooltip;