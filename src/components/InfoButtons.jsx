// eslint-disable-next-line react/prop-types
export const InfoButtons = ({ href, name }) => {
  return (
    <div>
      <a
        className="btn btn-primary btn-style btn-size"
        href={href}
        role="button"
      >
        {name}
      </a>
    </div>
  );
};

export default InfoButtons;
