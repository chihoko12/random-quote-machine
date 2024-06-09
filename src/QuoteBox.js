import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const QuoteBox = () => {
  const [quote, setQuote] = useState('');
  const [author,setAuthor] = useState('');
  const [color,setColor] = useState('#333');

  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      const quotes = response.data.quotes();
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
      setColor(colors[Math.floor(Math.random() * colors.length)]);
    } catch (error) {
      console.error('Error fetching the quote: ', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  },[]);

  return (
    <div id="quote-box" style={{ color: color }}>
      <div className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} /> <span id="text">{quote}</span>
      </div>
      <div className="quote-author">
        - <span id="author">{author}</span>
      </div>
      <div className="buttons">
        <a
          className="button"
          id="tweet-quote"
          href={``}
          target="_top"
          style={{ backgroundColor: color }}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className="button"
          id="tumblr-quote"
          href={``}
          target="_blank"
          style={{ backgroundColor: color }}
        >
          <FontAwesomeIcon icon={faTumblr} />
        </a>
        <button className="button" id="new-quote" onClick={fetchQuote} style={{ backgroundColor: color }}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
