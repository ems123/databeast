const Li_A = ({icoName}) => <li><a href=""><i className={icoName}></i></a></li>

const SecSocialList = ({data}) => {

  return (
    <div className="col-lg-5 col-sm-12 text-center">
        <ul className="list-unstyled list-inline social-list">
        	{data && data.map((item , key) => (
    			<Li_A
    				key={key}
    				icoName={item.icoName}
    			/>
        	))}
        </ul>
    </div>
  );
}

export default SecSocialList;