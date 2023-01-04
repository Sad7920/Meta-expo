import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-3xl bg-[#323f5d]`}>
      <img src={imgUrl} alt="icon" className="object-contain w-[40%] h-[40%]" />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-7 text-white">{title}</h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">{subtitle}</p>
  </div>
);

export default NewFeatures;
