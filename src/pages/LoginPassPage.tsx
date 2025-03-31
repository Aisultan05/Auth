import { useState } from "react";
import { Link } from "react-router-dom";
import FloatingField from "@/components/ui/FloatingField";

const LoginPassPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="absolute top-6 left-6 text-xl font-bold text-blue-800">QZAN KZ</div>

      <div className="w-full max-w-md space-y-6 text-center">
        <h2 className="text-2xl font-semibold text-black">Ввод пароля</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Email */}
          <FloatingField
            type="email"
            label="Адрес электронной почты"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Пароль */}
          <FloatingField
            type="password"
            label="Пароль*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Забыли пароль */}
          <div>
            <Link to="/forgot-password" className="text-blue-800 text-sm hover:underline">
              Забыли пароль?
            </Link>
          </div>

          {/* Кнопка "Продолжить" */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white rounded-md py-2 hover:bg-blue-900 transition"
          >
            Продолжить
          </button>
        </form>

        {/* Нет аккаунта? */}
        <div className="text-sm">
          У вас нет учетной записи?{" "}
          <Link to="/signup" className="text-blue-800 hover:underline">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPassPage;
