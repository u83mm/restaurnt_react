export default function Nav({ links }) {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <div className="col-5 col-sm-1 col-md-2 col-lg-2 col-xl-1">
                    <a className="navbar-brand" href="/"><img src="/images/main_logo.png" className="img-fluid float-start" alt="imagen_logo" /></a>								
                </div>							
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#my_nav" aria-controls="my_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="my_nav">
                    <ul className="nav navbar-nav justify-content-center w-100">
                       { links }
                    </ul>
                </div>                																					
            </div>
        </nav>
    );
}