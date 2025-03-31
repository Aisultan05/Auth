import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FloatingField from '@/components/ui/FloatingField'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email:", email)
    // тут можно добавить переход или отправку запроса
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="absolute top-6 left-6 text-xl font-bold text-blue-800">QZAN KZ</div>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 text-center">
        <h2 className="text-2xl font-semibold text-black">С Возвращением</h2>

        {/* Email — с плавающим лейблом */}
        <FloatingField
          type="email"
          label="Адрес электронной почты"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Продолжить */}
        <button
          type="submit"
          className="w-full bg-blue-800 text-white rounded-md py-2 hover:bg-blue-900 transition"
        >
          Продолжить
        </button>

        {/* Уже есть аккаунт */}
        <div className="text-sm">
          У вас уже есть учетная запись?{" "}
          <Link to="/login-password" className="text-blue-800 hover:underline">
            Войти
          </Link>
        </div>

        {/* Разделитель */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-500 text-sm">или</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Кнопки соцсетей */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full flex items-center justify-center border border-blue-800 rounded-md py-2 gap-2 hover:bg-gray-50 transition"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
            <span>Продолжить с учетной записью Google</span>
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center border border-blue-800 rounded-md py-2 gap-2 hover:bg-gray-50 transition"
          >
            <img src="https://www.svgrepo.com/show/448239/microsoft.svg" alt="Microsoft" className="h-5 w-5" />
            <span>Продолжить с Microsoft</span>
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center border border-blue-800 rounded-md py-2 gap-2 hover:bg-gray-50 transition"
          >
            <img src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="Apple" className="h-5 w-5" />
            <span>Продолжить с учетной записью Apple</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
