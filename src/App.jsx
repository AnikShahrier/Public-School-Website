import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'

// Main Pages
import Home from './pages/Home'
import Notices from './pages/Notices'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

// Parent Hub Pages
import About from './pages/About'
import Academic from './pages/Academic'
import Facilities from './pages/Facilities'
import Student from './pages/Student'
import Results from './pages/Results'
import Admission from './pages/Admission'

// About Sub-Pages
import AboutInstitute from './pages/about/AboutInstitute'
import FormerHeadmaster from './pages/about/FormerHeadmaster'
import ManagingCommittee from './pages/about/ManagingCommittee'
import TeachersList from './pages/about/TeachersList'
import StaffList from './pages/about/StaffList'
import InstituteInfrastructure from './pages/about/InstituteInfrastructure'
import MissionVision from './pages/about/MissionVision'
import WhyStudyHere from './pages/about/WhyStudyHere'

// Academic Sub-Pages
import AcademicFee from './pages/academic/AcademicFee'
import BookList from './pages/academic/BookList'
import Syllabus from './pages/academic/Syllabus'
import HolidayList from './pages/academic/HolidayList'
import AcademicCalendar from './pages/academic/AcademicCalendar'

// Student Sub-Pages
import FeesPayment from './pages/student/FeesPayment'
import OurStudents from './pages/student/OurStudents'
import DressInfo from './pages/student/DressInfo'
import ClassRoutine from './pages/student/ClassRoutine'
import ExamRoutine from './pages/student/ExamRoutine'

// Facilities Sub-Pages
import ScienceLab from './pages/facilities/ScienceLab'
import ComputerLab from './pages/facilities/ComputerLab'
import Library from './pages/facilities/Library'
import Playground from './pages/facilities/Playground'
import Transportation from './pages/facilities/Transportation'
import IndoorPlayground from './pages/facilities/IndoorPlayground'

// Results Sub-Pages
import PublicResults from './pages/results/PublicResults'
import SchoolResults from './pages/results/SchoolResults'

// Admission Sub-Pages
import AdmissionInfo from './pages/admission/AdmissionInfo'
import ApplyOnline from './pages/admission/ApplyOnline'
import Prospectus from './pages/admission/Prospectus'
import AdmissionForm from './pages/admission/AdmissionForm'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    // Added 'future' flags to silence React Router v7 warnings
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* Parent Hub Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/student" element={<Student />} />
          <Route path="/results" element={<Results />} />
          <Route path="/admission" element={<Admission />} />

          {/* About Sub-Routes */}
          <Route path="/about/institute" element={<AboutInstitute />} />
          <Route path="/about/former-headmaster" element={<FormerHeadmaster />} />
          <Route path="/about/managing-committee" element={<ManagingCommittee />} />
          <Route path="/about/teachers" element={<TeachersList />} />
          <Route path="/about/staff" element={<StaffList />} />
          <Route path="/about/infrastructure" element={<InstituteInfrastructure />} />
          <Route path="/about/mission-vision" element={<MissionVision />} />
          <Route path="/about/why-study-here" element={<WhyStudyHere />} />

          {/* Academic Sub-Routes */}
          <Route path="/academic/fee" element={<AcademicFee />} />
          <Route path="/academic/books" element={<BookList />} />
          <Route path="/academic/syllabus" element={<Syllabus />} />
          <Route path="/academic/holiday" element={<HolidayList />} />
          <Route path="/academic/calendar" element={<AcademicCalendar />} />

          {/* Student Sub-Routes */}
          <Route path="/student/fees-payment" element={<FeesPayment />} />
          <Route path="/student/our-students" element={<OurStudents />} />
          <Route path="/student/dress-info" element={<DressInfo />} />
          <Route path="/student/class-routine" element={<ClassRoutine />} />
          <Route path="/student/exam-routine" element={<ExamRoutine />} />

          {/* Facilities Sub-Routes */}
          <Route path="/facilities/science-lab" element={<ScienceLab />} />
          <Route path="/facilities/computer-lab" element={<ComputerLab />} />
          <Route path="/facilities/library" element={<Library />} />
          <Route path="/facilities/playground" element={<Playground />} />
          <Route path="/facilities/transportation" element={<Transportation />} />
          <Route path="/facilities/indoor-playground" element={<IndoorPlayground />} />

          {/* Results Sub-Routes */}
          <Route path="/results/public" element={<PublicResults />} />
          <Route path="/results/school" element={<SchoolResults />} />

          {/* Admission Sub-Routes */}
          <Route path="/admission/info" element={<AdmissionInfo />} />
          <Route path="/admission/apply" element={<ApplyOnline />} />
          <Route path="/admission/prospectus" element={<Prospectus />} />
          <Route path="/admission/form" element={<AdmissionForm />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}