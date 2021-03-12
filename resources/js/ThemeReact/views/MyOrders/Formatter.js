export default function reactFormatter(JSX) {
    return function customFormatter(cell, formatterParams, onRendered) {
        //cell - the cell component
        //formatterParams - parameters set for the column
        //onRendered - function to call when the formatter has been rendered
        onRendered(function () {
            var cellEl = cell.getElement();
            var CompWithMoreProps = React.cloneElement(JSX, { cell: cell });
            react_dom_1.render(CompWithMoreProps, cellEl.querySelector('.formatterCell'));
        });
        return '<div class="formatterCell"></div>';
    };
}