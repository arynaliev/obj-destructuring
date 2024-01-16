import "./App.css";
import ProfileCard from "./components/profileCard/ProfileCard";
import { studentsList } from "./components/assets/data/studentsList";

function App() {
  return (
    <div className="App">
      {studentsList.map((el, index) => (
        <ProfileCard
          key={index}
          firstName={el.firstName}
          job={el.job}
          favoriteColor={el.favoriteColor}
          imgSrc={el.imgSrc}
        />
      ))}
    </div>
  );
}

export default App;
