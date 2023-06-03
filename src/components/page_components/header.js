import React from "react";

class Header extends React.Component {
    render() {
        return(
            <header className="d-flex justify-content-end align-items-end align-items-xl-center header">
                <div className="col-12 col-md-7 d-none d-md-inline-block"></div>
                <div className="col-12 col-md-5">
                    <h1>Restaurant Your House</h1>
                </div>										
            </header>
        );
    }
}

export default Header