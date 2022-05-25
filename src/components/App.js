import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResetStyle from '../assets/cssGlobal/reset'
import GlobalStyle from '../assets/cssGlobal/globalStyle'
import 'react-circular-progressbar/dist/styles.css'
import LoginScreen from './loginScreen/LoginScreen/LoginScreen'
import RegisterScreen from './registerScreen/RegisterScreen/RegisterScreen'
import HabitsScreen from './habitsScreen/HabitsScreen/HabitsScreen'
import TodayScreen from './todayScreen/TodayScreen/TodayScreen'
import HistoricScreen from './historicScreen/HistoricScreen'
import { AuthProvider } from './providers/auth'

export default function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<RegisterScreen />} />
          <Route path="/habitos" element={<HabitsScreen />} />
          <Route path="/hoje" element={<TodayScreen />} />
          <Route path="/historico" element={<HistoricScreen />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
