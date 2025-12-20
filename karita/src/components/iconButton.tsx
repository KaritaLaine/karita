interface Props {
  icon: string
  alt: string
  size: string
  onClick: () => void
  animation?: string
}

export const IconButton = ({ icon, alt, size, onClick, animation }: Props) => {
  return (
    <>
      <img
        src={icon}
        alt={alt}
        onClick={onClick}
        className={`${size} cursor-pointer hover:scale-120 ${animation}`}
      />
    </>
  )
}
