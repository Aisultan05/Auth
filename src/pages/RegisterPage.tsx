import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FloatingField from '@/components/ui/FloatingField'

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="absolute top-6 left-6 text-xl font-bold text-blue-800">QZAN KZ</div>

      <div className="w-full max-w-md space-y-6 text-center">
        <h2 className="text-2xl font-semibold text-black">Создать учетную запись</h2>

        <div className="text-left">
          <FloatingField
            label="Адрес электронной почты"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </div>

        <button className="w-full bg-blue-800 text-white rounded-md py-2 hover:bg-blue-900 transition">
          Продолжить
        </button>

        <div className="text-sm">
          У вас уже есть учетная запись?{' '}
          <Link to="/" className="text-blue-800 hover:underline">
            Войти
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-500 text-sm">или</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center border border-blue-800 rounded-md py-2 gap-2 hover:bg-gray-50 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
            <span>Продолжить с учетной записью Google</span>
          </button>

          <button className="w-full flex items-center justify-center border border-blue-800 rounded-md py-2 gap-2 hover:bg-gray-50 transition">
            <img src="https://www.svgrepo.com/show/448239/microsoft.svg" alt="Microsoft" className="h-5 w-5" />
            <span>Продолжить с Microsoft</span>
          </button>

          <button className="w-full flex items-center justify-center border border-blue-800 rounded-md py-2 gap-2 hover:bg-gray-50 transition">
            <img src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="Apple" className="h-5 w-5" />
            <span>Продолжить с учетной записью Apple</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
