import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Email,
  Lock,
  Login as LoginIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  CardContent,
  CircularProgress,
  Link,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { z } from "zod";
import ControlledTextField from "../../components/shared/ControlledTextField";
import FormContainer from "../../components/shared/FormContainer";
import { useLogin } from "../../hooks/api/authentification";
import { APIErrorBase } from "../../types/api";

// Validation schema
const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const loginMutation = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Form submitted with data:", data);
    loginMutation.mutate(data, {
      onSuccess: () => {
        console.log("Login mutation succeeded, navigating to dashboard");
        navigate("/dashboard");
      },
      onError: (error: APIErrorBase) => {
        let errorMessage = "Login failed. Please check your credentials.";

        if (error.response.data.message) {
          errorMessage = error.response.data.message;
        } else if (error.message) {
          errorMessage = error.message;
        }

        setError("root", {
          type: "server",
          message: errorMessage,
        });
      },
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormContainer
      title="Welcome Back"
      subtitle="Sign in to your BasketEasy account"
      icon={<LoginIcon sx={{ fontSize: 40, mb: 1 }} />}
    >
      <CardContent sx={{ p: 4 }}>
        {errors.root && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errors.root.message}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <ControlledTextField
            name="email"
            control={control}
            label="Email"
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            startIcon={<Email color="action" />}
          />

          <ControlledTextField
            name="password"
            control={control}
            label="Password"
            type={showPassword ? "text" : "password"}
            error={!!errors.password}
            helperText={errors.password?.message}
            startIcon={<Lock color="action" />}
            endIcon={showPassword ? <VisibilityOff /> : <Visibility />}
            onEndIconClick={togglePasswordVisibility}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Link
              component={RouterLink}
              to="/forgot-password"
              variant="body2"
              sx={{ textDecoration: "none" }}
            >
              Forgot password?
            </Link>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={loginMutation.isPending}
            sx={{ mt: 3, mb: 2, py: 1.5 }}
            startIcon={
              loginMutation.isPending ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <LoginIcon />
              )
            }
          >
            {loginMutation.isPending ? "Signing In..." : "Sign In"}
          </Button>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Don&apos;t have an account?{" "}
              <Link
                component={RouterLink}
                to="/register"
                variant="body2"
                sx={{ textDecoration: "none", fontWeight: 500 }}
              >
                Sign up here
              </Link>
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </FormContainer>
  );
}
