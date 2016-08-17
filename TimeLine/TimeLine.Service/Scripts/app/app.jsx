var App = React.createClass( {
    displayName: "TimeLIne",
    render: function () {
        var events = function () {
            var eventboxarr = [];
            for ( var i = 0; i < 20; i++ ) {
                eventboxarr.push( function(){return(<EventBox />)}() );
            }
            return eventboxarr;
        }();

        return (
            <div className="MainContent">{ events }</div>
            );

    }

} );

ReactDOM.render(
    <App></App>,
    document.getElementById( "app" )

    )