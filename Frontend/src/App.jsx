import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import Todo from "./components/Todo";
import Hooks from "./hooks/Hooks";
import Callback from "./hooks/Callback";
import Effect from "./hooks/Effect";
import EffectWithApi from "./hooks/EffectWithApi";
import Form from "./hooks/Form";
import Memo from "./hooks/Memo";
import Reducer from "./hooks/Reducer";
import Ref from "./hooks/Ref";
import State from "./hooks/State";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import {Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/useState" element={<State/>}></Route>
      <Route path="/hooks" element={<Hooks/>}>
       <Route path="usestate" element={<State/>}/>
       <Route path="form" element={<Form/>}/>
       <Route path="effect" element={<Effect/>}/>
       <Route path="effectwithapi" element={<EffectWithApi/>}/>
       <Route path="useRef" element={<Ref/>}/>
       <Route path="useReducer" element={<Reducer/>}/>
       <Route path="useMemo" element={<Memo/>}/>
       <Route path="useCallback" element={<Callback/>}/>
      </Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/todo" element={<Todo/>}></Route>

      
    </Routes>
    </>
  )
}
export default App