import PromptSuggestionButton from "./PromptSuggestionButton";

const PromptSuggestionRow = ({ onPromptClick}) => {
    const prompts =[
        "How is the useContext hook used in React?",
        "How is the useReducer hook used in React?",
        "What are the most useful hooks in Next.js",
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