import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { useState } from 'react'

interface props {
  open: boolean,
  title: string,
  content: JSX.Element,
  onClose: () => void,
}

export const PopUpDialog = ({title, content, open, onClose}: props) => {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby='dialog-title'
            aria-describedby='dialog-description'>
      <DialogTitle id='dialog-title' variant='h2'>{title}</DialogTitle>
      <DialogContent id='dialog-description'>
        <DialogContent>{content}</DialogContent>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}> Close </Button>
      </DialogActions>
    </Dialog>
  )
}