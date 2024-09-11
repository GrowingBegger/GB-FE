interface ButtonProps {
    to?: string;
    size?: "small" | "normal";
    backgroundColor?: "orange" | "gray" | "white";
    borderColor?: string;
    textColor?: string;
    onClick?: () => void;
    disabled?: boolean;
    content?: string;
    buttonStyle?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
    to,
    size = "normal",
    backgroundColor = "orange",
    borderColor,
    textColor = "white",
    onClick,
    disabled = false,
    content,
    buttonStyle,
}) => {
    const getSize = (size: "small" | "normal") => {
        switch (size) {
            case "small":
                return { width: 143, height: 37, fontSize: 14 };
            case "normal":
                return { width: 360, height: 50, fontSize: 17 };
        }
    };
    const { width, height, fontSize } = getSize(size);

    const getColor = (backgroundColor: "orange" | "gray" | "white", textColor: string) => {
        let background, color;

        switch (backgroundColor) {
            case "orange":
                background = "#FF802C";
                break;
            case "gray":
                background = "#CDCDCD";
                break;
            case "white":
                background = "white";
                break;
            default:
                background = backgroundColor;
        }

        color = textColor || "white";

        return { backgroundColor: background, color };
    };
    const { backgroundColor: bgColor, color } = getColor(backgroundColor, textColor);

    const defaultButtonStyle: React.CSSProperties = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: `${fontSize}px`,
        border: borderColor ? `1px solid ${borderColor}` : "none",
        borderRadius: "5px",
        outline: "none",
        color: textColor,
        pointerEvents: disabled ? "none" : "all",
    };
    const mergedButtonStyle = {
        ...defaultButtonStyle,
        ...buttonStyle,
    };

    if (to) {
        return (
            <a href={to} style={{ textDecoration: "none" }}>
                <button style={mergedButtonStyle} onClick={onClick}>
                    {content}
                </button>
            </a>
        );
    }
    return (
        <button style={mergedButtonStyle} onClick={onClick}>
            {content}
        </button>
    );
};

export default Button;
