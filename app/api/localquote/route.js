import { NextResponse } from "next/server";

export async function GET(req, res) {
  const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
    {
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      quote: "The only source of knowledge is experience.",
      author: "Albert Einstein",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
    },
    {
      quote: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale",
    },
    {
      quote:
        "Happiness is not something readymade. It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote: "Do not wait for leaders; do it alone, person to person.",
      author: "Mother Teresa",
    },
    {
      quote:
        "Success is not how high you have climbed, but how you make a positive difference to the world.",
      author: "Roy T. Bennett",
    },
    {
      quote: "If you want to lift yourself up, lift up someone else.",
      author: "Booker T. Washington",
    },
    {
      quote:
        "The only way to achieve the impossible is to believe it is possible.",
      author: "Charles Kingsleigh",
    },
  ];

  return NextResponse.json([quotes[Math.floor(Math.random() * 11)]]);
}
