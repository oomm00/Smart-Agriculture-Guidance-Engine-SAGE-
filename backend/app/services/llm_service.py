import google.generativeai as genai
import os

# Initialize the Gemini client using the environment variable
# Note: GEMINI_API_KEY must be set in the .env file
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))

# Use the recommended Gemini 1.5 Flash model for fast, cost-effective inference
model = genai.GenerativeModel("gemini-1.5-flash")

def get_response(system_prompt: str, history: list, user_message: str) -> str:
    """
    Sends a message to the Gemini LLM with the provided system prompt and conversation history.
    
    Args:
        system_prompt (str): The Krishi Sahayak persona and guidelines.
        history (list): Previous conversation turns to maintain context.
        user_message (str): The new question from the field supervisor.
        
    Returns:
        str: The generated response from the LLM.
    """
    try:
        # Start a chat session with the provided history
        chat = model.start_chat(history=history)
        
        # Prepend the system prompt to the user's message to enforce boundaries
        # In a more advanced implementation, system prompts can be set at the model level,
        # but injecting it into the first turn/message works reliably for Flash.
        full_prompt = f"{system_prompt}\n\nUser query: {user_message}"
        
        # Generate the response
        response = chat.send_message(full_prompt)
        return response.text
        
    except Exception as e:
        # In production, this would be logged to a monitoring service
        print(f"Error calling Gemini API: {str(e)}")
        # Return a graceful fallback that includes the safety requirement
        return ("I was unable to generate a response at this time. Please try rephrasing your question, "
                "or call the Uttarakhand Kisan Helpline at 1800-180-1551.\n\n"
                "⚠️ Verify with your local extension officer before applying any treatment.")
