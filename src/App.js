import Stepper from './components/Stepper';
import StepperControl from './components/StepperControl';

function App() {
  // const displayStep = (step) => {
  //   switch (step) {
  //     case 1:
  //       return <Welcome />;
  //       break;

  //     default:
  //       break;
  //   }
  // };
  return (
    <div className='App h-full font-Inter  flex justify-center items-center w-full min-h-screen'>
      <div className='max-w-md border pb-40 pt-10 mx-auto p-7 rounded-xl w-full'>
        <div className='p-3 space-y-10'>
          {/* Stepper */}
          <div className='container horizontal mt-5 border'>
            <Stepper />
          </div>
          {/* Navigation controls */}
          <StepperControl />
        </div>
      </div>
    </div>
  );
}

export default App;
