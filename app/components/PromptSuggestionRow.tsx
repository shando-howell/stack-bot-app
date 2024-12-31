import PromptSuggestionButton from "./PromptSuggestionButton";

const PromptSuggestionRow = ({ onPromptClick}) => {
    const prompts =[
        "What is server-side rendering in Next.js?",
        "How is the useReducer hook used in React?",
        "How do you simulate multi-thread processing in Node.js?",
        "What are the most useful middleware functions in Express.js?"
    ]
    return (
        <div className="prompt-suggestion-row">
            {prompts.map((prompt, index) => 
                <PromptSuggestionButton 
                    key={`suggestion-${index}`}
                    text={prompt}
                    onClick={() => onPromptClick(prompt)}
                />)}
        </div>
    )
}

export default PromptSuggestionRow;