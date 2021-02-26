import Preloader from '../../common/preloader/Preloader';
import sProfileInfo from './ProfileInfo.module.css'



const ProfileInfo = (props) => {
  //debugger
  if(!props.profile)//если null или undefined
  {
    return <Preloader/>
  }
  else{
    //debugger
    return (
      <div>
        <div>
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Тут типа картинка" className={sProfileInfo.image} />
        </div>

        <div>{props.profile.fullName}</div>
        <div className={sProfileInfo.descriptionBlock}>
          <img src={props.profile.photos.small} alt="Тут типа ава" className={sProfileInfo.avatar} />
          
        </div>
        <div>Status:{props.profile.aboutMe}</div>
        <div><p>Contacts:</p>
        <a href={props.profile.contacts.vk}>VK</a></div>
      </div>
    );
  }


}
export default ProfileInfo;
