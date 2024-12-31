"use client"

import { useChat } from "ai/react";
import { Message } from "ai";

import Bubble from "./components/Bubble";
import PromptSuggestionRow from "./components/PromptSuggestionRow";
import LoadingBubble from "./components/LoadingBubble";

const Home = () => {
    const { append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat()

    const noMessages = !messages || messages.length === 0;

    const handlePrompt = ( promptText: any ) => {
        const msg: Message = {
            id: crypto.randomUUID(),
            content: promptText,
            role: "user"
        }
        append(msg)
    }

    return (
        <main>
            <h1 className="starter-text">
                Stack Bot
            </h1>
            <section className={noMessages ? "" : "populated"}>
                {noMessages ? (
                    <>
                        <br/>
                        <PromptSuggestionRow onPromptClick={handlePrompt}/>
                    </>
                ) : (
                    <div className="conversation-block">
                        {messages.map((message, index) => <Bubble key={`message-${index}`} message={message}/>)}
                        {isLoading && <LoadingBubble />}
                    </div>
                )}
            </section>
            <form onSubmit={handleSubmit}>
                <input 
                    className="question-box" 
                    onChange={handleInputChange}
                    value={input}
                    placeholder="Ask me something..."
                />
                <input type="submit"/>
            </form>
            <span className="footer">Stack Bot &copy; 2024</span>
        </main>
    )
}

export default Home;