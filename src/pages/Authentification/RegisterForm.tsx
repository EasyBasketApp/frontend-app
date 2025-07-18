import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Email,
  Lock,
  Person,
  PersonAdd,
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
import { useRegister } from "../../hooks/api/authentification";
import { APIErrorBase } from "../../types/api";

const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be less than 20 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ),
    email: z
      .string()
      .email("Please enter a valid email address")
      .min(1, "Email is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one lowercase letter, one uppercase letter, and one number"
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const registerMutation = useRegister();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    const { confirmPassword: _, ...registerData } = data;

    registerMutation.mutate(registerData, {
      onSuccess: () => {
        navigate("/dashboard");
      },
      onError: (error: APIErrorBase) => {
        const errorMessage =
          error.response.data.message ||
          "Registration failed. Please try again.";

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

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <FormContainer
      title="Join BasketEasy"
      subtitle="Create your account to get started"
      icon={<PersonAdd sx={{ fontSize: 40, mb: 1 }} />}
    >
      <CardContent sx={{ p: 4 }}>
        {errors.root && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errors.root.message}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <ControlledTextField
            name="username"
            control={control}
            label="Username"
            error={!!errors.username}
            helperText={errors.username?.message}
            startIcon={<Person color="action" />}
          />

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

          <ControlledTextField
            name="confirmPassword"
            control={control}
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            startIcon={<Lock color="action" />}
            endIcon={showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            onEndIconClick={toggleConfirmPasswordVisibility}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={registerMutation.isPending}
            sx={{ mt: 3, mb: 2, py: 1.5 }}
            startIcon={
              registerMutation.isPending ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <PersonAdd />
              )
            }
          >
            {registerMutation.isPending
              ? "Creating Account..."
              : "Create Account"}
          </Button>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Already have an account?{" "}
              <Link
                component={RouterLink}
                to="/login"
                variant="body2"
                sx={{ textDecoration: "none", fontWeight: 500 }}
              >
                Sign in here
              </Link>
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </FormContainer>
  );
}
