import { useState } from "react";
import { Link } from "react-router-dom";
import FloatingField from "@/components/ui/FloatingField";


const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }

    if (!accepted) {
      alert("Вы должны принять условия.");
      return;
    }

    console.log({ email, password, code });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="absolute top-6 left-6 text-xl font-bold text-blue-800">QZAN KZ</div>

      <div className="w-full max-w-md space-y-6 text-center">
        <h2 className="text-2xl font-semibold text-black">Создать учетную запись</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <FloatingField
            type="email"
            label="Адрес электронной почты"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <FloatingField
            label="Пароль*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <FloatingField
            label="Подтвердить Пароль*"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="# Код"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full border border-blue-800 rounded-md px-4 py-2 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => alert("Код отправлен")}
              className="px-4 py-2 border border-blue-800 rounded-md hover:bg-gray-50"
            >
              Отправить код
            </button>
          </div>

          <label className="flex items-start gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-1"
            />
            <span>
              Я подтверждаю, что прочитал(а) и согласен(на) с{" "}
              <a href="#" className="text-blue-800 underline">
                условиями пользования и политикой конфиденциальности
              </a>
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white rounded-md py-2 hover:bg-blue-900 transition"
          >
            Продолжить
          </button>
        </form>

        <div>
          <Link to="/login" className="text-blue-800 underline">
            Назад
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
