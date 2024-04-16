import DocElement from './DocElement'

const IcoDocs = ({data}) => {

  return (
    <div className="ico-docs">
        <div className="row">
        	{data && data.map((item , key) => (
	            <DocElement title={item.title} />
        	))}
        </div>
    </div>
  );
}

export default IcoDocs;