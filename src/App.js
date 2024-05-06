// Importing stylesheets
import "./App.css";
import Filter from "./components/filter";

// Importing Components
import JobList from "./components/jobList";

function App() {
    return (
        <div className='App'>
            <Filter />
            <JobList />
        </div>
    );
}

export default App;
