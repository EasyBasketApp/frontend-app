import React from "react";
import { Alert, AlertTitle, Box, Button } from "@mui/material";
import { Refresh } from "@mui/icons-material";

interface ErrorBoundaryProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

const ErrorDisplay: React.FC<ErrorBoundaryProps> = ({
  title = "Something went wrong",
  message = "An error occurred while loading the data. Please try again.",
  onRetry,
}) => {
  return (
    <Box sx={{ p: 3 }}>
      <Alert severity="error">
        <AlertTitle>{title}</AlertTitle>
        {message}
        {onRetry && (
          <Box sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<Refresh />}
              onClick={onRetry}
            >
              Try Again
            </Button>
          </Box>
        )}
      </Alert>
    </Box>
  );
};

export default ErrorDisplay;
