import { Dna } from "react-loader-spinner";

export const Loader = ({ visible = false }) => {
  return visible ? (
    <div className="loader">
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  ) : null;
};
