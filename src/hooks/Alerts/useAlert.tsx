import React from "react";
// React Hot Toast
import toast from "react-hot-toast";
// Models
import { AlertModel } from "../../interfaces/Alerts/AlertModel";

export const useAlert = () => {
  const showMessage = ({ message, icon }: AlertModel) => {
    toast(message, {
      icon: icon,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#FFFFFF",
      },
    });
  };

  return { showMessage };
};
