import RoleCards from "./components/cards/RoleCards";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/layout/AppLayout";
import RoleSelect from "./pages/RoleSelect";
import Dashboard from "./pages/Dashboard";
import SkillGap from "./pages/SkillGap";
import Roadmap from "./pages/Roadmap";

export default function App() {
  return (
    <div className="bg-blue-500 text-white text-center text-xl p-10">
       <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/roles" element={<RoleSelect />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/skill-gap" element={<SkillGap />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}



