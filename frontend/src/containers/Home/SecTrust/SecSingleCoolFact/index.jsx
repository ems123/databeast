import SingleCoolFact from './SingleCoolFact'

const SecSingleCoolFact = ({data}) => {

  return (
  	<>
	  	{data && data.map((item , key) => (
					<SingleCoolFact
						key={key}
						img={item.img}
						ico_check={item.ico_check}
					/>
	  		))}
  	</>
  );
}

export default SecSingleCoolFact;