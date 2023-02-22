import './App.css'
import Registration from './components/Registration'

function App() {

  return (
    <div className="grid grid-cols-1">
      <div className='flex items-center  flex-col'>
      <div><h1 className=" bg-red-400 mb-5 mt-5 text-lg text-white">
      This is Formik and Yup Practice
    </h1></div>
    
    <div><Registration/></div>
    </div>
    </div>
  )
}

export default App
