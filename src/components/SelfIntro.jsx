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
      <h1 className="font-bold text-2xl">MOHAMMED FAISAL AHMED</h1>
      <p className="text-xl">Front-end-developer</p>
      <p className="text-xl">6362761431</p>
      <span>
        <SocialMedia />
      </span>
    </div>
  );
}
