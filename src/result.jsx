export default function result(props)
{
     return(
        <div className="result">
            <div className="text">
                thank you for attending <br/>
                  you got<br/>
                 <span>{props.score}/{props.total}</span>
            </div>
            <button onClick={()=>props.reset()}>retry</button>
        </div>
    );
     
}