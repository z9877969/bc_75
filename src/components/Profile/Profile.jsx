import clsx from 'clsx';
import s from './Profile.module.css';

const Profile = ({
  firstName,
  lastName,
  birthDate,
  gender,
  address,
  avatarUrl,
  wrapperclassName,
  imageClassName,
}) => {
  return (
    <div className={clsx(s.profile, wrapperclassName && wrapperclassName)}>
      <img
        className={clsx(s.avatar, imageClassName && imageClassName)}
        src={avatarUrl}
        alt={'image of ' + firstName + lastName}
      />
      <p className={s.name}>
        Username: {firstName} {lastName}
      </p>
      <p className={s.birthdate}>Birhdate: {birthDate}</p>
      <p className={s.gender}>Gender: {gender}</p>
      <p className={s.address}>
        Address: {address.city}, {address.street}
      </p>
    </div>
  );
};

export default Profile;
