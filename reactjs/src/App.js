import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Pagination from './component/Pagination'
import Pegawai from './pages/tes-programmer/FormPegawai'
import NextPagination from './component/NextPagination'
import TabPegawai from './pages/tes-programmer/TabPegawai'
import EditPegawai from './pages/tes-programmer/EditFormPegawai'
import PdfConverter from './pages/tes-programmer/PdfConverter'
import Calculator from './pages/tes-programmer/Calculator'
import AverageCalculator from './pages/tes-programmer/CalculatoMeans'
import Services from './pages/services/Services'
import BookingForm from './pages/services/BookingForm'
import BookingsTab from './pages/services/BookingsTab'
import Reports from './pages/reports/Report'
import ReportsTab from './pages/reports/ReportTab'
import ReportPrev from './component/ReportPrev'
import EditReport from './pages/reports/EditReport'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <br /><br /><br /><br />
          <Pegawai />
          <br /><br /><br />
          <NextPagination />
          <br /><br /><br /><br /><br />
          <Footer />
        </Route>
        <Route path="/tabpegawai">
          <Navbar />
          <br /><br /><br /><br />
          <TabPegawai />
          <br /><br /><br />
          <Pagination />
          <br /><br /><br /><br /><br />
          <Footer />
        </Route>
        <Route path="/editpegawai/:id">
          <Navbar />
          <br /><br /><br /><br />
          <EditPegawai />
          <br /><br /><br />
          <Pagination />
          <br /><br /><br /><br /><br />
          <Footer />
        </Route>
        <Route path="/convert">
          <Navbar />
          <br /><br /><br /><br />
          <PdfConverter />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <Footer />
        </Route>

        <Route path="/calculator">
          <Navbar />
          <br /><br /><br /><br />
          <Calculator />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <Footer />
        </Route>

        <Route path="/means">
          <Navbar />
          <br /><br /><br /><br />
          <AverageCalculator />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
          <br /><br /><br />
          <Footer />
        </Route>

        <Route path="/bookings">
          <Navbar />
          <br /><br /><br /><br />
          <Services />
          <br /><br /><br />
          <Footer />
        </Route>

        <Route path="/bookingform">
          <Navbar />
          <br /><br /><br /><br />
          <BookingForm />
          <br /><br /><br />
          <Footer />
        </Route>

        <Route path="/bookingstab">
          <Navbar />
          <br /><br /><br /><br />
          <BookingsTab />
          <br /><br /><br />
          <Footer />
        </Route>
        
        <Route path="/report">
          <Navbar /><br /><br /><br /><br /><br />
          <Reports /><br /><br /><br /><br /><br />
          <Footer />
        </Route>
        <Route path="/reportstab">
          <Navbar /><br /><br /><br /><br /><br /><br />
          <ReportsTab /><br />
          <ReportPrev /><br />
        </Route>
        <Route path="/editreports/:id">
          <Navbar /><br /><br /><br /><br /><br /><br />
          <EditReport /><br />
        </Route>
      </Switch>
    </BrowserRouter>
  ) 
}

export default App