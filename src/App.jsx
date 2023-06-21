
import './App.css'
import Input from './UseContext/Input'
import Mode from './reduxStatemanagment/redux/component/Mode'
import InputRecoil from './recoil/InputRecoil.jsx'
function App() {

  return (
    <>
      <section className=' flex gap-32'>
      <Mode/>
        <Input/>
        <InputRecoil/>
      </section>
    </>
  )
}

export default App
