import react from "react"


export default function AgePannel (props) {

 const {decaAge, setDecaAge} = props;
    const clickHandler = (e) => {
      const ageGroup = e.target.value
      setDecaAge(ageGroup)
    }
    console.log(decaAge)

    return (
        <>
      <button value={10} onClick={clickHandler}>0-10</button>
      <button value={20}onClick={clickHandler}>11-20</button>
      <button value={30} onClick={clickHandler}>21-30</button>
      <button value={40} onClick={clickHandler}>31-40</button>
      <button value={50} onClick={clickHandler}>41-50</button>
      <button value={60} onClick={clickHandler}>51-60</button>
      <button value={60} onClick={clickHandler}>61-70</button>
      <button value={70} onClick={clickHandler}>71-80</button>
      <button value={80} onClick={clickHandler}>81-90</button>
      <button value={90} onClick={clickHandler}>91-100</button>   
        </>
    )
    
}