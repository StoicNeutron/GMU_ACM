export default function Node() {

    function genCol() {
        const col = [];

        for (let i = 0; i < 15; i++) {
            col.push(
                <button key={i} style={{ backgroundColor: 'yellow', outline: '1px solid black', width: '40px', height: '40px' }}></button>
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