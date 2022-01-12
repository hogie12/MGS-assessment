import "semantic-ui-css/semantic.min.css";
import LoginPage from "./component/login";
import SidebarMenu from "./component/sidebar";

function App() {
  return (
    <div className="App" style={{height:"1000px", width:"100%"}}>
      <SidebarMenu/>
    </div>
  );
}

export default App;
