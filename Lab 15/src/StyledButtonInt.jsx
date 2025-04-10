function StyledButtonInternal() {
    const buttonStyle = `
        .internal-button {
            background-color: teal;
            color: white;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .internal-button:hover {
            background-color: darkgreen;
        }
    `;

    return (
        <div>
            <style>{buttonStyle}</style>
            <button className="internal-button">Internal CSS Button</button>
        </div>
    );
}

export default StyledButtonInternal;