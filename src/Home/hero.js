export const Hero = () => {
  const reportsArray = [
    {
      heading: "Vastu Reports",
      text: "Get your home vastu reports, office vastu reports at minimum price"
    },
    {
      heading: "Career Reports",
      text: "Get your career reports at resonable price"
    },
    {
      heading: "Finance Reports",
      text: "Get your financial reports at minimum price"
    },
    {
      heading: "Business Reports",
      text: "Get your business reports at minimum price"
    },
    {
      heading: "Birth Start Reports",
      text: "Get your birth start reports at minimum price"
    }
  ];
  return (
    <>
      {" "}
      <h2> Daily Routines </h2>
      <span>
        Trivedi Ravi had studied vedic astrology, KP astrology, Navmansha
        method, arudh pada, Sarvatobhadra chakra, Muhurat shastr, Numerology, Lo
        shu grid, Vastu shastr.
      </span>
      <div className="heroTag">
        <div className="numerograph">
          <input placeholder="Name" type="text" />
          <br />
          <input type="date" /> <br />
          <select>
            <option></option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="reports">
          <ul>
            {reportsArray.map((item) => (
              <li>
                <h3> {item.heading} </h3>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="todaysExpertTips">
          <h2> Today's Expert Tips </h2>
          <p>
            Here is today's expert tips from our astroguru Mr. Trivedi Ravi. For
            more tips please contact on 9574744469
          </p>
          <img
            src="https://trivediravi.com/wp-content/themes/astro/images/experttips/25.jpg"
            alt="loading"
            width="30%"
          />
        </div>
      </div>
    </>
  );
};
