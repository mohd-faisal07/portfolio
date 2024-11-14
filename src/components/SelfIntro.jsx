import SocialMedia from "./SocialMedia";
export default function SelfIntro() {
  return (
    <div className="text-left ml-2">
      <span>
        <img
          src="img/self-img.jpg"
          alt="selfi"
          className="border rounded-xl w-[320px] h-[320px]"
        />
      </span>
      <h1 className="font-bold text-2xl py-2 mt-2">
        Hello 😊, I am{" "}
        <span className="text-3xl text-slate-700">MOHAMMED FAISAL AHMED</span>
      </h1>
      <p className="text-xl mt-2">Front-end-developer</p>
      <p className="text-xl mt-2">6362761431</p>
      <span>
        <SocialMedia />
      </span>
    </div>
  );
}
