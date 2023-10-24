import {useState,useEffect} from "react"
const Greetings = () => {
  const [PesanSalam, setPesanSalam] = useState('')

  useEffect(() => {
    const CurrentHours = new Date().getHours()
    if(CurrentHours >= 6 && CurrentHours < 12) {
      setPesanSalam("Good Morning")
    } else if(CurrentHours >= 12 && CurrentHours < 18) {
      setPesanSalam("Good Afternoon")
    } else {
      setPesanSalam("Good Night")
    }
  }, [])
  return (
    <div className="p-5">
      <h1 id="greeting" className="text-[20px] font-Poppins text-white font-bold">{PesanSalam}</h1>
      <h2 id="Name-User" className="text-white font-medium text-[16px] mt-2">Fahreza Pratama Hidayat</h2>
    </div>
  )
}
export default Greetings