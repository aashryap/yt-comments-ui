export const SentimentResult = ({ sentiments = [] }) => {
  return (
    <div>
      <div>
        <h3 className="analysis-text">
          Analysis of 50 Most Relevant User Comments
        </h3>
        {sentiments.map((sentiment) => {
          return (
            <div className="sentiment-card">
              <div className="yt-title">{sentiment.title}</div>
              <hr />
              <div className="engagement">
                <span className="value">
                  {parseInt(sentiment.viewCount).toLocaleString("en-US")}
                </span>
                <span className="type">Views</span>
                <span className="verticle-divider"></span>
                <span className="value">
                  {parseInt(sentiment.likeCount).toLocaleString("en-US")}
                </span>
                <span className="type">Likes</span>
                <span className="verticle-divider"></span>
                <span className="value">
                  {parseInt(sentiment.commentCount).toLocaleString("en-US")}
                </span>
                <span className="type">Comments</span>
                <span className="verticle-divider"></span>
                <span className="value">{sentiment.engagement}%</span>
                <span className="type">Engagement Score</span>
              </div>
              <hr />
              <div>{sentiment.sentimenalSummary}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
