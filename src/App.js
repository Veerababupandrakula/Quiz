import Header from "./Header";
import Start from "./start";
import Container from "./container";
import Question from "./questions";
import { useRef, useState} from "react";
import Result from "./result";
let questions=
[
  {
    question:'what is the best programming language' ,
    options :['java','c','c++'] ,
    ans:0
  },
  {
    question:'what is programming language used in server',
    options :['javaScript','c#','python'], 
    ans:0
  },
  {
    question:'what is DSA',
    options :['Data structure and Automachine','Design sturucture and Automata','Data Structures and Algorithms'],
    ans:2
  }
]
function App() {

  let[isStarted,setIsStarted]=useState(false)
  let[currentQuiz,setcurrentQuiz]=useState(0)
  let score=useRef(0);
  function changeQuiz()
  {
    setcurrentQuiz(currentQuiz+1)
  }
  function increaseScore()
  {
    score.current+=1;
  }
  function reset()
  {
    setcurrentQuiz(0);
    setIsStarted(0);
    score.current=0;
  }
  return (
    <>
    <Header />
    <Container >
      {isStarted ? ( 
        currentQuiz < questions.length ?(
      <Question 
      changeQuiz={changeQuiz} 
      increaseScore={increaseScore}
      setcurrentQuiz={setcurrentQuiz}  
      questions={questions[currentQuiz]}
      />
      ) :(
      <Result 
      reset={reset}
      score={score.current} 
      total={questions.length}
       />
       )
       ):( 
       <Start setIsStarted={setIsStarted}/>
      )}
  
    </Container> 
    </>
  );
}

export default App;
