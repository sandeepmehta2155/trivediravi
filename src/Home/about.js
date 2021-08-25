import * as useComponent from "../index";

export const About = () => {
  const AstrologyArray = [
    {
      id: 1,
      description:
        "Trivedi Raviji is holding expertise in various astrology branches like Vedic astrology, KP astrology, Vastu Shastr, Numerology, etc."
    },
    {
      id: 2,
      description:
        "In past, he gave mile-stone prediction in advance as an example Trump win the election, Late Jaylalitha ji’s death, P V sindhu couldn’t got Gold medal, Gold price touch at +41000 Rs, Box office success for many movies, etc.Also, there are numbers of clients who satisfied by Raviji’s accurate and insightful prediction and recommended less expensive but effective remedy."
    },
    {
      id: 3,
      description:
        "Raviji had conceiving idea of creating this website and its name on one sunny & beautiful morning while he was having visited to Lord Shiva’s Temple and he started to work-on with such sacred inspiration."
    },
    {
      id: 4,
      description:
        "Goal is to maintain this website for anyone who believe in astrology and to provide him/her life path through astrological solutions."
    },
    {
      id: 5,
      description:
        "Also, Astrologer who are participating in Astro-research can post the articles via this website. Person can approach to our core astrologer by using e-mail address info@trivediravi.com or can use whatsApp number 9574744469."
    }
  ];
  return (
    <>
      <h2>About Trivedi Ravi</h2>
      <h3>Know About Astrology</h3>
      <div className="su-list">
        <img
          src="https://trivediravi.com/wp-content/uploads/2020/11/home-about.png"
          alt="loading"
        />
        <ul className="listingItems">
          {AstrologyArray.map((key) => {
            return (
              <>
                <li key={key.id}>
                  <useComponent.FlowerSvg />
                  <span>{key.description}</span>
                </li>
              </>
            );
          })}
        </ul>
      </div>

      <button>Know More</button>
    </>
  );
};
