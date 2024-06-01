import "./bannerphone.css";

export function BannerPhone({ bannerImg, bannerTxt }) {
  return (
    <div className="banner-phone-main-container">
      <h1 className="banner-phone-txt">{bannerTxt}</h1>
      <img src={bannerImg} className="banner-phone-img" />
    </div>
  );
}
