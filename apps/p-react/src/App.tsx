import {
  AtomicSearchInterface,
  AtomicResultList,
} from "@coveo/atomic-lit-react";

function App() {
  return (
    <>
      <div>
        <AtomicSearchInterface>
          <AtomicResultList></AtomicResultList>
        </AtomicSearchInterface>
      </div>
    </>
  );
}

export default App;
