import { useState } from "react";
import { generateSentiment } from "../services/sentiments.service";
import { Loader } from "../Loader";
import { SentimentResult } from "./sentimentsResult";

const MAX_LINKS_ALLOWED = 1;
const MIN_LINKS_ALLOWED = 1;

export const YtLinkForm = () => {
  const [error, setError] = useState(false);
  const [urls, setUrls] = useState([{ url: "" }]);
  const [sentiments, setSentiments] = useState([]);
  const [loaderVisible, setLoaderVisible] = useState(false);

  const generateSentiments = () => {
    let payload = [];
    urls.forEach((u) => {
      if (u.url) {
        payload.push(u);
      }
    });
    setLoaderVisible(true);
    generateSentiment(urls)
      .then((data) => {
        console.log({ sentimentData: data });
        setError(false);
        setSentiments(data.data);
        setLoaderVisible(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoaderVisible(false);
      });
  };

  const onChange = (e, index) => {
    const temp = [...urls];
    temp[index].url = e.target.value;
    console.log("TEMP ", temp);
    setUrls(temp);
  };

  return (
    <>
      <Loader visible={loaderVisible} />
      <div className="link-form">
        {urls.length !== MAX_LINKS_ALLOWED ? (
          <button
            className="add-more-button"
            onClick={() => {
              setUrls((prevState) => {
                return [...prevState, { url: "" }];
              });
            }}
          >
            ADD MORE URL +
          </button>
        ) : null}

        {urls.map((url, i) => {
          return (
            <div className="link-input-section">
              {/* <div className="link-title">Paste Youtube Video Link Below</div> */}
              <input
                className="url-input"
                type="text"
                value={urls[i].url}
                onChange={(e) => onChange(e, i)}
                placeholder={"Paste Youtube Video Link"}
                required
              />
              {error ? (
                <div style={{ color: "red", marginTop: "20px" }}>
                  Error: Please check URL and try again
                </div>
              ) : null}
            </div>
          );
        })}
        <div>
          <button
            // className="generate-sentiment-button"
            className="btn btn-border-filled"
            onClick={generateSentiments}
          >
            Check Feedback
          </button>
        </div>
        {sentiments.length ? <SentimentResult sentiments={sentiments} /> : null}
      </div>
    </>
  );
};
