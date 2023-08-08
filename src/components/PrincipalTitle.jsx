// eslint-disable-next-line react/prop-types
export const PrincipalTitle = ({ src, title }) => {
  return (
    <>
      <img src={src} alt={title} width={100} height={100} className="img-nike"/>
      <h5 className="modal-title">{title}</h5>
    </>
  );
};

export default PrincipalTitle;
