import React, { useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/FooterPages";
import axios from "axios";

const ServiceDetail = () => {
  const DEMO_MODELS_LIST = {
    whitepaper: "https://databeastapp.techhimalaya.com.np/chat/",
    bitcoin: " https://databeastapp.techhimalaya.com.np/bitcoin/",
    ethereum: "https://databeastapp.techhimalaya.com.np/ethereum/",
  };

  const [activeModel, setActiveModel] = useState("whitepaper");
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

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
        <div style={{ margin: "auto" }}>
          {/* main content from here */}
          <div
            className="container-fluid vh-100 d-flex flex-column"
            style={{ minHeight: 500, paddingTop: 50 }}
          >
            <div className="row flex-grow-1 d-flex">
              {/* Sidebar */}
              <div
                className="col-2 rounded bg-transparent d-flex flex-column p-0"
                style={{
                  backgroundColor: "#d0e8ff",
                }} /* Change this to the desired color */
              >
                <ul
                  className="list-group rounded-1"
                  aria-orientation="vertical"
                >
                  {Object.keys(DEMO_MODELS_LIST).map((key) => (
                    <li
                      style={{
                        userSelect: "none",
                        cursor: "pointer",
                        backgroundColor:
                          activeModel === key ? "#0056b3" : "#0d003b",
                        borderColor:
                          activeModel === key ? "#0056b3" : "#0d003b",
                        color: "#FFFFFF", // Ensure text color is white for both active and inactive items
                      }}
                      key={key}
                      className={`list-group-item ${
                        activeModel === key ? "active" : ""
                      }`}
                      onClick={() => setActiveModel(key)}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Main Content */}
              <div
                className="col-10 d-flex flex-column"
                style={{ maxHeight: 500, overflow: "auto" }}
              >
                <div className="d-flex py-1 justify-content-center align-items-center  text-white text-center ">
                  <h4>{`${
                    activeModel.charAt(0).toUpperCase() + activeModel.slice(1)
                  } Chat`}</h4>
                </div>

                <div className="flex-grow-1 p-2 overflow-auto mt-4">
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

                <div className="p-2">
                  <form onSubmit={handleSubmit} className="d-flex">
                    <input
                      type="text"
                      className="form-control flex-grow-1 bg-transparent text-white border border-dark rounded"
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
                      <i class="fa-regular fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
                {isEmpty && <p className="text-danger">Message is required!</p>}
              </div>
            </div>
          </div>
          {/* Main End */}
        </div>
      </div>
      <Footer showContact={false} />
    </div>
  );
};

export default ServiceDetail;
