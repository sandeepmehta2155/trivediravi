import * as useComponent from "../index";

export const Home = () => {
  return (
    <>
      <useComponent.Header />
      <useComponent.SliderImg />
      <useComponent.Hero />
      <useComponent.ProductImg />
      <useComponent.About />
      <useComponent.Gurantee />
      <svg
        class="drift-default-icon drift-default-icon--chat-square"
        width="24"
        height="24"
        viewBox="0 0 20 20"
      >
        <path
          fill="yellow"
          d="M4.583 14.894l-3.256 3.78c-.7.813-1.26.598-1.25-.46a10689.413 10689.413 0 0 1 .035-4.775V4.816a3.89 3.89 0 0 1 3.88-3.89h12.064a3.885 3.885 0 0 1 3.882 3.89v6.185a3.89 3.89 0 0 1-3.882 3.89H4.583z"
        ></path>
      </svg>
      <useComponent.Footer />
    </>
  );
};
