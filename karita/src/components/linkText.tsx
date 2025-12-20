interface Props {
  link: string
  name: string
}

export const LinkText = ({ link, name }: Props) => {
  return (
    <span className="text-link font-semibold hover:text-linkHover duration-300">
      <a href={link} target="_blank">
        {name}
      </a>
    </span>
  )
}
