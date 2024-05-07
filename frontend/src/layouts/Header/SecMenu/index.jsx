const Li_A = ({path , nameLink}) => {
	return <li><a href={path}>{nameLink}</a></li>
}

const SecMenu = ({data}) => {

  return (
	    <div className="classy-menu">

	        <div className="classycloseIcon">
	            <div className="cross-wrap">
	            	<span className="top"></span>
	            	<span className="bottom"></span>
	            </div>
	        </div>

	        <div className="classynav">
	            <ul id="nav" data-aos="fade-down">
	            	{data && data.map((item , key) => (
	            			<Li_A
	            				key={key}
	            				path={item.path}
	            				nameLink={item.nameLink}
	            			/>
	            		))
	            	}
	            </ul>

	            <a href="/try-now" className="btn login-btn ml-50">Try now</a>
	        </div>
	    </div>
    );
}

export default SecMenu;