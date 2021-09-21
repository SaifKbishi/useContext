import CoursesList from './components/axios_CoursesList.component'
import UsersList from './components/axios_UsersList.component'
import Parent from './components/Parent.component'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>tables here</h3>
      
      {/* <UsersList /> */}
      <hr/>      
      <CoursesList />
    </div>
  );
}

export default App;
