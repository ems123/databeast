const Span = () => {
	return <span></span>
}

const SecNavbarToggler = () => {

  return (
        <div className="classy-navbar-toggler">
            <span className="navbarToggler">
            	{Array(3).fill().map((item , key) => (
            			<Span />
            		))}
            </span>
        </div>
    );
}

export default SecNavbarToggler;