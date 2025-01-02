import Logo from "@/assets/Logo"
import { ModeToggle } from "../mode-toggle"
import Container from "./Container"


const Navbar = () => {
  return (
    <Container>
      <nav className="h-16 flex items-center gap-3 px-5">
        <div className="flex items-center gap-2">
          <Logo></Logo> <span className="font-medium text-xl selection:bg-[#E0F5EF] selection:text-[#17B686]">React <span className="text-[#00D8FF]">Application</span></span>
        </div>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </nav>
    </Container>
  )
}

export default Navbar
