import style from './userProfile.module.css'

function UserProfile() {
  return (
    <>
      <h1 className={style.heading}>Module Css</h1>
      <div className={style.imgCard}>
        <div>
          <img
            className={style.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&s"
          />
        </div>
        <div className={style.textWrap}>
          <h2>Gayatri Kolhapure</h2>
          <h2>Software Engineer</h2>
        </div>
      </div>
    </>
  );
}
export default UserProfile;
