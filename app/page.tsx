"use client"

import Image from "next/image";
import tech from "./assets/tech.jpg";
import { useChat } from "ai/react";
import { Message } from "ai";

const Home = () => {
    const { append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat()

    const noMessages = false

    return (
        <main>
            {/* <Image src={tech} width="600" alt="Tech Background" /> */}
            <h1 className="starter-text">
                Stack Bot
            </h1>
            <section className={noMessages ? "" : "populated"}>
                {noMessages ? (
                    <>
                        
                        <br/>
                        {/* <PromptSuggestionRow/> */}
                    </>
                ) : (
                    <>
                        {/* map messages to text bubbles */}
                        {/* <LoadingBubble /> */}
                    </>
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
        </main>
    )
}

export default Home;