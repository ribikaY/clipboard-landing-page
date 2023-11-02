const Text = ({text, classname}) => {
    return(
        <p className={`text ${classname}`}>{text}</p>
    )
}

export default Text;