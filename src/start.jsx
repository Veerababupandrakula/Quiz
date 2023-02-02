export default function start(props)
{
    return(
        <div className="start flex-center" >
           <p> lets enjoy the game,just on a click..!!!</p>
           <button onClick={()=>props.setIsStarted(true)}>start</button>
        </div>
    )
}