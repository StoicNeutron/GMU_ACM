export default function Node() {
    
    const buttonStyle = {
        backgroundColor: 'yellow',
        outline: '1px solid black',
        width: '40px',
        height: '40px'
    };

    function genCol() {
        const col = [];

        for (let i = 0; i < 15; i++) {
            col.push(
                // Use buttonStyle variable for button style
                <button key={i} style={buttonStyle}></button>
            );
        }
        return col;
    }

    function genRow() {
        const row = [];
        for (let i = 0; i < 15; i++) {
            row.push(
                <div key={i}>
                    {genCol()}
                </div>
            );
        }
        return row;
    }

    return (<>{genRow()}</>);
}
