import { SideMenu } from "../components/SideMenu";

interface SideBarProps {
  selectedGenreId: number;
  handleClickButton: Function;
}

export function SideBar({ selectedGenreId, handleClickButton }: SideBarProps) {


  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <SideMenu handleClickButton={handleClickButton} selectedGenreId={selectedGenreId}/>
    </nav>
  )
}