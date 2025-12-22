interface Props {
  icon: string
  alt: string
  size: string
  onClick: () => void
  animation?: string
  text?: string
}

export const IconButton = ({
  icon,
  alt,
  size,
  onClick,
  animation,
  text,
}: Props) => {
  return (
    <div className="cursor-pointer hover:scale-110 duration-200 flex items-center gap-[1rem]">
      <p>{text}</p>
      <img
        src={icon}
        alt={alt}
        onClick={onClick}
        className={`${size} ${animation} hidden md:flex`}
      />
    </div>
  )
}
