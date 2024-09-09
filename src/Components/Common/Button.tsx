interface ButtonProps {
    to?: string;
    size?: "small" | "normal";
    backgroundColor?: string;
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
    backgroundColor = "#FF802C",
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

    const defaultButtonStyle: React.CSSProperties = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: disabled ? "#CDCDCD" : backgroundColor,
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
