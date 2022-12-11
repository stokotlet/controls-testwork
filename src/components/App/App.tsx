import FirstControl from "../FirstControl/FirstControl";
import Input from "../Input/Input";
import ControlButton from "../ControlButton/ControlButton";
import {state1, state2} from "../../store/FirstControlState";
import AutocompleteControl from "../AutocompleteControl/AutocompleteControl";
import {autocompleteState} from "../../store/AutocompleteControlState";
import HintsSelector from "../HintsSelector";
import HintsList from "../HintsList";
import logo from '../../assets/ms98.svg'

function App() {
    return (
      <div className="wrapper">
          <img className="logo" src={logo} alt="logo ms98"/>
          <FirstControl state={state1}>
              {(handler) => {
                  return (
                      <div className="control">
                          <Input onChangeHandler={handler} state={state1}/>
                          <ControlButton cb={() => state1.setValue('')} text={"Clear"}/>
                          <ControlButton cb={() => state1.setValue('Hello world')} text={"SayHi!"}/>
                      </div>
                  )
              }}
          </FirstControl>
          <FirstControl state={state2}>
              {(handler) => {
                  return (
                      <div className="control">
                          <ControlButton cb={() => state2.value && !isNaN(+state2.value) ? alert(state2.value) : null} text={"If Num"}/>
                          <Input onChangeHandler={handler} state={state2}/>
                          <ControlButton cb={() => state2.value.trim() && alert(state2.value)} text={"ShowAlert"}/>
                      </div>
                  )
              }}
          </FirstControl>
          <AutocompleteControl state={autocompleteState}>
              {(handler) => {
                  return (
                      <div className="control">
                          <Input onChangeHandler={handler} state={autocompleteState}/>
                          <HintsSelector/>
                          <HintsList state={autocompleteState}/>
                      </div>
                  )
              }}
          </AutocompleteControl>
      </div>
  );
}

export default App;
