import Class from './Class'
import Banner from 'components/Banner'
import Login from 'components/Login'
import Main from 'pages/Main'
import Course from 'pages/Main/Course'
import InsertCourse from './Class/insert'
import NotFound from 'pages/404'
import { AuthProvider } from 'context/AuthProvider'
import RequireAuth from 'components/RequireAuth'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />}>
        <Route path="" element={<Banner />} />
        <Route path="about" element={<Banner />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Main />}>
          <Route path="courses" element={<Class />} />
          <Route path="courses/insert" element={<InsertCourse />} />
          <Route path="course/:courseId" element={<Course />} />
        </Route>{' '}
      </Route>
      {/* catch all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
