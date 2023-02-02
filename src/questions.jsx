export default function Question(props)
{
    let chosenOption=-1;
     function handleChange(e)
     {
      console.log(e.target.value)
      chosenOption = e.target;
     }
     function onNext()
     {
        if(chosenOption == -1)
        {
            return alert("choose option") 
        }
        if(chosenOption.value == props.questions.ans)
        {
            props.increaseScore();
        }
        props.changeQuiz()
       chosenOption.checked=false;
     }
   
      return (
        <div className="wrapper">
            <div className="question">
                    {props.questions.question}
            </div>
            <div className="options">
            <div className="option">
                   <input onChange={handleChange} name="options" type="radio" id="0" value="0"></input>
                   <label htmlFor="0">{props.questions.options[0]}</label>
            </div>
            <div className="option">
                   <input  onChange={handleChange} name="options" type="radio" id="1" value="1"></input>
                   <label htmlFor="1">{props.questions.options[1]}</label>
            </div>
            <div className="option">
                   <input  onChange={handleChange} name="options" type="radio" id="2" value="2"></input>
                   <label htmlFor="2">{props.questions.options[2]}</label>
            </div>
            </div>
            <button onClick={onNext} >Next</button>
        </div>
    )
    
}