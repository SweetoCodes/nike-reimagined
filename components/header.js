import { Button, GithubIcon, Youtube, TwitterIcon, TiktokIcon } from "./atoms";

export const ScrollInstruction = () => {
  return (
    <div className="space-y-2">
      <h1 className="text-5xl font-bold">Nike</h1>
      <h2 className="">Scroll to discover the Air Max 90</h2>
    </div>
  );
};

export const Quote = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-5xl font-bold">Iconic</h1>
      <h2 className="italic">
        First a legend on the track and then a legend in the streets
      </h2>
    </div>
  );
};

export const Heel = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-5xl font-bold">Perfectly Soft</h1>
      <h2 className="">
        The visible Max Air unit in the heel provides comfortable cushioning
      </h2>
    </div>
  );
};

export const Ankle = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-5xl font-bold">Ideal Support</h1>
      <h2 className="">
        A padded collar is soft and supportive around the ankle.
      </h2>
    </div>
  );
};

export const Midsole = () => {
  return (
    <div className="space-y-3">
      <h1 className="text-5xl font-bold">Lighter Than Air</h1>
      <h2 className="">
        A foam midsole is lightweight and durable, helping to absorb impact with
        each stride.
      </h2>
    </div>
  );
};

export const TitleAndPrice = () => {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="font-bold">Nike</h1>
      <h2 className="">Air Max 90</h2>
      <h2 className="">£124.95</h2>
    </div>
  );
};

export const SelectSize = () => {
  return (
    <div className="pointer-events-auto space-y-3">
      <h1 className="font-bold">Select Size</h1>
      <div className="">
        {[
          "UK 5.5",
          "UK 6",
          "UK 6.5",
          "UK 7",
          "UK 7.5",
          "UK 8",
          "UK 8.5",
          "UK 9",
          "UK 9.5",
        ].map((size, idx) => (
          <Button size={size} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export const BuiltBy = () => {
  return (
    <div className="flex flex-col space-y-3 pointer-events-auto">
      <h1 className="">Nike Reimagined</h1>
      <h2 className="">
        Built by{" "}
        <a href="https://www.charliesweeting.com/">
          {" "}
          <span className="underline">Charlie Sweeting</span>
        </a>
      </h2>
      <div className="space-x-6 flex flex-row mx-auto">
        <GithubIcon style="h-10 w-10" /> <Youtube style="h-10 w-10" />{" "}
        <TwitterIcon style="h-10 w-10" /> <TiktokIcon style="h-10 w-10" />{" "}
      </div>
    </div>
  );
};
