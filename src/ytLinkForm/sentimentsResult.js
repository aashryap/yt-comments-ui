export const SentimentResult = ({ sentiments = [] }) => {
  //   console.log(sentiments);
  return (
    <div>
      <div>
        <h3 className="analysis-text">
          Analysis of Most Relevant User Comments
        </h3>
        {sentiments.map((sentiment) => {
          return (
            <div className="sentiment-card">
              <div className="yt-title">{sentiment.title}</div>
              <div>{sentiment.sentimenalSummary}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
