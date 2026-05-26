import os
import dspy
import requests
import signatures.book as book
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

load_dotenv()
app = FastAPI()

origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

CLAUDE_API_KEY=os.getenv('CLAUDE_API_KEY')
lm = dspy.LM('anthropic/claude-sonnet-4-20250514', api_key=CLAUDE_API_KEY)
dspy.configure(lm=lm)

class RecommendParams(BaseModel):
    text: str

class HealthCheckParams(BaseModel):
    url: str

@app.post('/recommend/')
async def book_recommendation(rec: RecommendParams):
    context = 'Recommend books in relation'
    text = rec.text
    try:
        book_rec = dspy.ChainOfThought(book.BookRecommendation)
        reg = book_rec(context=context, text=text)
        return {'data': reg}
    except Exception as e:
        print(e)
        return {'error': True, 'message': str(e)}

@app.post('/health_check/')
async def url_health_check(param: HealthCheckParams):
    print(param)
    try:
        response = requests.head(param.url)
        print(response)
        return {'exists': response.status_code != 404}
    except:
        return {'exists': False}