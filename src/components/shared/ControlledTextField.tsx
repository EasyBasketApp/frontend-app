import { IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

type ControlledTextFieldProps<T extends FieldValues> = {
  name: Path<T>
  control: Control<T>
  label: string
  type?: string
  error?: boolean
  helperText?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  onEndIconClick?: () => void
}

export default function ControlledTextField<T extends FieldValues>({
  name,
  control,
  label,
  type = 'text',
  error,
  helperText,
  startIcon,
  endIcon,
  onEndIconClick,
}: ControlledTextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          type={type}
          error={error}
          helperText={helperText}
          margin='normal'
          slotProps={{
            input: {
              startAdornment: startIcon && <InputAdornment position='start'>{startIcon}</InputAdornment>,
              endAdornment: endIcon && (
                <InputAdornment position='end'>
                  <IconButton aria-label='toggle visibility' onClick={onEndIconClick} edge='end'>
                    {endIcon}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      )}
    />
  )
}
