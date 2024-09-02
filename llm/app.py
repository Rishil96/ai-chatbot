import uvicorn
from fastapi import FastAPI
from fastapi.exceptions import HTTPException
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
from pydantic import BaseModel


# Pydantic Model to filter out requests in API endpoint
class UserInput(BaseModel):
    message: str


# Load environment variables
load_dotenv()

# Create FastAPI app and Gemini model object
app = FastAPI()
model = ChatGoogleGenerativeAI(model="gemini-pro", convert_system_message_to_human=True)


# Endpoint to get results from gemini LLM
@app.post("/generate")
def generate_response(user_input: UserInput):
    try:
        llm_response = model.invoke(user_input.message)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error. {e}")
    return {
        "message": llm_response.content
    }


if __name__ == "__main__":
    uvicorn.run("app:app", port=8000, reload=True)
