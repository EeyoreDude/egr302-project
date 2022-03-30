
function StreamCard(){

    return (
        <div className="m-4 streamCard streamText" onClick={() => navigate('/assignment')}>
        <p className="small float-right font-weight-light">due 11:59pm</p>
        <h6>Assignment 1</h6>
        <p className="m-2 small w-100">Write an essay about something you don't care about.</p>
        </div>
    )
}

export default StreamCard