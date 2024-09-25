import React from 'react';
import useAppState from "./useAppState";
import {match} from "ts-pattern";
import {AsyncState} from "./State";
import {SuccessStateType} from "./AppState";

function App() {
    const { state, toggleView} = useAppState();
  return (
    <div className="App">
      <header className="App-header">
          {match(state)
              .with({type: AsyncState.LOADING}, (loadingState) => <div>Loading...</div>)
              .with({type: AsyncState.ERROR}, (errorState) => <div>Error</div>)
              .with({type: AsyncState.SUCCESS }, (successState) =>
                  <div>
                      <div>
                          {successState.data}
                      </div>
                      <div>
                          <button onClick={toggleView}>TOGGLE</button>
                      </div>
                      <div>
                          {match(successState.state)
                              .with({type: SuccessStateType.EDIT}, () => <div>EDIT</div>)
                              .with({type: SuccessStateType.VIEW}, () => <div>VIEW</div>)
                              .exhaustive()}
                      </div>
                  </div>
              ).exhaustive()}
      </header>
    </div>
  );
}

export default App;
