import Demo from "./Demo";

const SectionDemo = ({data}) => {

  return (
    <div class="row">
      {data && data.map((item , key) => (
          <Demo
            key={key}
            img={item.img}
            path={item.path}
          />
        ))}
    </div>
  );
}

export default SectionDemo;
