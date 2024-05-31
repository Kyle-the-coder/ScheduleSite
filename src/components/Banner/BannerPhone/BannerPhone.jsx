import "./bannerphone.css";

export function BannerPhone({ bannerImg }) {
  return (
    <div className="banner-phone-main-container">
      <img src={bannerImg} className="banner-phone-img" />
    </div>
  );
}
