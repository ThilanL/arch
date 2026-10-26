import { BrowserRouter, Route, Routes } from "react-router"
import { SiteLayout } from "./components/layout/SiteLayout"
import { SmoothScroll } from "./lib/SmoothScroll"
import { AboutPage } from "./pages/AboutPage"
import { ContactPage } from "./pages/ContactPage"
import { ExpertiseDetailPage } from "./pages/ExpertiseDetailPage"
import { ExpertisePage } from "./pages/ExpertisePage"
import { HomePage } from "./pages/HomePage"
import { InsightsPage } from "./pages/InsightsPage"
import { NotFoundPage } from "./pages/NotFoundPage"

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="expertise" element={<ExpertisePage />} />
            <Route path="expertise/:slug" element={<ExpertiseDetailPage />} />
            <Route path="insights" element={<InsightsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  )
}
