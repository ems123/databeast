const Li_A = ({nameIco, link}) => <li><a href={link}><i className={nameIco} aria-hidden="true"></i></a></li>

const SecVerticalSocial = ({data}) => {

  return (
    <div className="vertical-social">
        <ul>
            {data && data.map((item , key) => (
                    <Li_A nameIco={item.nameIco} link={item.link} />
                ))
            }
            
        </ul>                  
    </div>
  );
}

export default SecVerticalSocial;