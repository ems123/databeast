import React, { useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/FooterPages";
import { auto } from "@popperjs/core";
import axios from "axios";

const ServiceDetail = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };

  const sendMessage = async (message) => {
    // const apiKey = ""; // Replace with your actual API key
    const url = "https://api.openai.com/v1/chat/completions";

    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    };

    const headers = {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${apiKey}`,
    };

    try {
      const response = await axios.post(url, data, { headers });
      const botResponse = response.data.choices[0].message.content;
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { type: "system", message: botResponse },
      ]);
    } catch (error) {
      console.error("Error:", error);
      // Handle the error
    }
  };

  return (
    <div>
      <Header />
      <div
        className="container welcome_content"
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        <h5 className="text-white text-center" style={{ margin: auto }}>
          DATABEAST AI
        </h5>

        <div className="text-white" style={{ margin: auto }}>
          {/* main content from here */}
          <div className="container mx-auto">
            <div className="d-flex flex-column ">
              <h1 className=" text-center py-3 font-bold display-4">
                Ask a question
              </h1>
              <div
                className="flex-grow-1 p-4"
                style={{ maxHeight: "300px", overflowY: "auto" }}
              >
                <div className="d-flex flex-column gap-3">
                  {chatLog.map((message, index) => (
                    <div
                      key={index}
                      className={`d-flex ${
                        message.type === "user"
                          ? "justify-content-end"
                          : "justify-content-start"
                      }`}
                    >
                      {isLoading && (
                        <div className="spinner-border text-dark" role="status">
                          <span class="visually-hidden">Thinking...</span>
                        </div>
                      )}

                      <div
                        className={`${
                          message.type === "user"
                            ? "bg-primary"
                            : "bg-secondary"
                        } rounded px-3 py-1 my-1 text-white max-w-md`}
                      >
                        {message.message}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <form onSubmit={handleSubmit} className="p-4">
                <div className="d-flex border  border-dark rounded">
                  <input
                    type="text"
                    className="form-control flex-grow-1 bg-transparent text-white border-0"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary rounded px-4 py-2 font-weight-bold "
                  >
                    Ask
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
