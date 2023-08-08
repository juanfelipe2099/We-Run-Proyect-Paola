import {InfoButtons} from "./InfoButtons"

// eslint-disable-next-line react/prop-types
export const Sections = ({city, constant}) => {
    return (
        <section>
        <h3 className="infoTitle"> {city} </h3>
        {{constant}.map((value, key) => {
          return <InfoButtons href={value.href} name={value.name} key={key} />;
        })}
      </section>
    )
}

export default Sections;