import SectionHeading from '../../../components/SectionHeading'

import BlogPost from './BlogPost'

const SecBlog = ({data}) => {

  return (
    <section className="our_blog_area clearfix" id="blog">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <SectionHeading
                        title='Latest News'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
                    />
                </div>
            </div>

            <div className="row justify-content-center">
                {data && data.map((item , key) => (
                    <BlogPost
                        key={key}
                        img={item.img}
                    />
                ))}
            </div>
        </div>
    </section>
  );
}

export default SecBlog;