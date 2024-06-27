import os
from openai import OpenAI

client = OpenAI(
#   api_key=os.environ['OPENAI_API_KEY'],  # this is also the default, it can be omitted
)

def chat_with_gpt(prompt):
    try:
        response = openai.Completion.create(
            engine="text-davinci-003",  # Specify the model to use
            prompt=prompt,
            max_tokens=150,  # Adjust the token limit as needed
            n=1,
            stop=None,
            temperature=0.7,  # Adjust the creativity of the response
        )
        return response.choices[0].text.strip()
    except Exception as e:
        return f"An error occurred: {str(e)}"

def main():
    print("ChatGPT: Hello! How can I assist you today?")
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["exit", "quit"]:
            print("ChatGPT: Goodbye!")
            break
        response = chat_with_gpt(user_input)
        print(f"ChatGPT: {response}")

if __name__ == "__main__":
    main()
