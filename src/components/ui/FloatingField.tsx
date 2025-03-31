import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface FloatingFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingField = ({ label, type = "text", ...props }: FloatingFieldProps) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const showFloating = focused || !!props.value;

  return (
    <div className="relative w-full">
      <input
        {...props}
        type={isPassword && showPassword ? "text" : type}
        placeholder=" "
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        className="peer w-full border border-blue-800 rounded-md px-4 pt-5 pb-2 text-sm text-black outline-none focus:ring-2 focus:ring-blue-300 transition-all"
      />
      <label
        className={`absolute left-4 transition-all px-1 bg-white pointer-events-none
          ${showFloating ? "-top-2.5 text-xs text-blue-800" : "top-2.5 text-sm text-gray-400"}
        `}
      >
        {label}
      </label>

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-2.5 text-gray-500"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
};

export default FloatingField;
