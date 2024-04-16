const BlogPost = ({img}) => {

  return (
    <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up">
        <div className="single-blog-area">
            <div className="blog_thumbnail">
                <img src={img} alt="" />
            </div>
            <div className="blog-content">
                
                <div className="post-meta mt-20">
                    <p>By <a href="#" className="post-author">ADMIN</a> <a href="#">Apr 10, 2018</a> <a href="#" className="post-comments">7 comments</a></p>
                </div>
                <a href="index-single-blog.html" className="post-title">
                    <h4>How to become a successful businessman.</h4>
                </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus fugiat at vitae, ratione sapiente repellat.</p>
                <a href="index-single-blog.html" className="btn dream-btn mt-15">Read Details</a>
            </div>
        </div>
    </div>
  );
}

export default BlogPost;