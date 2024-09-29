import React from 'react'
import { Button } from '@mui/material'

export type ButtonProps = {
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  'aria-label'?: string
  disabled?: boolean
}

export type Button = React.FC<ButtonProps>

export const MuiButton: Button = props => (
  <Button className="mui-button" variant="contained" {...props} />
)
export const RoundButton: Button = props => {
  return <button className="round-button" type="button" {...props} />
}
