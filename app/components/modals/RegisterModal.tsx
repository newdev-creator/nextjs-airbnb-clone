"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "../hooks/useRegisterModal";

const RegisterModal = () => {
  const RegisterModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm≤FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (date) => {
    setIsLoading(true);

    axios.get('/api/register', data)
      .then(() => {
        RegisterModal.onClose();
      })
      .catch((error) => {
        console.log(error);
        // TODO: 1:09
      })
  }
  return <div></div>;
};

export default RegisterModal;
