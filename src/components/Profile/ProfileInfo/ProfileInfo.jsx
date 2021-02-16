import sProfileInfo from './ProfileInfo.module.css'



const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Тут типа картинка" className={sProfileInfo.image} />
      </div>

      <div className={sProfileInfo.descriptionBlock}>
        <img src="https://cdn.the-scientist.com/assets/articleNo/67431/aImg/37291/lemur-wrist-glands-scent-pheromones-primates-testosterone-mating-breeding-sexual-communication-t.png" alt="Тут типа ава" className={sProfileInfo.avatar} />
      </div>
    </div>
  );

}
export default ProfileInfo;
