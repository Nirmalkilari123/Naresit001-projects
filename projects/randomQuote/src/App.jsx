import React from 'react';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [bgColor, setBgColor] = useState('#ffffff'); 
const [btnclick,setBtnclick]=useState(0);
  useEffect(() => {
    const fetchNewQuote = () => {
      axios.get("https://api.quotable.io/random")
        .then(response => {
          setQuote(response.data.content);
          setAuthor(response.data.author);
          setBgColor(getRandomColor());
        })
        .catch(error => {
          console.error("Error fetching quote:", error);
        });
    };

    
    const intervalId = setInterval(fetchNewQuote, 4000);

    
    return () => clearInterval(intervalId);
  }, []);

  const getRandomColor = () => {
    const colors = ['#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF','#40E0D0','#6495ED','#CCCCFF']; 
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleSave = () => {
    const newQuote = { quote, author };
  setSavedQuotes([...savedQuotes, newQuote]);
  setBgColor(getRandomColor());
  };

  const handleDelete = (index) => {
    const updatedQuotes = [...savedQuotes];
    updatedQuotes.splice(index, 1);
    setSavedQuotes(updatedQuotes);
  };

  return (
    <div className ="app">
    <div style={{ backgroundColor: bgColor }}>
      <blockquote>{quote}</blockquote>
      <cite>-- {author}</cite>
      <button className='btn2' onClick={()=>setBtnclick(btnclick+1)}>Refresh</button>
      <button className='btn' onClick={handleSave}>Save</button>
      <div style={{textAlign:"center",margin:"10px"}}>
        <div className='app2'>
        <h2 >Saved Quotes</h2>
        </div>
        {savedQuotes.map((item, index) => (
          <div key={index}>
            <blockquote>{item.quote}</blockquote>
            <cite>-- {item.author}</cite>
            <button className='btn1' onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
