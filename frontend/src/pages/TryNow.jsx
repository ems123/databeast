import React, { useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/FooterPages";
import axios from "axios";

const ServiceDetail = () => {
  const DEMO_MODELS_LIST = {
    databeast: "https://databeastapp.techhimalaya.com.np/chat/",
    bitcoin: "https://databeastapp.techhimalaya.com.np/bitcoin/",
    ethereum: "https://databeastapp.techhimalaya.com.np/ethereum/",
    matic: "https://databeastapp.techhimalaya.com.np/matic/",
    cardano: "https://databeastapp.techhimalaya.com.np/cardano/",
    binance: "https://databeastapp.techhimalaya.com.np/binance/",
    solana: "https://databeastapp.techhimalaya.com.np/solana/",
    ripple: "https://databeastapp.techhimalaya.com.np/ripple/",

  };

  const [activeModel, setActiveModel] = useState("databeast");
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleActiveModelChange = (modelName, clearLogs = true) => {
    setActiveModel(modelName);
    if (clearLogs) {
      setChatLog([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) {
      setIsEmpty(true);
      return;
    }

    setIsEmpty(false);

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };

  const sendMessage = async (message) => {
    const apiKey = "70dd4b3f5b53c38499804e3499761573";
    const url = DEMO_MODELS_LIST[activeModel];

    const data = {
      question: message,
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };

    try {
      setIsLoading(true);
      const response = await axios.post(url, data, { headers });
      const botResponse = response.data.answer;
      setChatLog((prevChatLog) => [
        ...prevChatLog,
        { type: "system", message: botResponse },
      ]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div
        className="container welcome_content"
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        <h3 className="text-white text-center py-2 ml-4">WhitePaper AI</h3>
        <h5 className="text-white text-center py-2">
          {activeModel !== "whitepaper"}
        </h5>
        <div className="container-fluid vh-100">
          <div className="row">
            {/* Sidebar on all screens (left side) */}
            <div className="col-12 col-md-3 col-lg-2">
              <ul className="list-group">
                {Object.keys(DEMO_MODELS_LIST).map((key) => (
                  <li
                    key={key}
                    className={`list-group-item ${
                      activeModel === key ? "active" : ""
                    }`}
                    onClick={() => handleActiveModelChange(key)}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        activeModel === key ? "#0056b3" : "#0d003b",
                      borderColor: activeModel === key ? "#0056b3" : "#0d003b",
                      color: "#FFFFFF",
                      paddingLeft: "15px", // Adjust padding-left to cover the text
                      paddingRight: "15px", // Adjust padding-right to cover the text
                      marginBottom: "5px", // Add margin-bottom for spacing between items
                    }}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content */}
            <div className="col-md-10">
              <div
                className="card bg-secondary text-white"
                style={{ minHeight: "500px" }}
              >
                <div className="card-header d-flex justify-content-center align-items-center">
                  <h5 className="text-center">
                    {activeModel !== "whitepaper"
                      ? activeModel.charAt(0).toUpperCase() +
                        activeModel.slice(1)
                      : "WhitePaper AI"}
                  </h5>
                </div>
                <div className="card-body d-flex flex-column p-2 overflow-auto">
                  {chatLog.map((message, index) => (
                    <div
                      key={index}
                      className={`d-flex ${
                        message.type === "user"
                          ? "justify-content-end"
                          : "justify-content-start"
                      }`}
                    >
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
                  {isLoading && (
                    <div className="d-flex justify-content-end">
                      <div className="spinner-grow text-primary" role="status">
                        <span className="visually-hidden">Thinking...</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="card-footer p-2">
                  <form onSubmit={handleSubmit} className="d-flex">
                    <input
                      type="text"
                      className="form-control white-placeholder flex-grow-1  border border-dark rounded"
                      placeholder="Type your message..."
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        setIsEmpty(false);
                      }}
                    />
                    <button
                      type="submit"
                      className="btn btn-primary rounded px-4 py-2 font-weight-bold ml-2"
                    >
                      <i className="fa-regular fa-paper-plane"></i>
                    </button>
                  </form>
                  {isEmpty && (
                    <p className="text-danger mt-2">Message is required!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer showContact={false} />
    </div>
  );
};

export default ServiceDetail;
