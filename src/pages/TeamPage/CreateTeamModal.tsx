import React, { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  IconButton,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material'
import { Close, Group } from '@mui/icons-material'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useCreateTeam } from '../../hooks/api/teams'
import { CreateTeamPayload } from '../../types/api/teams'
import { useNotification } from '../../contexts/NotificationContext'
import ControlledTextField from '../../components/shared/ControlledTextField'

const createTeamSchema = z.object({
  name: z
    .string()
    .min(1, 'Team name is required')
    .min(2, 'Team name must be at least 2 characters')
    .max(50, 'Team name must be less than 50 characters'),
  club: z
    .string()
    .min(1, 'Club name is required')
    .min(2, 'Club name must be at least 2 characters')
    .max(50, 'Club name must be less than 50 characters'),
  color: z.string().optional(),
  description: z.string().max(200, 'Description must be less than 200 characters').optional(),
  imageUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
})

type CreateTeamFormData = z.infer<typeof createTeamSchema>

interface CreateTeamModalProps {
  open: boolean
  onClose: () => void
}

const CreateTeamModal: React.FC<CreateTeamModalProps> = ({ open, onClose }) => {
  const [submitError, setSubmitError] = useState<string | null>(null)
  const { showSuccess, showError } = useNotification()
  const createTeamMutation = useCreateTeam()

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<CreateTeamFormData>({
    resolver: zodResolver(createTeamSchema),
    defaultValues: {
      name: '',
      club: '',
      color: '',
      description: '',
      imageUrl: '',
    },
    mode: 'onChange',
  })

  const handleClose = () => {
    reset()
    setSubmitError(null)
    onClose()
  }

  const onSubmit = async (data: CreateTeamFormData) => {
    try {
      setSubmitError(null)

      // Filter out empty strings for optional fields
      const payload: CreateTeamPayload = {
        name: data.name,
        club: data.club,
        ...(data.color && { color: data.color }),
        ...(data.description && { description: data.description }),
        ...(data.imageUrl && { imageUrl: data.imageUrl }),
      }

      await createTeamMutation.mutateAsync(payload)
      showSuccess('Team created successfully!')
      handleClose()
    } catch (error) {
      let errorMessage = 'Failed to create team. Please try again.'

      if (error && typeof error === 'object' && 'response' in error) {
        const response = (error as { response?: { data?: { message?: string } } }).response
        if (response?.data?.message) {
          errorMessage = response.data.message
        }
      }

      setSubmitError(errorMessage)
      showError(errorMessage)
    }
  }

  const colorOptions = [
    { label: 'Purple', value: '#667eea' },
    { label: 'Pink', value: '#f093fb' },
    { label: 'Green', value: '#43e97b' },
    { label: 'Blue', value: '#74b9ff' },
    { label: 'Orange', value: '#fdcb6e' },
    { label: 'Red', value: '#ff7675' },
  ]

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth='sm'
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 1,
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        },
      }}
    >
      <DialogTitle sx={{ pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Group sx={{ color: 'primary.main' }} />
            <Typography variant='h6' component='div'>
              Create New Team
            </Typography>
          </Box>
          <IconButton onClick={handleClose} size='small'>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent sx={{ pt: 2 }}>
          {submitError && (
            <Alert severity='error' sx={{ mb: 2 }}>
              {submitError}
            </Alert>
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <ControlledTextField
              name='name'
              control={control}
              label='Team Name'
              error={!!errors.name}
              helperText={errors.name?.message}
              placeholder='e.g., Lakers, Warriors, Celtics'
            />

            <ControlledTextField
              name='club'
              control={control}
              label='Club Name'
              error={!!errors.club}
              helperText={errors.club?.message}
              placeholder='e.g., Los Angeles Basketball Club'
            />

            <Controller
              name='color'
              control={control}
              render={({ field }) => (
                <Box>
                  <TextField
                    {...field}
                    label='Team Color (Optional)'
                    fullWidth
                    error={!!errors.color}
                    helperText={errors.color?.message || 'Enter a hex color code (e.g., #667eea)'}
                    placeholder='#667eea'
                  />
                  <Box sx={{ display: 'flex', gap: 1, mt: 2, flexWrap: 'wrap' }}>
                    {colorOptions.map(color => (
                      <Box
                        key={color.value}
                        onClick={() => field.onChange(color.value)}
                        sx={{
                          width: 32,
                          height: 32,
                          backgroundColor: color.value,
                          borderRadius: 1,
                          cursor: 'pointer',
                          border: field.value === color.value ? '3px solid #000' : '1px solid #ddd',
                          transition: 'all 0.2s',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                        title={color.label}
                      />
                    ))}
                  </Box>
                </Box>
              )}
            />

            <ControlledTextField
              name='description'
              control={control}
              label='Description (Optional)'
              multiline
              rows={3}
              error={!!errors.description}
              helperText={errors.description?.message}
              placeholder='Brief description of your team...'
            />

            <ControlledTextField
              name='imageUrl'
              control={control}
              label='Team Logo URL (Optional)'
              error={!!errors.imageUrl}
              helperText={errors.imageUrl?.message}
              placeholder='https://example.com/team-logo.png'
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 3, pt: 2 }}>
          <Button onClick={handleClose} variant='outlined' disabled={createTeamMutation.isPending}>
            Cancel
          </Button>
          <Button
            type='submit'
            variant='contained'
            disabled={!isValid || createTeamMutation.isPending}
            startIcon={createTeamMutation.isPending ? <CircularProgress size={16} /> : undefined}
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)',
              },
            }}
          >
            {createTeamMutation.isPending ? 'Creating...' : 'Create Team'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default CreateTeamModal
