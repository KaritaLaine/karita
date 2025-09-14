interface Props {
  icon: string;
  onClick: () => void;
}

export const IconButton = ({ icon, onClick }: Props) => {
  return (
    // TODO: sizing and hover effect
    <div>
      <img src={icon} alt="icon" onClick={onClick} />
    </div>
  );
};
